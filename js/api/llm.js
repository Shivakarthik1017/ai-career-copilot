// js/api/llm.js — DeepSeek LLM client + rule-based fallback.
// The API key is NEVER hardcoded. The user enters their own key in the
// Settings panel; it is stored only in localStorage (see js/storage.js)
// and sent only to https://api.deepseek.com — never to any other server.
// If no key is set, or the API call fails, the app uses the built-in
// rule-based mentor (fallbackAnswer), so the chat never shows a dead screen.

import { store } from "../storage.js";

export const LLM = {
  endpoint: "https://api.deepseek.com/chat/completions",
  model: "deepseek-chat",
  hasKey: () => Boolean(store.getApiKey()),
  systemPrompt:
    "You are an AI career mentor for Indian students. Be practical, honest and encouraging. " +
    "Recommend only free learning resources (Google Skills, IBM SkillsBuild, AWS Skill Builder, Microsoft Learn, NPTEL, Cisco Networking Academy, Infosys Springboard). " +
    "Never invent salaries, deadlines, job links or scholarships. If you are unsure of a fact, say so and tell the student to check the official page. " +
    "Give short, structured answers: a direct answer, then 3-5 concrete next steps, then one small project to build. Keep answers under 250 words.",

  async chat(messages) {
    const key = store.getApiKey();
    if (!key) return { ok: false, error: "no-key" };
    try {
      const res = await fetch(this.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + key },
        body: JSON.stringify({
          model: this.model,
          messages: [{ role: "system", content: this.systemPrompt }, ...messages],
          temperature: 0.7,
          max_tokens: 600
        })
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        return { ok: false, error: res.status === 401 ? "bad-key" : "api-error", detail: text.slice(0, 200) };
      }
      const data = await res.json();
      const reply = data?.choices?.[0]?.message?.content?.trim();
      if (!reply) return { ok: false, error: "empty" };
      return { ok: true, reply, source: "deepseek" };
    } catch (e) {
      return { ok: false, error: "network", detail: String(e && e.message ? e.message : e) };
    }
  }
};

// ---- Rule-based fallback mentor (works with no key, no internet) ----
// Uses the student's own roadmap context: role, known/missing skills,
// current month and the verified course list. Never invents facts.

export function fallbackAnswer(question, ctx = {}) {
  const q = (question || "").toLowerCase();
  const role = ctx.roleTitle || "your chosen role";
  const missing = ctx.missing || [];
  const next = ctx.nextStep || "";
  const courses = ctx.courses || [];

  const pickCourse = () => {
    const c = courses[0];
    return c ? `${c.title} (${c.provider}) — free, ${c.hours}. ${c.url}` : "Google Skills — Introduction to Generative AI (free, 45 min).";
  };

  if (/(salary|stipend|pay|package|lpa)/.test(q)) {
    return "I can't give you a reliable salary figure — pay varies by company, city and year, and I won't guess. What I can tell you: build the skills in your roadmap, ship 2–3 real projects on GitHub, and apply early. That is what actually moves your chances.\n\nNext step: " + next;
  }
  if (/(resume|cv|interview)/.test(q)) {
    return "For your resume and interviews, keep it simple:\n1. One page: skills, 2–3 projects with live links, education.\n2. Each project: what it does, what you built it with, one result.\n3. For interviews, practise explaining your projects out loud — that is the question you will definitely get.\n\nNext step: " + next;
  }
  if (/(course|learn|study|start|begin|how do i|how to)/.test(q)) {
    return `To become a ${role}, start with your biggest gap${missing.length ? ": " + missing.slice(0, 3).join(", ") : ""}.\n\n1. This week's course: ${pickCourse()}\n2. Build the Month 1 project from your roadmap — a finished project beats ten half-read courses.\n3. Push it to GitHub with a README and screenshots.\n\n${next}`;
  }
  if (/(project)/.test(q)) {
    return "Build one small project per month from your roadmap — each one should solve a real problem and be live on GitHub. A good project has: a clear purpose, a README, screenshots, and a live link. Recruiters open links; they don't read claims.\n\n" + next;
  }
  if (/(deadline|apply|when|scholarship|internship|job)/.test(q)) {
    return "Check the “Matched Opportunities” section below your roadmap — every deadline there was verified, with a countdown. Apply to the closest deadline first, and never wait for the last day: portals slow down and sometimes close early.\n\n" + next;
  }
  return `Good question. For a ${role}, the honest path is: learn the missing skills in order, build one project a month, and apply while you learn — don't wait until you feel “ready”.\n\n${missing.length ? "Your biggest gaps right now: " + missing.slice(0, 4).join(", ") + ".\n\n" : ""}${next}\n\nTip: ask me something specific — “what course should I do first?”, “what project should I build?”, or “how do I prepare for interviews?” — and I'll give you a concrete plan. (Offline mentor mode: add your DeepSeek API key in Settings for full AI answers.)`;
}

export function errorMessage(err) {
  if (err === "no-key") return "No DeepSeek key set — answering with the built-in mentor. Add your key in Settings for full AI answers.";
  if (err === "bad-key") return "Your DeepSeek key was rejected (401). Check the key in Settings and try again. Answering with the built-in mentor meanwhile.";
  if (err === "network") return "Couldn't reach DeepSeek (network error). Answering with the built-in mentor meanwhile.";
  return "DeepSeek returned an error. Answering with the built-in mentor meanwhile.";
}
