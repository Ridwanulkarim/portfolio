import womenSafetyImg from '../assets/images/women_safety_app.jpg';
import threatIntelImg from '../assets/images/threat_intel_system.jpg';
import iiucCourseApiImg from '../assets/images/iiuc_course_api.jpg';
import daylightPlannerImg from '../assets/images/daylight_planner.jpg';
import avatarImg from '../assets/images/ridwan_avatar.jpg';

import certRoverXImg from '../assets/images/certificates/cert_roverx.png';
import cert5G6GImg from '../assets/images/certificates/cert_5g6g.png';
import certAgentXImg from '../assets/images/certificates/cert_agentx_ai.png';
import certJSCBoardImg from '../assets/images/certificates/cert_jsc_board.png';
import certSSCBoardImg from '../assets/images/certificates/cert_ssc_board.png';
import certHSCBoardImg from '../assets/images/certificates/cert_hsc_board.png';
import certSSCTestimonialImg from '../assets/images/certificates/cert_ssc.png';
import certHSCTestimonialImg from '../assets/images/certificates/cert_hsc.jpg';

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
  phone: "01862-126812",
  email: "ridwanulk08@gmail.com",
  status: "Available for opportunities",
  bioHeadline: "A little about me.",
  bioParagraphs: [
    "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّهِ وَبَرَكاتُهُ  My name is Mohammad Ridwanul Karim. I am a passionate and dedicated student of Computer Science and Engineering (CSE) at International Islamic University Chittagong (IIUC), deeply interested in technology, problem-solving, and continuous learning.",
    "Beyond academics, I have a strong passion for astronomy, often spending time observing stars, the moon, and galaxies through a telescope — an activity that enhances my curiosity, patience, and focus.",
    "I aim to integrate my technical knowledge and creative thinking to contribute meaningfully in the fields of software development, content creation, and scientific exploration."
  ],
  heroTagline: "I build digital experiences that are simple, useful & scalable.",
  heroSubtext: "Computer Science & Engineering student at IIUC passionate about building modern web applications, solving real-world problems, and exploring intelligent technologies.",
  profileImage: avatarImg,
  metaTags: ["CSE", "Developer", "Builder"]
};

export const socialLinks = {
  github: "https://github.com/Ridwanulkarim",
  linkedin: "https://www.linkedin.com/in/ridwanul-karim-508b5b318",
  email: "ridwanulk08@gmail.com"
};

export const contactConfig = {
  email: "ridwanulk08@gmail.com",
  phone: "01862-126812",
  github: "https://github.com/Ridwanulkarim",
  linkedin: "https://www.linkedin.com/in/ridwanul-karim-508b5b318",
  formNotice: "This form is configured for direct submission. For immediate inquiries, email me directly."
};

export const resumeUrl = "/resume.pdf";

export const hobbiesAndInterestsData = [
  {
    name: "Astronomical Observation",
    desc: "Observing stars, the moon, and galaxies through a telescope"
  },
  {
    name: "Competitive Programming",
    desc: "Solving algorithmic challenges and practicing problem solving"
  },
  {
    name: "Writing & Content Creation",
    desc: "Writing educational, technical, and analytical content"
  },
  {
    name: "Gardening",
    desc: "Nurturing plants and spending time in nature"
  }
];

export const languagesData = [
  { name: "Bengali", level: "Native" },
  { name: "English", level: "Fluent" }
];

export const personalQualitiesData = [
  "Curious and Innovative Thinker",
  "Strong Communication Skills",
  "Teamwork & Leadership",
  "Analytical & Critical Reasoning",
  "Highly Motivated & Adaptable"
];

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
  },
  {
    id: "iiuc-course-api",
    number: "03",
    title: "IIUC Course Management API",
    category: "Backend / REST API",
    description: "A high-performance backend REST API system engineered for International Islamic University Chittagong course administration, student course registration, prerequisite validation, departmental routine scheduling, and grading telemetry.",
    image: iiucCourseApiImg,
    technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT Auth", "REST API"],
    features: [
      "Course Registration & Prerequisite Logic Validation",
      "Departmental Slot Scheduling & Room Allocation",
      "Role-Based JWT Access Control (Student / Faculty / Admin)",
      "Structured SQL Database Queries & Endpoint Telemetry"
    ],
    liveDemo: "https://github.com/Ridwanulkarim",
    github: "https://github.com/Ridwanulkarim"
  },
  {
    id: "day-light-planner",
    number: "04",
    title: "Day Light Planner",
    category: "Frontend / Productivity App",
    description: "A modern daylight-focused daily task planner and productivity dashboard featuring visual time-blocking, goal tracking, focus analytics, priority tags, and responsive task workflow management.",
    image: daylightPlannerImg,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Local Storage", "JavaScript"],
    features: [
      "Interactive Daytime Schedule & Time-Blocking Grid",
      "Task Priority & Category Color-Coding",
      "Focus Duration Analytics & Daily Completion Metrics",
      "Responsive Dark Glass Productivity Dashboard"
    ],
    liveDemo: "https://github.com/Ridwanulkarim",
    github: "https://github.com/Ridwanulkarim"
  }
];

