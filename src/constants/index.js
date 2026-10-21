export const CONTACT = {
  name: "Areeb Zakir",
  location: "Lahore, Pakistan",
  email: "areebzakir1114@gmail.com",
  phone: "+92 334 4984973",
  github: "https://github.com/areeb193",
  linkedin: "https://www.linkedin.com/in/areeb-zakir",
};

// Add a download only after its actual approved PDF exists in public/resumes.
export const RESUMES = [];

export const EXPERIENCES = [
  {
    date: "Aug 2026 — Present",
    role: "Associate Software Engineer",
    company: "Mindravel Interactive",
    detail: "Full-time · Lahore, on-site",
    current: true,
    contributions: [
      "Build Node.js and Express services and REST APIs for games and internal systems.",
      "Work with PostgreSQL, Amazon Aurora, MongoDB, and Valkey across database and caching workflows.",
      "Contribute to production insights and administration, and deploy and troubleshoot services on AWS Lightsail.",
    ],
  },
  {
    date: "Feb 2026 — May 2026",
    role: "Mobile Application Developer Intern",
    company: "Trifaar",
    detail: "Internship · Lahore",
    contributions: [
      "Implemented React Native OTP workflows, third-party SDKs, and live-streaming connectivity.",
      "Integrated REST APIs and debugged mobile flows with Swagger/OpenAPI and Postman.",
    ],
  },
  {
    date: "Jun 2025 — Jul 2025",
    role: "Software Engineering Intern",
    company: "Optimum Engineering Company",
    detail: "Internship · Lahore",
    contributions: [
      "Built business modules and reusable components with Next.js, TypeScript, and Tailwind CSS.",
      "Integrated Payload CMS and REST APIs into content and business workflows.",
    ],
  },
  {
    date: "Jan 2023 — Present",
    role: "Freelance Software Developer",
    company: "Independent",
    detail: "Self-employed · Remote",
    contributions: [
      "Deliver web and mobile work, from requirements and API integration through testing and deployment.",
    ],
  },
];

