export const profile = {
  name: "Mekha M",
  role: "Full Stack Developer",
  tagline: "I build data-driven web products with Java, React, Node and MongoDB.",
  location: "Tirupur, Tamil Nadu, India",
  email: "mekha.mahendran.38@gmail.com",
  phone: "+91 63859 01512",
  github: "https://github.com/mekha-mahendran",
  linkedin: "https://www.linkedin.com/in/mekha-mahendran-design/",
  objective:
    "Motivated BCA graduate with an 8.9 CGPA, proficient in Core Java, SQL, JDBC, MySQL, NodeJS and ReactJS. Eager to apply my technical skills, contribute to innovative software solutions, and continuously enhance my expertise through professional learning and development.",
};

export const stats = [
  { label: "CGPA", value: 8.9, suffix: "" },
  { label: "Internships", value: 3, suffix: "" },
  { label: "Projects shipped", value: 2, suffix: "" },
  { label: "Pipeline efficiency gain", value: 25, suffix: "%" },
];

export type SkillGroup = { title: string; blurb: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    blurb: "Core language fundamentals and problem solving.",
    items: ["Core Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    blurb: "Interfaces that stay fast and readable.",
    items: ["HTML", "CSS", "ReactJS", "Vite", "Tailwind CSS"],
  },
  {
    title: "Backend",
    blurb: "APIs, auth and server-side logic.",
    items: ["NodeJS", "JWT Authentication", "REST APIs"],
  },
  {
    title: "Database",
    blurb: "Modelling and querying data at scale.",
    items: ["MySQL", "MongoDB", "JDBC Connectivity", "Joins & Aggregations"],
  },
  {
    title: "Tools & Practices",
    blurb: "How the work gets shipped.",
    items: ["Power BI", "Git", "Agile Methodology", "Debugging", "Documentation Standards"],
  },
  {
    title: "Key Strengths",
    blurb: "Analytical habits that shape my engineering.",
    items: [
      "Analytical Thinking",
      "Problem Solving",
      "Attention to Detail",
      "Time Management",
      "Logical Reasoning",
    ],
  },
  {
    title: "Soft Skills",
    blurb: "Working well inside a team.",
    items: ["Communication", "Teamwork", "Adaptability", "Leadership"],
  },
  {
    title: "Languages",
    blurb: "Spoken and written.",
    items: ["English", "Tamil", "Kannada"],
  },
];