export const skillsData = [
  {
    category: "Frontend & Core",
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
    category: "Backend & Systems",
    skills: [
      { name: "Node.js", level: "Intermediate", desc: "Event-driven runtime" },
      { name: "Express.js", level: "Intermediate", desc: "REST API server frameworks" },
      { name: "REST APIs", level: "Intermediate", desc: "Structured HTTP endpoint design" },
      { name: "Competitive Programming", level: "Intermediate", desc: "Algorithmic problem solving" }
    ]
  },
  {
    category: "Database & Cloud",
    skills: [
      { name: "PostgreSQL", level: "Intermediate", desc: "Relational database & SQL queries" },
      { name: "Firebase", level: "Intermediate", desc: "Auth, Firestore & Realtime DB" },
      { name: "Firestore", level: "Intermediate", desc: "NoSQL document store" }
    ]
  },
  {
    category: "Tools & Communication",
    skills: [
      { name: "Git & GitHub", level: "Intermediate", desc: "Version control & collaboration" },
      { name: "VS Code", level: "Advanced", desc: "Primary IDE & dev environment" },
      { name: "Content Writing", level: "Intermediate", desc: "Technical & educational writing" },
      { name: "Debate & Reasoning", level: "Intermediate", desc: "Critical thinking & presentation" }
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

export const certificatesData = [
  {
    id: "agentx-ai-prompting",
    title: "AgentX - AI Prompting Competition",
    issuer: "NetCom Learning Bangladesh & IIUC",
    date: "2025",
    type: "Award & Appreciation",
    description: "Certificate of Appreciation for outstanding performance and prize at the AgentX AI Prompting Competition organized at International Islamic University Chittagong.",
    image: certAgentXImg
  },
  {
    id: "roverx-mars-rover",
    title: "RoverX Mars Rover Challenge Seminar",
    issuer: "IEEE IIUC Student Branch",
    date: "June 16, 2025",
    type: "IEEE Participation",
    description: "Participation certificate in seminar with Mars Rover Challenge experts on 'RoverX' with Team Project Altair from IUT at Central Auditorium, IIUC.",
    image: certRoverXImg
  },
  {
    id: "5g-6g-networking",
    title: "5G & 6G Networking Systems",
    issuer: "IEEE ComSoc IIUC SBC",
    date: "December 05, 2024",
    type: "IEEE Webinar",
    description: "Webinar certification on '5G & 6G Networking Systems: Pioneering the Future of Connectivity' led by Ericsson network leads and IIUC Faculty.",
    image: cert5G6GImg
  },
  {
    id: "hsc-board-cert",
    title: "HSC Board Certificate (2023)",
    issuer: "BISE Chattogram • Bakalia Govt. College",
    date: "November 26, 2023",
    type: "Board Certificate",
    description: "Official Higher Secondary Certificate Examination 2023 in Science Group under Board of Intermediate and Secondary Education Chattogram with GPA 4.67.",
    image: certHSCBoardImg
  },
  {
    id: "hsc-testimonial",
    title: "HSC Academic Testimonial",
    issuer: "Bakalia Government College, Chattogram",
    date: "2021 — 2023",
    type: "College Testimonial",
    description: "Official college academic testimonial certifying student completion of HSC course in Science Group with GPA 4.67.",
    image: certHSCTestimonialImg
  },
  {
    id: "ssc-board-cert",
    title: "SSC Board Certificate (2021)",
    issuer: "BISE Chattogram • Nasirabad Govt. High School",
    date: "December 30, 2021",
    type: "Board Certificate",
    description: "Official Secondary School Certificate Examination 2021 in Science Group under Board of Intermediate and Secondary Education Chattogram with GPA 5.00.",
    image: certSSCBoardImg
  },
  {
    id: "ssc-testimonial",
    title: "SSC Academic Testimonial",
    issuer: "Nasirabad Govt. High School, Chattogram",
    date: "2021",
    type: "School Testimonial",
    description: "Official school academic testimonial certifying student completion of SSC course in Science Group with GPA 5.00.",
    image: certSSCTestimonialImg
  },
  {
    id: "jsc-board-cert",
    title: "JSC Board Certificate (2018)",
    issuer: "BISE Chittagong • Nasirabad Govt. High School",
    date: "December 24, 2018",
    type: "Board Certificate",
    description: "Official Junior School Certificate Examination 2018 under Board of Intermediate and Secondary Education Chittagong with Perfect GPA 5.00.",
    image: certJSCBoardImg
  }
];

export const educationData = [
  {
    id: "bsc-cse",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "International Islamic University Chittagong (IIUC)",
    status: "Currently Enrolled",
    period: "2024 — 2028",
    result: "Undergraduate Degree",
    focusAreas: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering Principles",
      "Object-Oriented Programming",
      "Web Technologies & Computer Networks"
    ]
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Bakalia Government College, Chattogram",
    status: "Completed",
    period: "2021 — 2023",
    result: "GPA 4.67 (Science Group)",
    focusAreas: [
      "Physics",
      "Chemistry",
      "Higher Mathematics",
      "Information & Communication Technology (ICT)",
      "Biology"
    ]
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "Nasirabad Govt. High School, Chattogram",
    status: "Completed",
    period: "2021",
    result: "GPA 5.00 (Science Group)",
    focusAreas: [
      "Physics",
      "Chemistry",
      "Higher Mathematics",
      "General Science & Mathematics",
      "ICT"
    ]
  }
];

export const journeyTimeline = [
  {
    year: "Phase 01",
    title: "Computer Science Foundation",
    subtitle: "International Islamic University Chittagong",
    description: "Began CSE degree (2024–2028), building core foundation in algorithms, mathematics, and computer systems."
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
    description: "Expanded into full-stack application design—building real-world solutions like the Women Safety Web App, IIUC Course API, and Threat Intelligence System."
  },
  {
    year: "Phase 04",
    title: "AI/ML Integration & Astronomy Exploration",
    subtitle: "Building & Learning continuously",
    description: "Currently exploring artificial intelligence, machine learning applications, competitive programming, and astronomical observation."
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
