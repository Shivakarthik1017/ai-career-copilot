// js/data/roles.js — Role definitions (config-driven).
// To add a role: add one object here. No UI code changes needed.
// requiredSkills: skills a recruiter expects for this role.
// months: a 6-month plan. Each month: title, skills to learn, courseId
// (must match js/data/courses.js), project to build, and an apply note.

export const ROLES = [
  {
    id: "cybersecurity-intern",
    title: "Cybersecurity Intern",
    tagline: "Protect systems, find weaknesses, build security tools.",
    icon: "🛡️",
    requiredSkills: ["Computer Networking", "Linux", "Python", "Cybersecurity Basics", "Cryptography", "Web Security", "Git & GitHub", "Problem Solving"],
    months: [
      { title: "Foundations", skills: ["Computer Networking", "Linux"], courseId: "cisco-networking", project: "Set up a Linux VM and document 10 essential commands with examples.", applyNote: "Start a learning log — recruiters love seeing it." },
      { title: "Python for Security", skills: ["Python", "Git & GitHub"], courseId: "ibm-cyber", project: "Write a Python script that checks password strength and estimates crack time.", applyNote: "Push every project to GitHub with a README." },
      { title: "Core Security Concepts", skills: ["Cybersecurity Basics", "Cryptography"], courseId: "infosys-infosec", project: "Build a Caesar + AES demo tool that encrypts and decrypts text.", applyNote: "Add the project to your LinkedIn Projects section." },
      { title: "Web Security", skills: ["Web Security", "Problem Solving"], courseId: "google-ai-essentials", project: "Build a phishing-URL detector that flags suspicious links and explains why.", applyNote: "Write one LinkedIn post explaining what you built." },
      { title: "Hands-on Labs", skills: ["Linux", "Python", "Cybersecurity Basics"], courseId: "cisco-intro-cyber", project: "Analyse a sample system log and write a short incident report.", applyNote: "Practise on legal labs only — never test on real systems without permission." },
      { title: "Apply Season", skills: ["Problem Solving", "Git & GitHub"], courseId: "nptel-cyber", project: "Ship a security dashboard combining your tools into one app.", applyNote: "Apply for cybersecurity internships — your portfolio is ready." }
    ]
  },
  {
    id: "sde-intern",
    title: "SDE Intern",
    tagline: "Write production-quality code and ship real software.",
    icon: "💻",
    requiredSkills: ["Data Structures & Algorithms", "Python", "Java", "Git & GitHub", "Problem Solving", "OOP", "Databases", "System Design Basics"],
    months: [
      { title: "Programming Foundations", skills: ["Python", "OOP"], courseId: "aws-skill-builder", project: "Build a CLI task manager in Python with file storage.", applyNote: "Solve 3 easy problems a week on any coding platform." },
      { title: "Data Structures", skills: ["Data Structures & Algorithms", "Problem Solving"], courseId: "nptel-dsa", project: "Implement arrays, linked lists, stacks and queues from scratch.", applyNote: "Keep a DSA notebook — patterns matter more than count." },
      { title: "Java & OOP", skills: ["Java", "OOP"], courseId: "microsoft-learn", project: "Build a small library management system in Java.", applyNote: "Learn to read other people's code, not just write your own." },
      { title: "Databases & APIs", skills: ["Databases", "Git & GitHub"], courseId: "aws-skill-builder", project: "Build a REST-style notes app with a database and a clean README.", applyNote: "Deploy it — a live link beats a screenshot." },
      { title: "Algorithms Sprint", skills: ["Data Structures & Algorithms", "Problem Solving"], courseId: "nptel-dsa", project: "Solve 30 medium problems and write up the pattern for each.", applyNote: "Time yourself — interviews are timed." },
      { title: "Apply Season", skills: ["System Design Basics", "Git & GitHub"], courseId: "google-genai", project: "Ship a full-stack project end to end and document it.", applyNote: "Apply for SDE internships — Amazon, Google and startups." }
    ]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    tagline: "Turn raw data into decisions people can act on.",
    icon: "📊",
    requiredSkills: ["Python", "SQL", "Data Analysis", "Excel / Sheets", "Data Visualisation", "Statistics", "Problem Solving", "Git & GitHub"],
    months: [
      { title: "Data Foundations", skills: ["Excel / Sheets", "Statistics"], courseId: "google-ai-essentials", project: "Clean a messy public dataset and document every fix.", applyNote: "Messy data is the real job — get comfortable with it." },
      { title: "SQL", skills: ["SQL", "Databases"], courseId: "aws-skill-builder", project: "Answer 10 business questions from a sample database using SQL.", applyNote: "SQL is the single most-tested analyst skill." },
      { title: "Python for Data", skills: ["Python", "Data Analysis"], courseId: "ibm-skillsbuild-ai", project: "Analyse a dataset with Python and produce 5 charts with insights.", applyNote: "Write insights in plain English, not just code." },
      { title: "Visualisation", skills: ["Data Visualisation", "Statistics"], courseId: "microsoft-learn", project: "Build a dashboard that tells one clear story from data.", applyNote: "A good chart answers a question in 5 seconds." },
      { title: "Real Project", skills: ["Python", "SQL", "Data Visualisation"], courseId: "salesforce-trailhead", project: "End-to-end analysis: question → data → charts → recommendations.", applyNote: "Publish the write-up on LinkedIn." },
      { title: "Apply Season", skills: ["Problem Solving", "Git & GitHub"], courseId: "google-genai", project: "Portfolio of 3 analyses, each with a live link and write-up.", applyNote: "Apply for data analyst internships." }
    ]
  },
  {
    id: "web-developer",
    title: "Web Developer",
    tagline: "Build fast, beautiful websites people actually use.",
    icon: "🌐",
    requiredSkills: ["HTML", "CSS", "JavaScript", "Git & GitHub", "Responsive Design", "APIs", "Problem Solving", "Node.js"],
    months: [
      { title: "HTML & CSS", skills: ["HTML", "CSS", "Responsive Design"], courseId: "ibm-skillsbuild-ai", project: "Build a responsive personal portfolio page.", applyNote: "Mobile-first — most visitors are on phones." },
      { title: "JavaScript", skills: ["JavaScript", "Problem Solving"], courseId: "google-genai", project: "Build an interactive quiz app with score tracking.", applyNote: "Learn the DOM properly before any framework." },
      { title: "APIs & Data", skills: ["APIs", "JavaScript"], courseId: "aws-skill-builder", project: "Build a weather app that fetches live data from a public API.", applyNote: "Handle loading and error states — recruiters notice." },
      { title: "Backend Basics", skills: ["Node.js", "Databases"], courseId: "microsoft-learn", project: "Build a small backend with routes and a database.", applyNote: "Keep secrets out of your code — use environment variables." },
      { title: "Full-Stack Project", skills: ["HTML", "CSS", "JavaScript", "Node.js"], courseId: "salesforce-trailhead", project: "Ship a full-stack app: frontend + backend + deployed link.", applyNote: "Deploy it on GitHub Pages or a free host." },
      { title: "Apply Season", skills: ["Git & GitHub", "Responsive Design"], courseId: "google-ai-essentials", project: "Polish your portfolio and add 3 best projects with screenshots.", applyNote: "Apply for web developer internships and freelance gigs." }
    ]
  },
  {
    id: "ai-ml-intern",
    title: "AI/ML Intern",
    tagline: "Build with machine learning and large language models.",
    icon: "🤖",
    requiredSkills: ["Python", "Machine Learning Basics", "Prompt Engineering", "Data Analysis", "Statistics", "Git & GitHub", "APIs", "Problem Solving"],
    months: [
      { title: "AI Foundations", skills: ["Machine Learning Basics", "Statistics"], courseId: "google-genai", project: "Train a simple classifier on a public dataset and explain the result.", applyNote: "Understand the idea before the maths." },
      { title: "Prompt Engineering", skills: ["Prompt Engineering", "APIs"], courseId: "google-prompting", project: "Build a prompt library: 10 prompts that reliably do useful work.", applyNote: "Prompting is a real, hireable skill now." },
      { title: "Python for ML", skills: ["Python", "Data Analysis"], courseId: "ibm-skillsbuild-ai", project: "Build a text summariser using a free LLM API.", applyNote: "Never put an API key in your code or repo." },
      { title: "Build an AI Agent", skills: ["APIs", "Machine Learning Basics"], courseId: "ibm-ai-agent", project: "Build an AI agent that answers questions from your own notes.", applyNote: "RAG beats memorisation — learn how it works." },
      { title: "LLM Project", skills: ["Prompt Engineering", "Python"], courseId: "microsoft-learn", project: "Ship an AI tool with a real use case and a live demo.", applyNote: "Show the workflow, not just the output." },
      { title: "Apply Season", skills: ["Git & GitHub", "Problem Solving"], courseId: "aws-skill-builder", project: "Portfolio: 3 AI projects with demos, READMEs and honest limits.", applyNote: "Apply for AI/ML internships." }
    ]
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    tagline: "Design products people love to use.",
    icon: "🎨",
    requiredSkills: ["Design Thinking", "Figma", "User Research", "Wireframing", "Prototyping", "HTML", "CSS", "Problem Solving"],
    months: [
      { title: "Design Foundations", skills: ["Design Thinking", "User Research"], courseId: "google-ai-essentials", project: "Redesign a bad signup flow and explain every change.", applyNote: "Good design is a reasoned decision, not a taste." },
      { title: "Figma", skills: ["Figma", "Wireframing"], courseId: "salesforce-trailhead", project: "Design a mobile app in Figma: 5 screens, consistent system.", applyNote: "Use components — it is how real teams work." },
      { title: "Prototyping", skills: ["Prototyping", "Figma"], courseId: "microsoft-learn", project: "Build a clickable prototype and test it with 3 real users.", applyNote: "Watch users, don't ask them what they want." },
      { title: "Web Basics", skills: ["HTML", "CSS"], courseId: "ibm-skillsbuild-ai", project: "Turn one of your designs into a real working page.", applyNote: "Designers who can build are rare and valued." },
      { title: "Case Study", skills: ["User Research", "Design Thinking"], courseId: "google-genai", project: "One full case study: problem → research → design → test → result.", applyNote: "A case study is your interview ticket." },
      { title: "Apply Season", skills: ["Problem Solving", "Prototyping"], courseId: "google-prompting", project: "Portfolio with 3 case studies and a Figma link for each.", applyNote: "Apply for UI/UX internships." }
    ]
  },
  {
    id: "devops-intern",
    title: "DevOps Intern",
    tagline: "Ship software reliably, automate everything.",
    icon: "⚙️",
    requiredSkills: ["Linux", "Git & GitHub", "Cloud Basics", "Docker Basics", "CI/CD Basics", "Python", "Networking", "Problem Solving"],
    months: [
      { title: "Linux & Shell", skills: ["Linux", "Networking"], courseId: "cisco-networking", project: "Write shell scripts that automate your daily setup.", applyNote: "The terminal is your home now." },
      { title: "Git & Versioning", skills: ["Git & GitHub", "Problem Solving"], courseId: "aws-skill-builder", project: "Set up a repo with branches, pull requests and a clean history.", applyNote: "Good Git habits are a hiring signal." },
      { title: "Cloud Basics", skills: ["Cloud Basics", "Python"], courseId: "aws-skill-builder", project: "Deploy a static site on a cloud free tier with a custom workflow.", applyNote: "Document every step — future you will thank you." },
      { title: "Containers", skills: ["Docker Basics", "Linux"], courseId: "microsoft-learn", project: "Containerise an app so it runs the same everywhere.", applyNote: "'Works on my machine' is not an answer." },
      { title: "CI/CD", skills: ["CI/CD Basics", "Git & GitHub"], courseId: "google-genai", project: "Build a pipeline: push → test → deploy, automatically.", applyNote: "Automation is the whole point of DevOps." },
      { title: "Apply Season", skills: ["Cloud Basics", "Docker Basics"], courseId: "ibm-skillsbuild-ai", project: "One deployed project with a full pipeline and monitoring notes.", applyNote: "Apply for DevOps / cloud internships." }
    ]
  },
  {
    id: "prompt-engineer",
    title: "Prompt Engineer",
    tagline: "Make AI do useful, reliable work for real people.",
    icon: "✨",
    requiredSkills: ["Prompt Engineering", "Python", "APIs", "Problem Solving", "Communication", "Data Analysis", "Git & GitHub", "Machine Learning Basics"],
    months: [
      { title: "Prompt Foundations", skills: ["Prompt Engineering", "Communication"], courseId: "google-prompting", project: "Write 20 prompts for real tasks and grade their outputs.", applyNote: "Judge outputs against a checklist, not a feeling." },
      { title: "Structured Outputs", skills: ["Prompt Engineering", "Python"], courseId: "google-genai", project: "Build a tool that turns messy notes into structured summaries.", applyNote: "Reliability matters more than cleverness." },
      { title: "APIs & Agents", skills: ["APIs", "Machine Learning Basics"], courseId: "ibm-ai-agent", project: "Build an agent that uses tools to answer questions.", applyNote: "Learn how agents decide what to do next." },
      { title: "Evaluation", skills: ["Data Analysis", "Problem Solving"], courseId: "microsoft-learn", project: "Create an eval set and measure how often your prompts succeed.", applyNote: "If you can't measure it, you can't improve it." },
      { title: "Real Workflow", skills: ["Prompt Engineering", "APIs"], courseId: "aws-skill-builder", project: "Ship an AI workflow that saves a real person real time.", applyNote: "Ship for one user first, not everyone." },
      { title: "Apply Season", skills: ["Git & GitHub", "Communication"], courseId: "google-ai-essentials", project: "Portfolio: prompts, evals and 2 shipped AI workflows.", applyNote: "Apply for prompt engineer and AI roles." }
    ]
  }
];

export function getRole(id) {
  return ROLES.find((r) => r.id === id) || null;
}

export const ALL_SKILLS = [...new Set(ROLES.flatMap((r) => r.requiredSkills))].sort();
