// js/data/courses.js — Verified FREE courses only.
// Every entry was checked on 17–18 Nov 2026. "Free to learn" means the
// learning itself is free; where a formal exam is paid, it is flagged.
// To add a course: add one object here and reference its id from roles.js.

export const COURSES = [
  { id: "google-genai", title: "Introduction to Generative AI", provider: "Google Skills", url: "https://skills.google", hours: "~45 min", badge: "Free Google Skill Badge", note: "Free. Google Career Certificates on Coursera are paid — not this course." },
  { id: "google-prompting", title: "Google Prompting Essentials", provider: "Google / Coursera", url: "https://www.coursera.org", hours: "~4 hrs", badge: "Free badge path", note: "Free to learn. Audit the course; the certificate path may be paid." },
  { id: "google-ai-essentials", title: "Google AI Essentials", provider: "Google / Coursera", url: "https://www.coursera.org", hours: "~7 hrs", badge: "Certificate (paid path)", note: "Learning is free to audit; formal certificate is paid." },
  { id: "ibm-skillsbuild-ai", title: "AI Fundamentals", provider: "IBM SkillsBuild", url: "https://skillsbuild.org/", hours: "10+ hrs", badge: "Free IBM Credly badge", note: "100% free and online, available in Hindi." },
  { id: "ibm-cyber", title: "Getting Started with Cybersecurity", provider: "IBM SkillsBuild", url: "https://skillsbuild.org/", hours: "Self-paced", badge: "Free IBM badge", note: "Free." },
  { id: "ibm-ai-agent", title: "Build an AI Agent", provider: "IBM SkillsBuild", url: "https://skillsbuild.org/", hours: "Self-paced", badge: "Free IBM badge", note: "Free." },
  { id: "aws-skill-builder", title: "AWS Skill Builder + AWS Educate", provider: "Amazon Web Services", url: "https://builder.aws.com/content/3KKwg92ZL1WlwosByJKUrB01crE/free-aws-training-for-beginners-6-resources-to-learn-cloud-and-ai-from-official-aws-programs", hours: "900+ free courses", badge: "Free Knowledge Badges", note: "Free training. Certification exams are paid; eligible students 18+ can earn a $100 exam voucher." },
  { id: "microsoft-learn", title: "Microsoft Learn AI paths", provider: "Microsoft Learn", url: "https://learn.microsoft.com/", hours: "Self-paced", badge: "Free Learn badges", note: "Free to learn. The Azure AI Fundamentals exam (AI-901) is paid." },
  { id: "salesforce-trailhead", title: "Salesforce Trailhead", provider: "Salesforce", url: "https://trailhead.salesforce.com/", hours: "Self-paced", badge: "Free Trailhead badges", note: "Free learning. Certification exams are paid (e.g. ~$200 Administrator exam)." },
  { id: "cisco-networking", title: "Networking Basics", provider: "Cisco Networking Academy", url: "https://www.netacad.com/", hours: "Self-paced", badge: "Free Cisco badge", note: "Free." },
  { id: "cisco-intro-cyber", title: "Introduction to Cybersecurity", provider: "Cisco Networking Academy", url: "https://www.netacad.com/", hours: "Self-paced", badge: "Free Cisco badge", note: "Free." },
  { id: "infosys-infosec", title: "Fundamentals of Information Security", provider: "Infosys Springboard", url: "https://infyspringboard.onwingspan.com/", hours: "Self-paced", badge: "Free certificate", note: "Free." },
  { id: "nptel-dsa", title: "Programming, Data Structures & Algorithms (NPTEL)", provider: "NPTEL / IIT", url: "https://nptel.ac.in/", hours: "8–12 weeks", badge: "Free to learn; exam paid", note: "Video lectures are free. The proctored certificate exam has a fee." },
  { id: "nptel-cyber", title: "NPTEL Cybersecurity courses", provider: "NPTEL / IIT", url: "https://nptel.ac.in/", hours: "8–12 weeks", badge: "Free to learn; exam paid", note: "Video lectures are free. The proctored certificate exam has a fee." }
];

export function getCourse(id) {
  return COURSES.find((c) => c.id === id) || null;
}
