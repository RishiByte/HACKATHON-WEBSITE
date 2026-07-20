export interface RuleSection {
  id: string;
  title: string;
  items: string[];
  table?: {
    headers: string[];
    rows: string[][];
    note?: string;
  };
}

export const rulebookData: RuleSection[] = [
  {
    id: "01",
    title: "ELIGIBILITY & REGISTRATION",
    items: [
      "Register via official portal.",
      "GitHub repo must be created ONLY on/after 15 Aug 2026 (Problem Statement release date) AND only after registration completes. Repos created earlier are rejected.",
      "Teams: 1 or 2 members only (Solo or Duo).",
      "All members must contribute approximately equal work.",
      "Every member listed as GitHub contributor.",
      "All members clearly named in README.md with GitHub usernames + roles.",
      "Only registered participants may contribute — non-registered contributor = immediate disqualification. AI agents/automated tools are exempt from this rule.",
      "Must be currently enrolled students (UG/PG/equivalent); proof of enrollment may be requested anytime.",
      "Each participant in ONLY one team — cross-team participation disqualifies both teams."
    ]
  },
  {
    id: "02",
    title: "HACKATHON ROUNDS",
    items: [
      "ROUND 1 — IDEA SUBMISSION:",
      "Submit PDF (official template) explaining idea. No prototype/live demo required.",
      "PDF must cover: problem statement chosen, proposed solution, tech stack, expected impact, team details.",
      "Max 10 pages.",
      "Reviewed by judging panel; only shortlisted teams advance. Results via email + Discord.",
      "GitHub repo created (on/after 15 Aug 2026) and made PUBLIC before Round 1 submission — no working code required yet.",
      "PDF must include a 'Reviewer Notes' section.",
      "ROUND 2 — PROJECT SHOWCASE:",
      "Submit PPT (official template) covering: demo screenshots/links, architecture, technical implementation, challenges faced, results, future scope.",
      "Live deployed service required (web app, mobile app, AI model endpoint, browser extension, or any publicly accessible product).",
      "Project showcase video (2–5 min) required alongside PPT.",
      "Deployed link must be added to GitHub repo's 'About' section.",
      "README.md, LICENSE, SECURITY.md must be complete before Round 2 submission.",
      "NO repo changes after Round 2 deadline — any post-deadline commit = disqualification."
    ]
  },
  {
    id: "03",
    title: "PROJECT REQUIREMENTS",
    items: [
      "3.1 Core Technical Rules:",
      "1. Public open-source repo under Omnikon Org (or properly linked).",
      "2. Live deployed service mandatory by Round 2.",
      "3. Must be built under one of the official announced Problem Statements.",
      "4. Must NOT be a copy/fork/derivative of an existing project.",
      "5. Proper data security practices; any project handling user data needs SECURITY.md.",
      "6. Must be original work started AFTER registration — pre-existing projects ineligible.",
      "7. All third-party APIs/libraries/datasets/tools attributed in README.md and PDF/PPT.",
      "3.2 Documentation Requirements:",
      "Comprehensive README.md (setup instructions, tech stack, demo link, team member contributions).",
      "Valid open-source LICENSE (MIT, Apache 2.0, or GPL recommended).",
      "SECURITY.md (data handling/protection).",
      "CONTRIBUTING.md (recommended).",
      "CODE_OF_CONDUCT.md (recommended)."
    ]
  },
  {
    id: "04",
    title: "SUBMISSION REQUIREMENTS",
    items: [
      "Round 1: PDF (max 10 pages, official template) — idea, architecture, tech stack, expected challenges, results.",
      "Round 2: PPT (official template) demonstrating built + deployed project.",
      "Deployed link in GitHub 'About' section before Round 2.",
      "Showcase video (2–5 min) in Round 2.",
      "'Reviewer Notes' section required in both PDF and PPT.",
      "Submit via official form/portal before deadline — NO late submissions accepted.",
      "Generative AI use allowed but must be disclosed in README.md and submission docs."
    ]
  },
  {
    id: "05",
    title: "EVALUATION CRITERIA",
    items: [],
    table: {
      headers: ["Criteria", "Weight", "Description"],
      rows: [
        ["Innovation & Originality", "25%", "Creativity and novelty of the solution"],
        ["Technical Implementation", "25%", "Code quality, architecture, and functionality"],
        ["Impact & Usefulness", "20%", "Real-world applicability and problem-solving"],
        ["Documentation & Presentation", "15%", "README, PDF/PPT quality, and video clarity"],
        ["Security & Compliance", "15%", "Data handling and responsible development"]
      ],
      note: "Note: Round 1 is evaluated SOLELY on the PDF — idea quality, problem-solution fit, feasibility. Technical implementation is NOT assessed in Round 1."
    }
  },
  {
    id: "06",
    title: "PRIZES & RECOGNITION",
    items: [
      "1st Place: ₹5,000",
      "2nd Place: ₹3,000",
      "3rd Place: ₹2,000",
      "Top 10 Teams: official Participation Certificate + exclusive curated gifts from Omnikon team.",
      "Winners/top performers featured on Omnikon's social media, website, GitHub org page.",
      "Top 3 teams get a winner's badge on their Omnikon contributor profile.",
      "Prize Disbursement: cash prizes disbursed within 15 working days after final results; winners submit bank/UPI details via official prize collection form; prizes awarded per TEAM, not per member."
    ]
  },
  {
    id: "07",
    title: "CODE OF CONDUCT",
    items: [
      "Follow Omnikon Org Code of Conduct.",
      "Harassment, plagiarism, or toxic behavior → immediate disqualification.",
      "Generative AI use allowed but must be disclosed.",
      "Third-party APIs/libraries must be credited.",
      "Respectful communication required on Discord, GitHub discussions, email.",
      "Manipulating judging/misrepresenting work → permanent disqualification + ban from future Omnikon events.",
      "Participants must be available for clarification calls/demos if requested by judging panel."
    ]
  },
  {
    id: "08",
    title: "GROUNDS FOR DISQUALIFICATION",
    items: [
      "Creating GitHub repo before 15 Aug 2026 or before registration completes.",
      "Submitting copied/plagiarized/previously submitted projects.",
      "Missing mandatory deliverables (Round 1 PDF, Round 2 PPT, video, deployed link, documentation).",
      "Contribution from non-registered individuals.",
      "Code of Conduct violations/unethical behavior.",
      "Repo changes after either round's submission deadline.",
      "Project not aligned with any announced official Problem Statement.",
      "Participant registered in more than one team simultaneously.",
      "False information during registration or in submission documents.",
      "Failure to disclose generative AI tools or third-party resources."
    ]
  },
  {
    id: "09",
    title: "INTELLECTUAL PROPERTY",
    items: [
      "Submitted projects remain the IP of the respective teams; Omnikon Org claims no ownership.",
      "By submitting, teams grant Omnikon Org rights to feature project (name, description, screenshots) for promotional purposes.",
      "Projects must be released under an open-source license (file included in repo).",
      "Third-party code/assets: licensing compliance is the team's sole responsibility."
    ]
  },
  {
    id: "10",
    title: "IMPORTANT NOTES",
    items: [
      "'Reviewer Notes' section required, clearly labeled, in both Round 1 PDF and Round 2 PPT.",
      "Repository Creation Policy: repo must be created ONLY on/after 15 Aug 2026 and only after registration completes; commits dated earlier will be flagged and may cause disqualification.",
      "Omnikon Org reserves the right to update rules anytime; changes communicated via Discord & email — participants responsible for staying updated.",
      "Contact: contact@omnikonhub.com"
    ]
  }
];

