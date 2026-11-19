// js/ui/render.js — All DOM rendering. Takes plain data, returns HTML.
// No data fetching or API calls here — app.js owns state and wiring.

import { daysLeftLabel } from "../data/opportunities.js";

export function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

export function roleCard(role) {
  return `<button class="role-card" data-role="${esc(role.id)}" type="button" aria-pressed="false">
    <span class="role-icon" aria-hidden="true">${esc(role.icon)}</span>
    <span class="role-title">${esc(role.title)}</span>
    <span class="role-tag">${esc(role.tagline)}</span>
    <span class="role-skills">${role.requiredSkills.length} skills to master</span>
  </button>`;
}

export function skillChip(skill, checked) {
  return `<label class="chip"><input type="checkbox" value="${esc(skill)}" ${checked ? "checked" : ""}> ${esc(skill)}</label>`;
}

export function gapHTML(roadmap) {
  const g = roadmap.gap;
  const have = g.have.map((s) => `<span class="tag have">✓ ${esc(s)}</span>`).join("");
  const missing = g.missing.map((s) => `<span class="tag missing">• ${esc(s)}</span>`).join("");
  return `
  <div class="gap-card">
    <div class="gap-head"><h3>Skill-gap analysis</h3><span class="gap-pct">${g.pct}% ready</span></div>
    <div class="progress" role="progressbar" aria-valuenow="${g.pct}" aria-valuemin="0" aria-valuemax="100"><div class="progress-fill" style="width:${g.pct}%"></div></div>
    <p class="muted">You already know ${g.knownCount} of ${g.total} skills for ${esc(roadmap.roleTitle)}.</p>
    <p class="verdict">${esc(roadmap.verdict)}</p>
    <h4>You have</h4><div class="tags">${have || '<span class="muted">None yet — the roadmap starts from zero.</span>'}</div>
    <h4>To learn</h4><div class="tags">${missing || '<span class="muted">Nothing missing — start applying.</span>'}</div>
  </div>`;
}

export function monthHTML(month, done) {
  const c = month.course;
  const courseHTML = c
    ? `<a class="course" href="${esc(c.url)}" target="_blank" rel="noopener"><strong>${esc(c.title)}</strong><span>${esc(c.provider)} · ${esc(c.hours)} · ${esc(c.badge)}</span><span class="muted">${esc(c.note)}</span></a>`
    : `<p class="muted">No course linked for this month.</p>`;
  const skills = month.skills.map((s) => `<span class="tag ${month.alreadyKnown.includes(s) ? "have" : "missing"}">${esc(s)}</span>`).join("");
  return `<article class="month ${done ? "done" : ""}" data-month="${month.index}">
    <label class="month-check"><input type="checkbox" data-month-check="${month.index}" ${done ? "checked" : ""} aria-label="Mark Month ${month.index} complete"> <span>Month ${month.index}</span></label>
    <h3>${esc(month.title)}</h3>
    <div class="tags">${skills}</div>
    ${courseHTML}
    <p><strong>Build:</strong> ${esc(month.project)}</p>
    <p class="muted">💡 ${esc(month.applyNote)}</p>
  </article>`;
}

export function opportunityCard(item, matched) {
  const d = daysLeftLabel(item);
  return `<article class="opp ${matched ? "matched" : ""}">
    <div class="opp-top"><span class="opp-type">${esc(item.type)}</span><span class="deadline ${d.cls}">${esc(d.text)}</span></div>
    <h3>${esc(item.title)}</h3>
    <p class="muted">${esc(item.provider)}</p>
    <p><strong>Who can apply:</strong> ${esc(item.eligibility)}</p>
    <p><strong>Cost / award:</strong> ${esc(item.cost)}</p>
    <p><a href="${esc(item.link)}" target="_blank" rel="noopener">Apply / learn more ↗</a> <span class="muted">— ${esc(item.linkNote)}</span></p>
  </article>`;
}

export function chatMessageHTML(msg) {
  return `<div class="msg ${msg.role}"><div class="msg-bubble">${esc(msg.content).replace(/\n/g, "<br>")}</div>${msg.source ? `<span class="msg-src">${msg.source === "deepseek" ? "AI · DeepSeek" : "Built-in mentor"}</span>` : ""}</div>`;
}
