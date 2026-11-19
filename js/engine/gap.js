// js/engine/gap.js — Skill-gap analysis.
// Compares the skills a student already knows against what a role requires.
// Pure functions: no DOM, no storage — easy to unit-test.

export function computeGap(requiredSkills, knownSkills) {
  const known = new Set((knownSkills || []).map((s) => s.trim()));
  const missing = requiredSkills.filter((s) => !known.has(s));
  const have = requiredSkills.filter((s) => known.has(s));
  const pct = requiredSkills.length === 0 ? 100 : Math.round((have.length / requiredSkills.length) * 100);
  return { have, missing, pct, total: requiredSkills.length, knownCount: have.length };
}

export function gapVerdict(gap) {
  if (gap.pct >= 75) return "You are close — finish the last few skills and start applying.";
  if (gap.pct >= 50) return "Solid start — about half the role's skills are already yours.";
  if (gap.pct >= 25) return "Good foundation — the roadmap below fills the gaps in order.";
  return "Starting fresh — that is fine. The roadmap starts from zero and builds up.";
}
