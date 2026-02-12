
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";


export const HERO_CONTENT = `I am a Software Engineer and freelance developer specializing in building reliable, high‑performance web and mobile applications. I leverage modern technologies including React, React Native, Node.js, Express, and MongoDB to create scalable solutions. My expertise spans Docker containerization, Kubernetes orchestration, Terraform infrastructure automation, and Azure cloud deployments. I implement robust testing with Playwright and Selenium, establish CI/CD pipelines using GitHub Actions, and apply solid OOP/DSA principles to deliver production‑ready applications with clean architecture and optimal performance.`;

export const ABOUT_TEXT = `I am a versatile Software Engineer with hands‑on experience delivering web and mobile applications for clients since 2023. My technical stack includes JavaScript, TypeScript, C++, and Python; React and React Native for frontend development; Node.js and Express for backend services; Tailwind CSS for modern UI design; MongoDB and Supabase for data management. I specialize in DevOps practices using Docker, Kubernetes, Terraform, and Azure for cloud infrastructure automation. My testing expertise covers Playwright for end‑to‑end automation, Selenium for cross‑browser testing, and Postman for API validation. I implement CI/CD pipelines with GitHub Actions, follow complete SDLC from requirements to deployment, practice modular architecture with reusable components, and collaborate using Git/GitHub with agile methodologies. I value clean code, performance optimization, thoughtful UX, and continuous learning in modern development tools and best practices.`;

export const EXPERIENCES = [
  {
    year: "2026 - Present",
    role: "Full Stack Developer",
    company: "Plasmocode",
    description: `Working as a Full Stack Developer at Plasmocode, a software agency specializing in modern web solutions. Developing end-to-end applications using React, Node.js, and Payload CMS. Contributing to client projects and agency infrastructure with focus on scalable architecture and optimal performance.`,
    technologies: ["React", "Node.js", "Payload CMS", "TypeScript", "MongoDB", "Tailwind CSS"],
  },
  {
    year: "2023 - 2026",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    description: `Worked with multiple clients to design and develop responsive websites and web applications. Delivered projects using React.js, Tailwind CSS, and Node.js. Communicated with clients to gather requirements, provide progress updates, and ensure timely delivery.`,
    technologies: ["React.js", "Tailwind CSS", "Node.js", "JavaScript"],
  },
  {
    year: "2022 - 2023",
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    description: `Built user interfaces for small business websites using HTML, CSS, and JavaScript. Focused on mobile-friendly, accessible designs. Handled version control using Git and deployed projects on Netlify and GitHub Pages.`,
    technologies: ["HTML", "CSS", "JavaScript", "Git", "Netlify"],
  },
  {
    year: "2022",
    role: "Freelance Mobile App Developer",
    company: "Self-Employed",
    description: `Developed cross-platform mobile applications using React Native. Integrated REST APIs and Firebase for authentication and real-time data. Optimized app performance for both Android and iOS devices. Delivered functional prototypes and published apps to test environments.`,
    technologies: ["React Native", "Firebase", "Expo", "JavaScript"],
  },
];