export const PROJECTS = [
  {
    slug: "production-insights",
    number: "01",
    title: "Production Insights & Admin Dashboard",
    stage: "Production",
    category: "Backend engineering",
    summary:
      "Bringing project insights and administration together through PostgreSQL-backed APIs and Valkey caching.",
    contribution:
      "My focus: backend services, data access, and insights workflows.",
    technologies: ["Node.js", "PostgreSQL", "Valkey", "REST APIs"],
    image: "/images/dashboard-sample.svg",
    imageAlt:
      "Sample dashboard illustration with an activity chart and example administration records; no production data.",
    visualNote: "Sample illustration · No production data",
    private: true,
    role: "Backend development",
    context: "Production work · Mindravel Interactive",
    problem:
      "Production projects need a practical way to inspect information and carry out administration. This work brings those workflows together through backend services and a project insights dashboard.",
    work: "I contribute to the backend services, PostgreSQL-backed APIs, and Valkey caching used for insights and administration. The wider role also includes database workflows and deployment troubleshooting.",
    decisions: [
      [
        "API-based data access",
        "REST APIs connect dashboard workflows to backend services, keeping data access in the service layer.",
      ],
      [
        "PostgreSQL and Valkey",
        "PostgreSQL supports the data workflows; Valkey supports caching. Private schemas, cache policies, and infrastructure details are intentionally not published.",
      ],
    ],
    outcome:
      "The dashboard supports insights and administration for a production project. No public performance measurements or customer figures are available for this case study.",
  },
  {
    slug: "digital-invoicing",
    number: "02",
    title: "Digital Invoicing System",
    stage: "Production",
    category: "Web application",
    summary:
      "Invoice creation, validation, and tracking in one dashboard for business workflows.",
    contribution:
      "My focus: invoicing workflows, validation, and dashboard delivery.",
    technologies: ["React", "REST APIs", "Validation"],
    live: "https://www.dispakistan.com/",
    image: "/images/invoicing-sample.svg",
    imageAlt:
      "Sample invoice interface with fictional line items and invoice status; an illustration, not a product screenshot.",
    visualNote: "Sample illustration · Fictional invoice",
    role: "Web application development",
    context: "Client project · Production",
    problem:
      "Creating and following up invoices involves repeated data entry, validation, and status checks. The system brings invoice creation and tracking into a single dashboard workflow.",
    work: "My work covers invoice creation, tracking, validation, and the dashboard experience. The public portfolio keeps client financial information and customer records private.",
    decisions: [
      [
        "Validation within the workflow",
        "Invoice validation is part of creation, so the workflow addresses data correctness alongside entering invoice details.",
      ],
      [
        "A shared dashboard",
        "Invoice tracking and creation are brought together so users can work through the invoicing process in one place.",
      ],
    ],
    outcome:
      "Delivered invoicing workflows used in a production client project. Usage counts and performance claims are omitted because they have not been independently refreshed.",
  },
  {
    slug: "libera",
    number: "03",
    title: "Libera",
    stage: "Prototype",
    category: "Cross-platform mobile",
    summary:
      "A React Native social prototype exploring wallet identity, decentralized storage, and content moderation.",
    contribution:
      "My focus: the mobile prototype and its identity and content workflows.",
    technologies: ["React Native", "IPFS", "TensorFlow.js"],
    image: "/images/libera-sample.svg",
    imageAlt:
      "Concept illustration of a mobile social feed for Libera, with fictional posts and a wallet identity card.",
    visualNote: "Interface concept · Prototype",
    source:
      "https://github.com/areeb193/Libera-Decentralised-Social-Media-Application",
    role: "Mobile application development",
    context: "Social application · Prototype",
    problem:
      "Libera explores how a social app can combine a familiar mobile experience with wallet-based identity and decentralized content storage. It is an exploratory prototype, with no claim of production adoption.",
    work: "I worked on the React Native prototype and its wallet identity, IPFS content, and TensorFlow.js moderation workflows. The public source provides the implementation context.",
    decisions: [
      [
        "React Native for mobile",
        "The prototype uses React Native to explore the social experience through a mobile application.",
      ],
      [
        "Wallet identity and IPFS",
        "Wallet identity and decentralized storage are part of the prototype's exploration of how people access and share content.",
      ],
      [
        "Moderation as part of the prototype",
        "TensorFlow.js is included for content moderation exploration. This is not a claim of production moderation accuracy or coverage.",
      ],
    ],
    outcome:
      "A public prototype that connects mobile development with decentralized identity, content storage, and moderation experiments. Further production readiness and evaluation remain outside its stated stage.",
  },
];

export const ARCHIVE = [
  {
    title: "INTERNFLOW",
    category: "MERN · Internship & job portal",
    url: "https://github.com/areeb193/INTERNFLOW",
  },
  {
    title: "Fitness Pro",
    category: "React Native · Workout application",
    url: "https://github.com/areeb193/Workout-app-React-Native-",
  },
  {
    title: "JobLens AI",
    category: "React · Resume analysis",
    url: "https://github.com/areeb193/JobLensAI",
  },
];

export const CAPABILITIES = [
  {
    number: "01",
    title: "Backend & APIs",
    description: "Services that connect the product.",
    skills: "Node.js · Express.js · REST APIs",
    evidence: "Production insights",
    href: "#/work/production-insights",
  },
  {
    number: "02",
    title: "Databases & caching",
    description: "The data behind the experience.",
    skills: "PostgreSQL · Aurora · MongoDB · Valkey",
    evidence: "Current production work",
    href: "#experience",
  },
  {
    number: "03",
    title: "Web & mobile",
    description: "From the browser to your pocket.",
    skills: "React · Next.js · React Native · Expo",
    evidence: "Libera prototype",
    href: "#/work/libera",
  },
  {
    number: "04",
    title: "Deployment & testing",
    description: "Care beyond the first working build.",
    skills: "AWS Lightsail · Git · Postman · OpenAPI",
    evidence: "Engineering experience",
    href: "#experience",
  },
];