export type Project = {
  slug: string;
  title: string;
  short: string;
  overview: string;
  problem: string;
  features: string[];
  architecture: string[];
  screenshots: { title: string; note: string }[];
  stack: string[];
  challenges: { challenge: string; solution: string }[];
  future: string[];
  github: string;
  demo: string;
  accent: "primary" | "violet";
  year: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "school-erp",
    title: "School ERP & LMS",
    short: "AI-powered school management system with role-based portals.",
    overview:
      "A full-stack School ERP and Learning Management System with dedicated portals for admins, teachers, students and parents. It covers attendance, homework, fees and exam results, and ships an AI chatbot that answers school-specific questions.",
    problem:
      "Schools run on scattered spreadsheets and paper registers. Parents have no live visibility into attendance or fees, and teachers repeat the same manual data entry every term.",
    features: [
      "Four role-based portals: Admin, Teacher, Student, Parent",
      "Attendance, homework, fees and exam result modules",
      "JWT-secured RESTful API with role-based access control",
      "AI chatbot powered by Google Gemini",
      "Responsive Tailwind CSS interface",
      "Environment-based configuration for multi-stage deploys",
    ],
    architecture: [
      "React (Vite) client deployed on Vercel",
      "Express.js REST API deployed on Render",
      "JWT auth middleware guarding every role-scoped route",
      "MongoDB Atlas with Mongoose schemas per module",
      "Google Gemini API for the assistant layer",
    ],
    screenshots: [
      { title: "Admin dashboard", note: "Enrolment, fees and staff overview in one grid." },
      { title: "Teacher attendance", note: "Single-tap class marking with instant sync." },
      { title: "Parent portal", note: "Results, fee status and homework in one feed." },
      { title: "AI assistant", note: "Gemini-backed answers scoped to school data." },
    ],
    stack: [
      "React (Vite)",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tailwind CSS",
      "Google Gemini AI",
      "Vercel",
      "Render",
    ],
    challenges: [
      {
        challenge: "Four user roles needed very different views of the same records.",
        solution:
          "Modelled permissions server-side and shaped API responses per role, so the client never receives data it is not allowed to render.",
      },
      {
        challenge: "Frontend and backend live on different hosts.",
        solution:
          "Moved every host, key and origin into environment-based configuration and locked CORS to the deployed client origin.",
      },
      {
        challenge: "The chatbot invented answers when it lacked school context.",
        solution:
          "Grounded prompts with the requesting user's role and scoped records before calling Gemini.",
      },
    ],
    future: [
      "Realtime notifications over WebSockets",
      "Offline-first attendance capture",
      "Timetable auto-generation",
      "Fee payment gateway integration",
    ],
    github: "https://github.com/mekha-mahendran/school-erp-ai",
    demo: "https://school-erp-ai-ruddy.vercel.app/",
    accent: "primary",
    year: "2026",
    featured: true,
  },
  {
    slug: "employee-performance-analytics",
    title: "Employee Performance Analytics",
    short: "Java + SQL analytics pipeline with a live Power BI dashboard.",
    overview:
      "A full-stack data analytics project that queries MySQL through Java (JDBC) to analyse department-wise salary and performance trends, paired with an interactive Power BI dashboard and a JavaScript showcase site.",
    problem:
      "HR teams sit on payroll and appraisal data but cannot answer basic questions — which departments are underperforming, where salary spread is widest, how trends move year over year.",
    features: [
      "Java + JDBC data access layer over MySQL",
      "Aggregate SQL analysis with GROUP BY and AVG",
      "Department-wise salary and performance trend reports",
      "Power BI dashboard on a live MySQL connection",
      "JavaScript showcase site with a dynamic, sortable data table",
    ],
    architecture: [
      "MySQL as the analytical source of truth",
      "Java service layer using JDBC prepared statements",
      "Aggregation queries materialised into reporting views",
      "Power BI connected live to MySQL for visual exploration",
      "Static HTML/CSS/JS showcase with client-side sorting",
    ],
    screenshots: [
      { title: "Power BI overview", note: "Department salary spread and performance bands." },
      { title: "Trend view", note: "Year-over-year performance movement per team." },
      { title: "Sortable table", note: "JavaScript showcase with client-side sorting." },
    ],
    stack: ["Java", "JDBC", "MySQL", "SQL", "Power BI", "HTML", "CSS", "JavaScript"],
    challenges: [
      {
        challenge: "Aggregation queries slowed down as record counts grew.",
        solution:
          "Indexed the join and grouping columns and pushed aggregation into SQL instead of looping in Java.",
      },
      {
        challenge: "Dashboard numbers drifted from the raw table.",
        solution:
          "Standardised a single set of reporting views so Java, Power BI and the showcase site all read the same definitions.",
      },
    ],
    future: [
      "Attrition-risk scoring",
      "Scheduled report exports",
      "Role-based access to sensitive salary fields",
    ],
    github: "https://github.com/mekha-mahendran/employee-performance-analytics",
    demo: "https://mekha-mahendran.github.io/employee-performance-analytics/",
    accent: "violet",
    year: "2025",
    featured: true,
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  responsibilities: string[];
  tech: string[];
  achievement: string;
};

