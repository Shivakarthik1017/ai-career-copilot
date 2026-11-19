# AI Career Copilot — Learn With Shivakarthik

A **big, professional, scalable, company-grade** web app for Indian students:
pick a target role, get a 6-month AI-powered career roadmap, see your skill
gaps, ask an AI mentor, and apply to verified live opportunities — all free,
with no login and no backend.

> Project 2 for Pendyala Shivakarthik · Due 20 Nov 2026 · Built after
> Project 1 (Student Opportunities Finder).

## What it does

| Feature | How it works |
|---|---|
| **Role picker** | 8 roles: Cybersecurity Intern, SDE Intern, Data Analyst, Web Developer, AI/ML Intern, UI/UX Designer, DevOps Intern, Prompt Engineer |
| **6-month roadmap** | Skills in dependency order, one verified free course per month, one project per month, when to apply |
| **Skill-gap analysis** | Known skills vs role requirements, % ready, missing skills highlighted |
| **AI Mentor Chat** | DeepSeek (`deepseek-chat`) via a clean API client — or the built-in rule-based mentor when no key is set |
| **Matched opportunities** | 13 verified jobs / internships / scholarships / free courses, matched to the role, with live deadline countdowns |
| **Progress & streak** | Tick months off, daily streak, all saved in localStorage on the student's own device |

## Architecture

```
index.html                  — shell: hero, role picker, roadmap, chat, settings
styles.css                  — dark teal/orange brand, mobile-first, responsive
js/
  app.js                    — bootstrap + state wiring only
  storage.js                — ALL persistence (localStorage, namespaced "acc:*")
  data/
    roles.js                — 8 roles: skills + 6-month plans (config)
    courses.js              — 14 verified FREE courses (config)
    opportunities.js        — 13 verified opportunities + countdown helpers
  engine/
    roadmap.js              — builds a personalised roadmap from role + profile
    gap.js                  — skill-gap maths (pure functions)
  api/
    llm.js                  — DeepSeek client + rule-based fallback mentor
  ui/
    render.js               — DOM rendering (pure HTML builders)
    chat.js                 — chat panel: DeepSeek → fallback, never a dead screen
```

```
User ──► app.js ──► engine/roadmap.js + engine/gap.js
                ├─► ui/render.js (roadmap, gap, opportunities)
                ├─► ui/chat.js ──► api/llm.js ──► DeepSeek API (key in localStorage)
                │                              └─► fallback mentor (no key / API error)
                └─► storage.js (profile, progress, streak, chat, key)
```

**Design rules:** config-driven (add a role/course by editing one data file,
no UI changes), modular (no single giant file), pure functions in the engine
so they are testable, loading / error / empty states everywhere.

## DeepSeek integration

- Client: `js/api/llm.js`, `POST https://api.deepseek.com/chat/completions`,
  model `deepseek-chat`, system prompt = career mentor for Indian students,
  free-resources only, never invent salaries / deadlines / links.
- **The API key is never hardcoded.** The student enters their own key in
  Settings → it is stored only in `localStorage` on their own device, sent
  only to `api.deepseek.com`, and can be removed at any time.
- **Fallback:** with no key, or if the API call fails (bad key, network,
  empty reply), the chat answers with a rule-based mentor built from the
  student's own roadmap (role, missing skills, next step, verified courses).
  Every reply is labelled `AI · DeepSeek` or `Built-in mentor`.

## How to run

No build step, no backend, no install.

1. Open `index.html` in a browser — or deploy the folder to GitHub Pages
   (Settings → Pages → Deploy from a branch → main → / root).
2. Pick a role, your year, tick the skills you know, click
   **Generate my roadmap**.
3. (Optional) Settings → paste your DeepSeek API key for full AI answers.
   Get a key at https://platform.deepseek.com/.

> Note: ES modules need HTTP(S) — `file://` may block them in some
> browsers. GitHub Pages (or any static host / `python3 -m http.server`)
> works.

## How to add a new role / course

- **Role:** add one object to `ROLES` in `js/data/roles.js`
  (`requiredSkills` + 6 `months` with `courseId`). The picker, gap
  analysis and roadmap pick it up automatically.
- **Course:** add one object to `COURSES` in `js/data/courses.js` and
  reference its `id` from a role's month. Only add courses you have
  verified as free — flag paid exams in the `note`.
- **Opportunity:** add to `OPPORTUNITIES` in `js/data/opportunities.js`
  only after verifying it on the official page. Never invent a deadline
  or link.

## Data sources (verified 17–19 Nov 2026)

Opportunities and courses come from Project 1's research
(`~/workspace/research_notes/student-jobs-free-courses-india-20261117-0024/report.md`):
Google Student Researcher 2027, Amazon SDE Intern Jan 2027, State Street
Early Career 2027, Google Forward Deployed Engineer Intern 2027, IndiaAI
Fellowship, UGC Ishan Uday, Commonwealth Shared Scholarships, TCS CodeVita
S14 (registration extended to 20 Nov 2026), Google Generative AI, IBM
SkillsBuild, AWS Skill Builder, Microsoft Learn, Salesforce Trailhead.

## Tech stack

Plain HTML / CSS / JavaScript (ES modules). No framework, no build step,
no backend, no database — localStorage only. Deployable on GitHub Pages.

## Links

- Learn With Shivakarthik — LinkedIn: https://www.linkedin.com/in/shivakarthik17/
- GitHub: https://github.com/Shivakarthik1017
- Free career guidance on WhatsApp: https://wa.me/919640971021
- WhatsApp group: https://chat.whatsapp.com/COoY9YpwaFy57zx380F4cZ
