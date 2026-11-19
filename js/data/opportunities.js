// js/data/opportunities.js — Live opportunities, verified 17–19 Nov 2026.
// Copied from Project 1 (Student Opportunities Finder) — do NOT invent
// new items, deadlines or links here. Update a deadline only after
// re-verifying it on the official page.
// roles: which target roles this opportunity is relevant for.
// deadline: "YYYY-MM-DD" or null (no deadline published).

export const OPPORTUNITIES = [
  {
    title: "Google — Student Researcher, 2027", provider: "Google (India, remote-eligible)",
    type: "Internship", deadline: "2026-12-04", deadlineText: "4 December 2026",
    roles: ["ai-ml-intern", "data-analyst", "sde-intern"],
    eligibility: "Currently enrolled BS / MS / PhD in CS, Linguistics, Statistics, Applied Maths, Economics or Natural Sciences, with experience in one CS area. Must remain in India.",
    cost: "Free to apply. Stipend not disclosed by Google.",
    link: "https://www.google.com/about/careers/applications/jobs/results/125423735539671750-student-researcher-2027",
    linkNote: "Official Google Careers page. Rolling review — apply early."
  },
  {
    title: "Amazon — SDE Intern, Jan 2027", provider: "Amazon — Job ID 10517894",
    type: "Internship", deadline: null, deadlineText: "No deadline published — rolling",
    roles: ["sde-intern", "web-developer", "devops-intern"],
    eligibility: "Students graduating in 2027; Bachelor's or above in CS, Computer Engineering, Data Science, Information Systems or related STEM; one general-purpose programming language; data structures, algorithms, OOP.",
    cost: "Free to apply. Stipend not disclosed. 22–24 weeks, start Jan 2027.",
    link: "https://www.amazon.jobs/en/jobs/10517894/software-development-engineer-intern-jan-2027-6-month-amazon-university-talent-acquisition",
    linkNote: "Official amazon.jobs page."
  },
  {
    title: "State Street — Technology Early Career Entry Program 2027", provider: "State Street — Req R-800791, Bengaluru + Hyderabad",
    type: "Job", deadline: "2026-11-30", deadlineText: "30 November 2026",
    roles: ["sde-intern", "web-developer", "data-analyst", "devops-intern"],
    eligibility: "B.Tech graduates or equivalent in a related field. Branch, graduation year and CGPA were not stated — confirm with the recruiter.",
    cost: "Free to apply. Salary / stipend not disclosed officially.",
    link: "https://freshershunt.in/state-street-internship-2027/",
    linkNote: "Source page linking the official State Street (Workday) posting — check Req R-800791."
  },
  {
    title: "Google — Forward Deployed Engineer Intern, 2027", provider: "Google — Bengaluru",
    type: "Internship", deadline: null, deadlineText: "No deadline published",
    roles: ["sde-intern", "ai-ml-intern", "web-developer"],
    eligibility: "Penultimate-year students (per listing).",
    cost: "Free to apply.",
    link: "https://freshershunt.in/off-campus-drive-jobs/off-campus-drive/",
    linkNote: "Source list page — search Google Careers for “Forward Deployed Engineer Intern, 2027”."
  },
  {
    title: "IndiaAI Fellowship 2026-27", provider: "IndiaAI Mission, MeitY, Govt. of India",
    type: "Scholarship", deadline: "2026-11-30", deadlineText: "30 November 2026",
    roles: ["ai-ml-intern", "data-analyst", "sde-intern", "cybersecurity-intern"],
    eligibility: "UG (incl. final-year), Integrated Dual Degree and PG students (semesters 1–3), and first-year PhD scholars working on AI-related projects/research, any stream.",
    cost: "Free to apply. Up to ₹1 lakh (UG), up to ₹2 lakh (PG).",
    link: "https://fellowship.indiaai.gov.in/",
    linkNote: "Official portal — apply well before the last day."
  },
  {
    title: "UGC Ishan Uday Special Scholarship 2026-27", provider: "University Grants Commission — North Eastern Region",
    type: "Scholarship", deadline: "2026-11-30", deadlineText: "30 November 2026",
    roles: ["cybersecurity-intern", "sde-intern", "data-analyst", "web-developer", "ai-ml-intern", "ui-ux-designer", "devops-intern", "prompt-engineer"],
    eligibility: "First-year UG students with domicile of a North-Eastern state, Class 12 passed from a school in the NER, parental income below ₹4.5 lakh/year.",
    cost: "Free to apply. ₹8,000/month for 10 months a year; check NSP for the current figure.",
    link: "https://scholarships.gov.in",
    linkNote: "National Scholarship Portal (NSP)."
  },
  {
    title: "Commonwealth Shared Scholarships 2027", provider: "Commonwealth Scholarship Commission, UK",
    type: "Scholarship", deadline: "2026-12-08", deadlineText: "8 December 2026, 16:00 GMT",
    roles: ["cybersecurity-intern", "sde-intern", "data-analyst", "web-developer", "ai-ml-intern", "ui-ux-designer", "devops-intern", "prompt-engineer"],
    eligibility: "Citizens / permanent residents of eligible Commonwealth countries including India; one-year full-time taught master's starting Sep/Oct 2027.",
    cost: "Free to apply. Fully funded: full tuition + £1,712/month stipend (£2,000 in London) + return flights.",
    link: "https://www.gla.ac.uk/scholarships/commonwealthsharedscholarshipscheme/",
    linkNote: "Apply via CSC Central and the participating university."
  },
  {
    title: "TCS CodeVita Season 14", provider: "TCS — coding contest",
    type: "Coding Contest", deadline: "2026-11-20", deadlineText: "20 November 2026 (registration extended)",
    roles: ["sde-intern", "data-analyst", "cybersecurity-intern", "ai-ml-intern"],
    eligibility: "Students of 2027–2030 batches; 3-hour contest in C/C++/Java/Python.",
    cost: "Free entry. Top 3 share USD 20,000.",
    link: "https://codevita.tcsapps.com/",
    linkNote: "Official TCS CodeVita portal — verified live 19 Nov 2026."
  },
  {
    title: "Google Skills — Introduction to Generative AI", provider: "Google Skills / Google Cloud",
    type: "Free Course", deadline: null, deadlineText: "Always open",
    roles: ["ai-ml-intern", "prompt-engineer", "data-analyst", "sde-intern", "cybersecurity-intern", "web-developer", "ui-ux-designer", "devops-intern"],
    eligibility: "Open to everyone, including students in India; free Google account sign-up. No coding needed.",
    cost: "Free. Free digital skill badge on completion. ~45 min.",
    link: "https://skills.google",
    linkNote: "Google Skills."
  },
  {
    title: "IBM SkillsBuild — AI Fundamentals", provider: "IBM SkillsBuild",
    type: "Free Course", deadline: null, deadlineText: "Always open",
    roles: ["ai-ml-intern", "prompt-engineer", "data-analyst", "sde-intern", "cybersecurity-intern", "web-developer", "ui-ux-designer", "devops-intern"],
    eligibility: "Open to all learners; available in 12 languages including Hindi.",
    cost: "Free — “100% free and online”. 10+ hours, free IBM Credly badge.",
    link: "https://skillsbuild.org/",
    linkNote: "Official IBM SkillsBuild site."
  },
  {
    title: "AWS Skill Builder + AWS Educate", provider: "Amazon Web Services",
    type: "Free Course", deadline: null, deadlineText: "Always open",
    roles: ["devops-intern", "sde-intern", "ai-ml-intern", "data-analyst", "web-developer", "cybersecurity-intern"],
    eligibility: "Skill Builder open to all; AWS Educate open to anyone 13+ with just an email.",
    cost: "Free training and badges (900+ free courses). Certification exams are paid — eligible students 18+ can earn a $100 exam voucher.",
    link: "https://builder.aws.com/content/3KKwg92ZL1WlwosByJKUrB01crE/free-aws-training-for-beginners-6-resources-to-learn-cloud-and-ai-from-official-aws-programs",
    linkNote: "Official AWS guide."
  },
  {
    title: "Microsoft Learn — AI learning paths", provider: "Microsoft (Microsoft Learn)",
    type: "Free Course", deadline: null, deadlineText: "Always open",
    roles: ["ai-ml-intern", "prompt-engineer", "sde-intern", "data-analyst", "devops-intern", "web-developer"],
    eligibility: "Open to everyone; no sign-in needed to read content.",
    cost: "Free to learn — free Learn badges. The Azure AI Fundamentals exam (AI-901) is paid.",
    link: "https://learn.microsoft.com/",
    linkNote: "Microsoft Learn."
  },
  {
    title: "Salesforce Trailhead — free CRM & AI-agent learning", provider: "Salesforce (Trailhead)",
    type: "Free Course", deadline: null, deadlineText: "Always open",
    roles: ["ui-ux-designer", "web-developer", "data-analyst", "prompt-engineer", "sde-intern"],
    eligibility: "Open to anyone with an email address.",
    cost: "Free learning and badges. Certification exams are paid (~$200 Administrator exam).",
    link: "https://trailhead.salesforce.com/",
    linkNote: "Official Trailhead site."
  }
];

export function daysLeft(deadline) {
  if (!deadline) return null;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const due = new Date(deadline + "T23:59:59");
  return Math.ceil((due - today) / (1000 * 60 * 60 * 24));
}

export function daysLeftLabel(item) {
  const d = daysLeft(item.deadline);
  if (d === null) return { text: item.deadlineText || "No deadline published", cls: "none" };
  if (d < 0) return { text: "Deadline passed — check the official link", cls: "soon" };
  if (d === 0) return { text: "Closing today!", cls: "soon" };
  if (d === 1) return { text: "1 day left", cls: "soon" };
  return { text: d + " days left", cls: d <= 7 ? "soon" : "" };
}

export function matchedOpportunities(roleId) {
  const matched = OPPORTUNITIES.filter((o) => o.roles.includes(roleId));
  const rest = OPPORTUNITIES.filter((o) => !o.roles.includes(roleId));
  const byDeadline = (a, b) => {
    const da = daysLeft(a.deadline), db = daysLeft(b.deadline);
    if (da === null && db === null) return a.title.localeCompare(b.title);
    if (da === null) return 1; if (db === null) return -1;
    return da - db;
  };
  return [...matched.sort(byDeadline), ...rest.sort(byDeadline)];
}
