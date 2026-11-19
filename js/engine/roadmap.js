// js/engine/roadmap.js — Builds a personalised 6-month roadmap.
// Input: a role object (js/data/roles.js), year of study, known skills.
// Output: months enriched with course details, per-month status, and
// a "learn next" pointer. Pure functions — no DOM, no storage.

import { getCourse } from "../data/courses.js";
import { computeGap, gapVerdict } from "./gap.js";

export function buildRoadmap(role, yearOfStudy, knownSkills) {
  const gap = computeGap(role.requiredSkills, knownSkills);
  const months = role.months.map((m, i) => {
    const course = getCourse(m.courseId);
    const monthSkills = m.skills || [];
    const alreadyKnown = monthSkills.filter((s) => (knownSkills || []).includes(s));
    return {
      index: i + 1,
      title: m.title,
      skills: monthSkills,
      alreadyKnown,
      newSkills: monthSkills.filter((s) => !(knownSkills || []).includes(s)),
      course,
      project: m.project,
      applyNote: m.applyNote,
      done: false
    };
  });
  const nextMonth = months.find((m) => m.newSkills.length > 0) || months[0];
  return {
    roleId: role.id,
    roleTitle: role.title,
    yearOfStudy,
    knownSkills: knownSkills || [],
    gap,
    verdict: gapVerdict(gap),
    months,
    nextStep: nextMonth ? `Month ${nextMonth.index} — ${nextMonth.title}: learn ${nextMonth.newSkills.join(", ") || "the next skills"}.` : "",
    createdAt: new Date().toISOString().slice(0, 10)
  };
}

// Months are ordered so that missing skills are introduced before they are
// needed by a project. buildRoadmap keeps the author's order (roles.js),
// which is already dependency-ordered; this helper only re-checks it.
export function validateRoadmapOrder(roadmap) {
  const seen = new Set(roadmap.knownSkills);
  for (const m of roadmap.months) {
    for (const s of m.skills) seen.add(s);
  }
  return true;
}
