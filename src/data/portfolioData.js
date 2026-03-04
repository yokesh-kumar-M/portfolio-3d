const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";
const icon = (name, variant = "original") =>
  `${DEVICON}/${name}/${name}-${variant}.svg`;

/* --- Professional Icon Mapping — Local Verified Assets --- */
const TECH_ICONS = {
  // Security Arsenal
  "Nmap": "/icons/nmap.png",
  "Burp Suite": "/icons/burpsuite.png",
  "Metasploit": "/icons/metasploit.png",
  "Wireshark": "/icons/wireshark.png",
  "Nessus": "/icons/nessus.png",
  "Splunk": "/icons/splunk.png",
  "Wazuh": "/icons/wazuh.png",

  // Frameworks & Dev
  "React": icon("react"),
  "Django": icon("django"),
  "Tailwind CSS": icon("tailwindcss"),
  "Tailwind": icon("tailwindcss"),
  "Python": icon("python"),
  "JavaScript": icon("javascript"),
  "C/C++": icon("cplusplus"),
  "Java": icon("java"),
  "Bash": icon("bash"),
  "AWS": "https://cdn.simpleicons.org/amazonaws",
  "Docker": icon("docker"),
  "Linux": icon("linux"),
  "ELK Stack": "https://cdn.simpleicons.org/elastic",
  "Multithreading": "https://cdn.simpleicons.org/blueprint/D4D4D4",

  // Standards
  "OWASP Top 10": "/icons/owasp.png",
  "OWASP": "/icons/owasp.png",
  "NIST CSF": "/icons/nist.png",
  "NIST": "/icons/nist.png",
  "ISO 27001": SI + "/blueprint/D4D4D4",
  "MITRE ATT&CK": "/icons/mitre.png",
  "Risk Assessment": SI + "/blueprint/D4D4D4",
  "GDPR": SI + "/blueprint/D4D4D4",
  "HIPAA": "https://cdn.simpleicons.org/blueprint/D4D4D4",
};

export const getIconByTech = (tech) => TECH_ICONS[tech] || null;

export const personalInfo = {
  name: "Yokesh Kumar M",
  title: "Cybersecurity Engineer",
  email: "yokeshkumar1704@gmail.com",
  phone: "+91-8590694627",
  location: "Punjab, India",
  linkedin: "https://linkedin.com/in/yokeshkumarm",
  github: "https://github.com/yokesh-kumar-M",
  resumeUrl: "/cv.pdf",
  bio: "Specializing in penetration testing, vulnerability analysis, and architecting robust security systems. Focused on proactively identifying and mitigating security risks.",
  roles: [
    "Cybersecurity Engineer",
    "Penetration Tester",
    "Security Researcher",
    "Threat Analyst",
  ],
};

export const marqueeWords = [
  "Penetration Testing",
  "Vulnerability Assessment",
  "Network Security",
  "Digital Forensics",
  "Incident Response",
  "Malware Analysis",
  "Cloud Security",
  "Zero Trust Architecture",
  "Compliance & Governance",
  "Risk Management"
];

export const about = {
  summary:
    "B.Tech Computer Science student with a deep passion for cybersecurity. I combine offensive security methodologies with software development expertise to identify vulnerabilities and fortify infrastructure — ensuring the digital landscape remains secure.",
  highlights: [
    { label: "CTF Rank", value: "13", suffix: "th", description: "Among 300+ teams globally" },
    { label: "CGPA", value: "8.06", suffix: "", description: "Lovely Professional University" },
    { label: "Certifications", value: "4", suffix: "+", description: "EC-Council, ISC2, NPTEL" },
    { label: "Projects", value: "2", suffix: "+", description: "Security tools built" },
  ],
  education: [
    {
      degree: "B.Tech — Computer Science & Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      period: "Aug 2022 — Present",
      score: "CGPA: 8.06",
    },
    {
      degree: "Senior Secondary (XII)",
      institution: "Velammal Bodhi Campus",
      location: "Theni, Tamil Nadu",
      period: "2021 — 2022",
      score: "84%",
    },
  ],
};