// Mapping for the 13 Radial Nodes on the Rulebook Core
// These map to specific rule text to display in the modal popup
export const nodeMappings = {
  '01': { // Eligibility -> Section 1
    title: "ELIGIBILITY & REGISTRATION",
    content: rulebookData[0].items
  },
  '02': { // Team Rules -> Section 1 (team composition)
    title: "TEAM RULES",
    content: [
      "Teams: 1 or 2 members only (Solo or Duo).",
      "All members must contribute approximately equal work.",
      "Every member listed as GitHub contributor.",
      "All members clearly named in README.md with GitHub usernames + roles."
    ]
  },
  '03': { // Originality -> Section 3.1 rules #3, #4, #6
    title: "ORIGINALITY",
    content: [
      "Must be built under one of the official announced Problem Statements.",
      "Must NOT be a copy/fork/derivative of an existing project.",
      "Must be original work started AFTER registration — pre-existing projects ineligible."
    ]
  },
  '04': { // Fresh Repo -> Section 1 + Section 10
    title: "REPOSITORY POLICY",
    content: [
      "GitHub repo must be created ONLY on/after 15 Aug 2026 (Problem Statement release date) AND only after registration completes.",
      "Repos created earlier are rejected. Commits dated earlier will be flagged and may cause disqualification."
    ]
  },
  '05': { // Submission -> Section 4
    title: "SUBMISSION REQUIREMENTS",
    content: rulebookData[3].items
  },
  '06': { // Authenticity -> Section 1 (enrollment proof, one-team-only)
    title: "AUTHENTICITY",
    content: [
      "Must be currently enrolled students (UG/PG/equivalent); proof of enrollment may be requested anytime.",
      "Each participant in ONLY one team — cross-team participation disqualifies both teams."
    ]
  },
  '07': { // AI Usage -> Sections 4, 7, 8
    title: "AI USAGE",
    content: [
      "Generative AI use allowed but must be disclosed in README.md and submission docs.",
      "Failure to disclose generative AI tools or third-party resources is grounds for disqualification."
    ]
  },
  '08': { // Plagiarism -> Section 8 + Section 7
    title: "PLAGIARISM",
    content: [
      "Submitting copied/plagiarized/previously submitted projects is grounds for disqualification.",
      "Harassment, plagiarism, or toxic behavior → immediate disqualification."
    ]
  },
  '09': { // Judging -> Section 5
    title: "EVALUATION CRITERIA",
    content: [
      "25% - Innovation & Originality",
      "25% - Technical Implementation",
      "20% - Impact & Usefulness",
      "15% - Documentation & Presentation",
      "15% - Security & Compliance",
      "Note: Round 1 is evaluated SOLELY on the PDF — idea quality, problem-solution fit, feasibility. Technical implementation is NOT assessed in Round 1."
    ]
  },
  '10': { // Deadlines -> Section 2 + Section 4
    title: "DEADLINES",
    content: [
      "Submit via official form/portal before deadline — NO late submissions accepted.",
      "NO repo changes after Round 2 deadline — any post-deadline commit = disqualification."
    ]
  },
  '11': { // Presentation -> Section 2 Round 2 PPT
    title: "PRESENTATION",
    content: [
      "ROUND 2 — PROJECT SHOWCASE: Submit PPT (official template) covering: demo screenshots/links, architecture, technical implementation, challenges faced, results, future scope.",
      "Project showcase video (2–5 min) required alongside PPT.",
      "'Reviewer Notes' section required in both PDF and PPT."
    ]
  },
  '12': { // Decision -> Section 7
    title: "DECISION",
    content: [
      "Participants must be available for clarification calls/demos if requested by judging panel.",
      "Manipulating judging/misrepresenting work → permanent disqualification + ban from future Omnikon events."
    ]
  },
  '13': { // Conduct -> Section 7 + Section 8
    title: "CODE OF CONDUCT",
    content: [
      "Follow Omnikon Org Code of Conduct.",
      "Harassment, plagiarism, or toxic behavior → immediate disqualification.",
      "Respectful communication required on Discord, GitHub discussions, email.",
      "Violations/unethical behavior are grounds for disqualification."
    ]
  }
};