export const experiences: Experience[] = [
  {
    role: "Java Full Stack Developer Intern",
    company: "QSpiders, Coimbatore",
    period: "Jan 2025 — Present",
    summary:
      "Building web applications end to end with Java, REST APIs and MySQL inside an agile team.",
    responsibilities: [
      "Managed structured data and built web applications using Java, REST APIs and MySQL",
      "Ensured accurate data validation, record-keeping and consistency",
      "Worked through agile processes and documentation standards",
    ],
    tech: ["Core Java", "REST APIs", "MySQL", "JDBC"],
    achievement: "Kept data integrity intact across every module handed off for review.",
  },
  {
    role: "Python with Data Analytics Intern",
    company: "Accent Techno Soft, Coimbatore",
    period: "May 2025 — Jun 2025",
    summary: "Cleaned, formatted and visualised large datasets for analysis and reporting.",
    responsibilities: [
      "Performed data cleaning, formatting and visualisation on large datasets",
      "Used Python and Pandas within an agile team setting",
      "Improved data accuracy and consistency for downstream reporting",
    ],
    tech: ["Python", "Pandas", "Data Visualisation"],
    achievement: "Raised reporting accuracy by standardising the cleaning pipeline.",
  },
  {
    role: "Web Development Intern",
    company: "Hailstone Technology, Coimbatore",
    period: "May 2024 — Jun 2024",
    summary: "Assisted in building responsive web pages and basic backend integration tasks.",
    responsibilities: [
      "Developed responsive web pages",
      "Supported basic backend and data integration tasks",
      "Ensured accurate content entry, formatting and consistency",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    achievement: "Delivered pages that held up across mobile and desktop breakpoints.",
  },
];

export const education = [
  {
    institution: "Dr.SNS Rajalakshmi College of Arts and Science, Coimbatore",
    degree: "Bachelor of Computer Applications (BCA)",
    result: "CGPA 8.9",
    period: "2023 — 2026",
    detail:
      "Core coursework in Java, data structures, database systems and web technologies, alongside project work in analytics and full-stack development.",
  },
  {
    institution: "Saradha Vidhyalaya Matriculation Higher Secondary School, Tirupur",
    degree: "Higher Secondary Certificate (HSC)",
    result: "65.6%",
    period: "2022 — 2023",
    detail: "Secondary School Leaving Certificate (SSLC) completed with 80%.",
  },
  {
    institution: "Saradha Vidhyalaya Matriculation Higher Secondary School, Tirupur",
    degree: "Secondary School Leaving Certificate (SSLC)",
    result: "65.6%",
    period: "2020 — 2021",
    detail: "Secondary School Leaving Certificate (SSLC) completed with 80%.",
  },
];

export const certificates = [
  {
    title: "AI Data Architect",
    issuer: "National Skill Development Corporation (NSDC)",
    year: "2025",
    detail:
      "Designed AI-driven data pipelines and integrated ML models, improving data processing efficiency by 25%.",
    skills: ["Data Pipelines", "ML Integration", "Data Architecture"],
  },
];

export const achievements = [
  {
    title: "Class Representative",
    category: "Leadership",
    detail:
      "Served as class representative, coordinating between faculty and students across the academic year.",
  },
  {
    title: "LeetCode Workshop",
    category: "Workshop",
    detail:
      "Attended a LeetCode workshop to sharpen problem-solving and data-structure fundamentals.",
  },
  {
    title: "College Event Volunteer",
    category: "Volunteering",
    detail: "Volunteered in college event organisation, handling logistics and on-day coordination.",
  },
  {
    title: "8.9 CGPA",
    category: "Academics",
    detail: "Maintained an 8.9 CGPA through the BCA programme while interning in parallel.",
  },
];

export const services = [
  {
    title: "Full Stack Web Development",
    detail:
      "MERN and Java-backed applications built from schema to interface, with authentication and role-based access handled properly.",
    points: ["React + Vite frontends", "Node/Express REST APIs", "MongoDB & MySQL modelling"],
  },
  {
    title: "Data Analytics & Dashboards",
    detail:
      "Turning raw operational data into reporting people actually use, from SQL aggregation to Power BI dashboards.",
    points: ["SQL reporting views", "Power BI dashboards", "Python/Pandas cleaning"],
  },
  {
    title: "API & Database Engineering",
    detail:
      "Designing endpoints and schemas that stay predictable, documented and safe to extend later.",
    points: ["JWT auth flows", "Schema design", "Query optimisation"],
  },
  {
    title: "Responsive UI Engineering",
    detail:
      "Accessible, fast interfaces with Tailwind CSS that hold their layout from mobile through desktop.",
    points: ["Design systems", "Accessibility passes", "Performance tuning"],
  },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/certificates", label: "Certificates" },
  { to: "/achievements", label: "Achievements" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;