export const PROJECTS = [
  {
    title: "Digital Invoicing System for Pakistan",
    image: "https://res.cloudinary.com/ddz3jxlit/image/upload/v1770917773/Screenshot_2025-09-20_163315_hcj5as.png",
    description:
      "A complete platform designed to help businesses create FBR-compliant invoices quickly and easily. Features secure JWT authentication, real-time integration with FBR APIs for automated tax calculations and QR code generation. Valued at PKR 130,000, this client project significantly reduces invoice generation time.",
    technologies: ["React", "Node.js", "JWT", "FBR API", "QR Code Generation"],
    link: "https://www.dispakistan.com/",
    linkLabel: "Live Demo",
    imageSize: 220,
  },
  {
    title: "Plasmocode - Software Agency Website",
    image: "https://res.cloudinary.com/ddz3jxlit/image/upload/v1770917852/Screenshot_2026-02-12_222814_q6phc9.png",
    description:
      "A professional software agency website built with modern technologies and Payload CMS for robust content management. Features dynamic content delivery, responsive design, and seamless backend integration for streamlined agency operations.",
    technologies: ["React", "Payload CMS", "Node.js", "Tailwind CSS"],
    link: "https://www.plasmocode.com/",
    linkLabel: "Live Demo",
    imageSize: 220,
  },
  {
    title: "M.A. Traders",
    image: "https://res.cloudinary.com/ddz3jxlit/image/upload/v1770025458/M.A_traders_r5mmo6.png",
    description:
      "A comprehensive digital platform for global trade operations and electrical services management. Features e-commerce functionality, admin dashboard, real-time inventory tracking, and service management for solar panels, CCTV, and AC installations.",
    technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Docker", "Tailwind CSS"],
    link: "https://github.com/areeb193/matraders-backend",
    imageSize: 220,
  },
  {
    title: "Fitness Pro",
    image: "https://res.cloudinary.com/ddz3jxlit/image/upload/v1770025453/Fitness_Pro_1_vatnn3.png",
    description:
      "A cross-platform workout and fitness tracking app with exercise database, BMI calculator, and detailed exercise instructions. Browse exercises by body parts with animated demonstrations and personalized fitness profiles.",
    technologies: ["React Native", "Expo", "ExerciseDB API", "NativeWind", "React Native Reanimated"],
    link: "https://github.com/areeb193/Workout-app-React-Native-",
    imageSize: 220,
  },
  {
    title: "INTERNFLOW",
    image: "https://res.cloudinary.com/ddz3jxlit/image/upload/v1770025453/Internship_portal_su2qxq.png",
    description:
      "A full-stack internship and job portal connecting students with employers. Features real-time chat, application tracking, admin dashboard, and secure authentication. Streamlines the job application process with intelligent tracking.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Redux", "Tailwind CSS"],
    link: "https://github.com/areeb193/INTERNFLOW",
    imageSize: 220,
  },
  {
    title: "JobLens AI",
    image: "https://res.cloudinary.com/ddz3jxlit/image/upload/v1770025453/job_lens_ai_vchgkp.png",
    description:
      "An AI-powered resume analyzer that provides intelligent feedback, ATS scores, and job-specific suggestions. Upload resumes and receive custom recommendations tailored to specific job descriptions.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Puter.js", "Zustand"],
    link: "https://github.com/areeb193/JobLensAI",
    imageSize: 220,
  },
  {
    title: "Stride Zone",
    image: "https://res.cloudinary.com/ddz3jxlit/image/upload/v1770025452/stride_zone_mmyagl.png",
    description:
      "A high-performance fitness and activity tracking app with real-time GPS tracking, goal setting, performance analytics, and social features. Track workouts, runs, and activities with detailed statistics and progress visualization.",
    technologies: ["React Native", "Expo", "Node.js", "Express", "Supabase", "TypeScript"],
    link: "https://github.com/areeb193/shoes-Store-In-React-native",
    imageSize: 220,
  },
  {
    title: "Cloud Infrastructure Automation",
    image: project3,
    description:
      "A DevOps project demonstrating modern infrastructure automation and CI/CD practices. Includes containerized microservices deployed to Azure Kubernetes Service with automated pipelines, infrastructure provisioning using Terraform, and continuous deployment workflows.",
    technologies: ["Docker", "Kubernetes", "Terraform", "Azure", "GitHub Actions"],
  },
  {
    title: "Store management system",
    image: project2,
    description:
      "A shop management system that helps businesses efficiently handle inventory, sales, and customer transactions. It enables users to add, update, and track products, making retail management easier and more organized.",
    technologies: [ "Data structure and Algorithm","C++"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "85A.New Canal Housing Scheme  , Lahore, Pakistan ",
  phoneNo: "03344984973 ",
  email: "areebzakir1114@gamil.com",
};