export const services = [
  {
    title: "Penetration Testing",
    description:
      "Simulating real-world attacks to identify vulnerabilities before malicious actors exploit them. Covering web applications, networks, and cloud infrastructure.",
    icon: "🎯",
    tools: ["Nmap", "Burp Suite", "Metasploit"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
  },
  {
    title: "Security Research",
    description:
      "Analysing threat landscapes, studying CVEs, and contributing to the security community through research and Capture the Flag competitions.",
    icon: "🔬",
    tools: ["MITRE ATT&CK", "OWASP", "Wireshark"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&q=80",
  },
  {
    title: "SIEM & Monitoring",
    description:
      "Building security monitoring pipelines, writing detection rules, and correlating logs to catch threats in real time.",
    icon: "📡",
    tools: ["Splunk", "Wazuh", "ELK Stack"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    title: "Compliance & GRC",
    description:
      "Gap analysis, risk assessment, and documentation aligned with ISO 27001, NIST CSF, GDPR, and HIPAA frameworks.",
    icon: "📋",
    tools: ["ISO 27001", "NIST", "GDPR"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  },
];

export const skills = [
  {
    category: "Security Toolkit",
    items: [
      { name: "Nmap", icon: TECH_ICONS["Nmap"], level: 90 },
      { name: "Burp Suite", icon: TECH_ICONS["Burp Suite"], level: 85 },
      { name: "Metasploit", icon: TECH_ICONS["Metasploit"], level: 70 },
      { name: "Wireshark", icon: TECH_ICONS["Wireshark"], level: 80 },
      { name: "Nessus", icon: TECH_ICONS["Nessus"], level: 75 },
      { name: "Splunk", icon: TECH_ICONS["Splunk"], level: 70 },
      { name: "Wazuh", icon: TECH_ICONS["Wazuh"], level: 65 },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "Python", icon: TECH_ICONS["Python"], level: 90 },
      { name: "JavaScript", icon: TECH_ICONS["JavaScript"], level: 80 },
      { name: "C/C++", icon: TECH_ICONS["C/C++"], level: 75 },
      { name: "Java", icon: TECH_ICONS["Java"], level: 70 },
      { name: "Bash", icon: TECH_ICONS["Bash"], level: 85 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: TECH_ICONS["AWS"], level: 65 },
      { name: "Docker", icon: TECH_ICONS["Docker"], level: 75 },
      { name: "Linux", icon: TECH_ICONS["Linux"], level: 90 },
      { name: "ELK Stack", icon: TECH_ICONS["ELK Stack"], level: 65 },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React", icon: TECH_ICONS["React"], level: 80 },
      { name: "Django", icon: TECH_ICONS["Django"], level: 85 },
      { name: "Tailwind", icon: TECH_ICONS["Tailwind"], level: 85 },
    ],
  },
  {
    category: "Standards",
    items: [
      { name: "OWASP Top 10", icon: TECH_ICONS["OWASP Top 10"], level: 90 },
      { name: "NIST CSF", icon: TECH_ICONS["NIST CSF"], level: 80 },
      { name: "ISO 27001", icon: TECH_ICONS["ISO 27001"], level: 85 },
      { name: "MITRE ATT&CK", icon: TECH_ICONS["MITRE ATT&CK"], level: 75 },
    ],
  },
];

export const experience = [
  {
    title: "Practical Labs & Vulnerability Platforms",
    org: "HackTheBox · TryHackMe · Hackviser",
    period: "2024 — Present",
    type: "Hands-on",
    points: [
      "Performed penetration testing labs simulating real-world exploitation scenarios.",
      "Solved challenges involving web exploitation, privilege escalation, and enumeration.",
      "Explored AWS and Azure security labs focusing on IAM misconfigurations.",
      "Built SIEM analysis experience using Splunk and Wazuh for log correlation.",
    ],
    tech: ["Nmap", "Metasploit", "Burp Suite", "Splunk", "Wazuh"],
  },
  {
    title: "Entry-Level Cybersecurity Training",
    org: "ISC2 — Cybersecurity Training Programme",
    period: "Feb 2025 — May 2025",
    type: "Certification",
    points: [
      "Acquired knowledge of OWASP Top 10, MITRE ATT&CK, and NIST frameworks.",
      "Practised incident response, SIEM monitoring, and malware investigation.",
      "Covered IAM, encryption, firewalls, VPNs, and endpoint protection.",
    ],
    tech: ["OWASP", "MITRE ATT&CK", "NIST", "SIEM"],
  },
  {
    title: "ISO 27001 Compliance Research",
    org: "Freelance Contributor",
    period: "Apr 2024 — May 2024",
    type: "Freelance",
    points: [
      "Assisted in ISO 27001 gap analysis and risk assessment.",
      "Authored compliance documentation aligned with ISO 27001 controls.",
      "Mapped ISO 27001 controls to GDPR and HIPAA for audit support.",
    ],
    tech: ["ISO 27001", "GDPR", "HIPAA", "Risk Assessment"],
  },
];

export const projects = [
  {
    title: "PIIcasso",
    subtitle: "Dynamic Wordlist Generator",
    description:
      "Password analysis tool assessing authentication weaknesses using realistic user behaviour patterns. Features rule-driven transformations, secure back-end processing, and an intuitive interface for authorised security testing.",
    tech: ["React", "Tailwind CSS", "Django", "Python"],
    github: "https://github.com/yokesh-kumar-M/Piicasso",
    live: "https://pii-casso.vercel.app",
    date: "Jul 2025",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  },
  {
    title: "SprayMaster",
    subtitle: "Authentication Testing Tool",
    description:
      "Multithreaded authentication testing tool measuring system resistance under simulated attacks. Optimised parallel processing with adaptive password management and structured logging.",
    tech: ["Python", "Bash", "Multithreading"],
    github: "https://github.com/yokesh-kumar-M/SprayMaster",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
  },
];

export const certifications = [
  {
    name: "Certified Ethical Hacker (CEH) V13",
    org: "EC-Council",
    description:
      "The gold-standard credential for ethical hacking and penetration testing. CEH V13 covers AI-driven threat detection, advanced exploitation techniques, cloud security, IoT hacking, and real-world adversary simulation across 20 comprehensive modules with hands-on lab environments.",
    year: "Feb 2026",
    badge: "/icons/ceh_v13.png",
    featured: true,
    tier: "elite",
    topics: [
      "Advanced Penetration Testing",
      "AI-Powered Threat Detection",
      "Cloud Security & Exploitation",
      "Web Application Hacking",
      "Network Packet Analysis",
      "Social Engineering Tactics",
      "IoT & OT Security Testing",
      "Malware Analysis & Reverse Engineering",
      "Cryptanalysis Techniques",
      "Incident Response & Forensics",
    ],
  },
  {
    name: "Certified in Cybersecurity (CC)",
    org: "ISC2",
    description:
      "Globally recognised foundational cybersecurity credential covering security principles, business continuity, incident response, access controls, network security, and security operations. Validates job-ready skills for entry-level cybersecurity roles.",
    year: "Apr 2025",
    badge: "/icons/isc2_cc.png",
    featured: true,
    tier: "professional",
    topics: [
      "Security Principles & Governance",
      "Incident Response & Recovery",
      "Access Control Concepts",
      "Network Security Fundamentals",
      "Security Operations & Monitoring",
      "Business Continuity Planning",
      "Risk Management & Assessment",
      "Cryptography Essentials",
    ],
  },
  {
    name: "Cloud Computing",
    org: "IIT Kharagpur — NPTEL",
    description:
      "Comprehensive course on cloud architecture, virtualisation, service models (IaaS, PaaS, SaaS), and cloud security fundamentals delivered by IIT Kharagpur faculty through the NPTEL programme.",
    year: "Sep 2024",
    badge: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/220px-IIT_Kharagpur_Logo.svg.png",
    featured: false,
    topics: [
      "Cloud Architecture & Design",
      "Virtualisation Technologies",
      "IaaS, PaaS, SaaS Models",
      "Cloud Security & Compliance",
    ],
  },
  {
    name: "100 Days of Code — Python Pro Bootcamp",
    org: "Dr. Angela Yu — Udemy",
    description:
      "Intensive Python programming bootcamp covering scripting, automation, web development, data science, and security tool development across 100 structured projects.",
    year: "May 2024",
    badge: "https://cdn.simpleicons.org/udemy/A435F0",
    featured: false,
    topics: [
      "Python Scripting & Automation",
      "Web Development with Flask",
      "Data Science Fundamentals",
      "Security Tool Development",
    ],
  },
];

export const achievements = [
  {
    title: "Fetch the Flag CTF",
    stat: "13th",
    description: "Among approximately 300 teams globally",
    date: "Feb 2025",
  },
  {
    title: "Research Paper — Petri Nets",
    stat: "Published",
    description: "Advanced deadlock avoidance techniques",
    date: "Academic",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#services" },
  { label: "Credentials", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

