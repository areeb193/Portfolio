import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a Software Engineering student (7th semester, COMSATS) and freelance developer focused on building reliable, high‑performance products. I work across the MERN stack and React Native, apply solid OOP/DSA, and use Playwright for end‑to‑end automation testing. I care about clean architecture, performance, and developer experience, and I enjoy turning real‑world problems into simple, scalable solutions for web and mobile.`;

export const ABOUT_TEXT = `I am a versatile engineer with hands‑on experience delivering web and mobile applications for clients since 2023. My toolkit includes JavaScript, C++, and Python; React and React Native for the frontend; Node.js and Express on the backend; Tailwind CSS for UI; MongoDB for data; and Playwright and Postman for automated and API testing. At COMSATS (BS Software Engineering, 7th semester), I deepen fundamentals—OOP, DSA, and API design—and apply them on real projects like an e‑commerce app (SwiftCart), a fitness platform, and my portfolio. I follow the SDLC from requirements to deployment (Vercel/Supabase), practice modular design and reusable components, profile performance, and collaborate using Git/GitHub and agile workflows. I value clear communication, thoughtful UX, and continuous learning, and I enjoy exploring new JavaScript tools and contributing on GitHub.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
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
    title: "Swift Cart",
    image: project1,
    description:
      "A fully functional shoes store app with features like product listing, shopping cart, and user authentication.",
    technologies: [ "React native", "Node.js", "supa base"],
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
  {
    title: "Fitness app",
    image: project4,
    description:
      "A fitness app designed to help users achieve their health goals without the need for a personal trainer. It provides guided workouts, progress tracking, and personalized plans, making fitness accessible and cost-effective.",
    technologies: ["React native","context api","Rest Api"],
  },
  {
    title: "Internship Portal",
    image: project5,
    description:
      "A MERN internship portal where students can find and apply for internships, companies post/manage jobs, with auth, admin dashboard, and real-time chat.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React", "Redux", "Socket.io"],
    link: "https://job-portal-mern-stack-project-production.up.railway.app/",
  imageSize: 220,
  },
];

export const CONTACT = {
  address: "85A.New Canal Housing Scheme  , Lahore, Pakistan ",
  phoneNo: "03344984973 ",
  email: "areebzakir1114@gamil.com",
};