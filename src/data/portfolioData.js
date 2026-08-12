import womenSafetyImg from '../assets/images/women_safety_app.jpg';
import threatIntelImg from '../assets/images/threat_intel_system.jpg';
import avatarImg from '../assets/images/ridwan_avatar.jpg';

export const personalData = {
  fullName: "Mohammad Ridwanul Karim",
  preferredName: "Ridwan",
  role: "Computer Science & Engineering Student",
  positioning: [
    "Frontend Developer",
    "Full-Stack Development Enthusiast",
    "AI/ML Enthusiast",
    "Problem Solver"
  ],
  institution: "International Islamic University Chittagong",
  degree: "B.Sc. in Computer Science & Engineering",
  location: "Chittagong, Bangladesh",
  status: "Available for opportunities",
  bioHeadline: "A little about me.",
  bioParagraphs: [
    "I am a Computer Science & Engineering student driven by a deep fascination for building elegant web applications, scalable software architectures, and intelligent technologies.",
    "My focus bridges intuitive, user-centric frontend interfaces with robust backend APIs and data-driven systems. I enjoy breaking down complex real-world problems into clean, maintainable code."
  ],
  heroTagline: "I build digital experiences that are simple, useful & scalable.",
  heroSubtext: "Computer Science & Engineering student passionate about building modern web applications, solving real-world problems, and exploring intelligent technologies.",
  profileImage: avatarImg,
  metaTags: ["CSE", "Developer", "Builder"]
};

export const socialLinks = {
  github: "https://github.com/Ridwanulkarim",
  linkedin: "https://linkedin.com",
  email: "ridwan.karim.dev@gmail.com"
};

export const contactConfig = {
  email: "ridwan.karim.dev@gmail.com",
  github: "https://github.com/Ridwanulkarim",
  linkedin: "https://linkedin.com",
  formNotice: "This form is configured for direct submission. For immediate inquiries, email me directly."
};

export const resumeUrl = "/resume.pdf";

export const whatIBuildData = [
  {
    number: "01",
    title: "Web Experiences",
    description: "Responsive, accessible, and modern interfaces built with precision and focused on seamless usability."
  },
  {
    number: "02",
    title: "Full-Stack Systems",
    description: "End-to-end applications connecting reactive frontend components with resilient backend APIs and databases."
  },
  {
    number: "03",
    title: "Problem Solving",
    description: "Analyzing technical bottlenecks and turning real-world operational challenges into practical software solutions."
  },
  {
    number: "04",
    title: "AI & ML",
    description: "Exploring machine-learning models, intelligent features, and data-driven automation for next-gen applications."
  }
];

export const projectsData = [
  {
    id: "women-safety-app",
    number: "01",
    title: "Women Safety Web Application",
    category: "Full-Stack / Web",
    description: "A safety-focused web application designed to provide users with quick access to emergency tools, location sharing, emergency contact dispatch, instant notifications, and comprehensive safety resources.",
    image: womenSafetyImg,
    technologies: ["React", "Tailwind CSS", "Firebase", "Node.js", "Express.js"],
    features: [
      "One-click Emergency SOS Alerting",
      "Real-time GPS Location Sharing",
      "Emergency Contacts Management",
      "Instant push notifications & safety tips"
    ],
    liveDemo: "https://github.com/Ridwanulkarim",
    github: "https://github.com/Ridwanulkarim"
  },
  {
    id: "threat-intel-system",
    number: "02",
    title: "Dark Web Threat Intelligence Management System",
    category: "Full-Stack / Cyber Security",
    description: "A database-driven threat intelligence management platform designed to structure and categorize security intelligence including threat reports, indicators of compromise (IOCs), malware metadata, security incidents, and investigation evidence.",
    image: threatIntelImg,
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "REST API"],
    features: [
      "Centralized Security Threat Feed Repository",
      "IOC Indicator & Malware Tracking",
      "Incident Investigation & Evidence Management",
      "Relational Database Analytics with Prisma ORM"
    ],
    liveDemo: "https://github.com/Ridwanulkarim",
    github: "https://github.com/Ridwanulkarim"
  }
];

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: "Advanced", desc: "Semantic markup & structure" },
      { name: "CSS3 / Vanilla CSS", level: "Advanced", desc: "Custom layouts & animations" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Modern syntax & DOM logic" },
      { name: "React", level: "Advanced", desc: "Component architecture & state" },
      { name: "Tailwind CSS", level: "Advanced", desc: "Utility-first styling system" },
      { name: "Vite", level: "Intermediate", desc: "Fast build tool & HMR" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Intermediate", desc: "Event-driven runtime" },
      { name: "Express.js", level: "Intermediate", desc: "REST API server frameworks" },
      { name: "REST APIs", level: "Intermediate", desc: "Structured HTTP endpoint design" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", level: "Intermediate", desc: "Relational database & SQL queries" },
      { name: "Firebase", level: "Intermediate", desc: "Auth, Firestore & Realtime DB" },
      { name: "Firestore", level: "Intermediate", desc: "NoSQL document store" }
    ]
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Git", level: "Intermediate", desc: "Version control & branching" },
      { name: "GitHub", level: "Intermediate", desc: "Collaboration & code hosting" },
      { name: "VS Code", level: "Advanced", desc: "Primary IDE & dev environment" }
    ]
  },
  {
    category: "Exploring & Learning",
    skills: [
      { name: "AI & Machine Learning", level: "Enthusiast", desc: "Intelligent systems & models" },
      { name: "Backend Architecture", level: "Enthusiast", desc: "Scalable system design patterns" },
      { name: "Scalable Systems", level: "Enthusiast", desc: "High concurrency & optimization" }
    ]
  }
];

export const educationData = {
  degree: "B.Sc. in Computer Science & Engineering",
  institution: "International Islamic University Chittagong",
  status: "Currently Enrolled",
  focusAreas: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Engineering Principles",
    "Object-Oriented Programming",
    "Web Technologies & Computer Networks"
  ]
};

export const journeyTimeline = [
  {
    year: "Phase 01",
    title: "Computer Science Foundation",
    subtitle: "International Islamic University Chittagong",
    description: "Began CSE degree, building core foundation in algorithms, mathematics, and computer systems."
  },
  {
    year: "Phase 02",
    title: "Frontend Engineering Exploration",
    subtitle: "React & Modern Web Design",
    description: "Fell in love with crafting modern web UIs using React, JavaScript ES6+, Tailwind CSS, and component architectures."
  },
  {
    year: "Phase 03",
    title: "Full-Stack Development & Real Projects",
    subtitle: "Node.js, Express, Firebase & Databases",
    description: "Expanded into full-stack application design—building real-world solutions like the Women Safety Web App and Threat Intelligence Management System."
  },
  {
    year: "Phase 04",
    title: "AI/ML Integration & Future Scalability",
    subtitle: "Building & Learning continuously",
    description: "Currently exploring artificial intelligence, machine learning applications, and scalable backend architecture."
  }
];

export const githubSectionData = {
  title: "Building in public.",
  description: "Exploring code, crafting open-source experiments, and constantly refining technical skills.",
  stats: [
    { label: "Focus", value: "Full-Stack & Web" },
    { label: "Primary Tools", value: "React & Node.js" },
    { label: "Status", value: "Active Builder" }
  ]
};
