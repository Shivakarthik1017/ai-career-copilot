// js/app.js — Bootstrap + state wiring.
// Owns: profile state (role / year / known skills), roadmap generation,
// progress checkboxes, streak. Rendering lives in js/ui/render.js;
// the mentor lives in js/ui/chat.js. No Settings/key panel: the DeepSeek
// key (if any) lives in js/config.js, a local gitignored file.

import { ROLES, getRole, ALL_SKILLS } from "./data/roles.js";
import { COURSES } from "./data/courses.js";
import { matchedOpportunities } from "./data/opportunities.js";
import { buildRoadmap } from "./engine/roadmap.js";
import { store } from "./storage.js";
import { roleCard, skillChip, gapHTML, monthHTML, opportunityCard, esc } from "./ui/render.js";
import { initChat } from "./ui/chat.js";

const $ = (id) => document.getElementById(id);

let state = {
  roleId: null,
  year: "2",
  known: [],
  roadmap: null
};

function saveProfile() {
  store.saveProfile({ roleId: state.roleId, year: state.year, known: state.known });
}

function renderRoles() {
  $("roleGrid").innerHTML = ROLES.map(roleCard).join("");
  document.querySelectorAll(".role-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.roleId = btn.getAttribute("data-role");
      document.querySelectorAll(".role-card").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      saveProfile();
      $("generateBtn").disabled = false;
      $("generateBtn").textContent = `Generate my ${getRole(state.roleId).title} roadmap →`;
    });
  });
}

function renderSkills() {
  $("skillGrid").innerHTML = ALL_SKILLS.map((s) => skillChip(s, state.known.includes(s))).join("");
  document.querySelectorAll("#skillGrid input").forEach((cb) => {
    cb.addEventListener("change", () => {
      state.known = [...document.querySelectorAll("#skillGrid input:checked")].map((i) => i.value);
      saveProfile();
    });
  });
}

function progressStats() {
  if (!state.roadmap) return { done: 0, total: 0, pct: 0 };
  const p = store.getProgress(state.roadmap.roleId);
  const done = state.roadmap.months.filter((m) => p[m.index]).length;
  return { done, total: state.roadmap.months.length, pct: Math.round((done / state.roadmap.months.length) * 100) };
}

function renderProgress() {
  const s = progressStats();
  const streak = store.getStreak();
  $("progressBar").style.width = s.pct + "%";
  $("progressText").textContent = `${s.done} of ${s.total} months complete · ${s.pct}%`;
  $("streakText").textContent = `🔥 ${streak.count}-day streak — open the app daily to keep it going.`;
  const hs = $("headerStreak");
  if (hs) hs.textContent = `🔥 ${streak.count}-day streak`;
}

function renderRoadmap() {
  const r = state.roadmap;
  if (!r) return;
  $("roadmapSection").hidden = false;
  $("roadmapTitle").textContent = `Your ${r.roleTitle} roadmap — 6 months`;
  $("roadmapMeta").textContent = `Year ${r.yearOfStudy} · Created ${r.createdAt} · Next: ${r.nextStep}`;
  $("gapBox").innerHTML = gapHTML(r);
  const progress = store.getProgress(r.roleId);
  $("monthsBox").innerHTML = r.months.map((m) => monthHTML(m, Boolean(progress[m.index]))).join("");
  document.querySelectorAll("[data-month-check]").forEach((cb) => {
    cb.addEventListener("change", () => {
      store.toggleMonth(r.roleId, Number(cb.getAttribute("data-month-check")));
      store.touchStreak();
      renderProgress();
      renderRoadmapDoneState();
    });
  });
  renderRoadmapDoneState();
  renderProgress();
  const opps = matchedOpportunities(r.roleId);
  $("oppsBox").innerHTML = opps.map((o) => opportunityCard(o, o.roles.includes(r.roleId))).join("");
  $("oppsCount").textContent = `${opps.filter((o) => o.roles.includes(r.roleId)).length} matched to ${r.roleTitle} · ${opps.length} total verified opportunities`;
}

function renderRoadmapDoneState() {
  const r = state.roadmap; if (!r) return;
  const progress = store.getProgress(r.roleId);
  document.querySelectorAll(".month").forEach((el) => {
    const idx = Number(el.getAttribute("data-month"));
    el.classList.toggle("done", Boolean(progress[idx]));
  });
}

function generate() {
  const role = getRole(state.roleId);
  if (!role) return;
  state.roadmap = buildRoadmap(role, state.year, state.known);
  renderRoadmap();
  $("roadmapSection").scrollIntoView({ behavior: "smooth", block: "start" });
}

function init() {
  const saved = store.getProfile();
  if (saved) {
    state.roleId = saved.roleId; state.year = saved.year || "2"; state.known = saved.known || [];
  }
  $("yearSelect").value = state.year;
  $("yearSelect").addEventListener("change", (e) => { state.year = e.target.value; saveProfile(); });
  renderRoles();
  renderSkills();
  if (state.roleId) {
    const btn = document.querySelector(`.role-card[data-role="${state.roleId}"]`);
    if (btn) { btn.setAttribute("aria-pressed", "true"); $("generateBtn").disabled = false; $("generateBtn").textContent = `Generate my ${getRole(state.roleId).title} roadmap →`; }
  }
  $("generateBtn").addEventListener("click", generate);
  $("resetBtn").addEventListener("click", () => {
    state.roadmap = null; $("roadmapSection").hidden = true; window.scrollTo({ top: 0, behavior: "smooth" });
  });
  initChat(() => {
    if (!state.roadmap) return { roleTitle: "your chosen role", missing: [], nextStep: "Pick a role above and generate your roadmap first.", courses: COURSES.slice(0, 3) };
    return {
      roleTitle: state.roadmap.roleTitle,
      missing: state.roadmap.gap.missing,
      nextStep: state.roadmap.nextStep,
      courses: state.roadmap.months.map((m) => m.course).filter(Boolean)
    };
  });
  renderProgress();
  // Restore last roadmap automatically if a profile was saved.
  if (state.roleId) generate();
}

if (document.readyState !== "loading") init(); else document.addEventListener("DOMContentLoaded", init);
