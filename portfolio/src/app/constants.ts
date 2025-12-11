
import { ContactInfo, Education, Project, Skill } from "./types";

export const CONTACT_INFO: ContactInfo = {
  phone: "+250791765855",
  email: "tetadebz16@gmail.com",
  linkedin: "https://linkedin.com/in/deborah-teta-202b60303/",
  github: "https://github.com/Deborah-Teta",
  location: "Rwanda"
};

export const PROFILE_SUMMARY = `Motivated frontend developer with hands-on experience in building responsive web applications using modern technologies. Proficient in HTML5, JavaScript, TypeScript, React, and Next.js, with a strong foundation in component-based architecture and UI/UX principles. Demonstrated ability to transform designs into interactive, user-friendly interfaces while maintaining clean, maintainable code. Currently pursuing a Bachelor of Science in Information Systems at the University of Rwanda (Expected 2027).`;

export const PROJECTS: Project[] = [
  {
    title: "Special Blog",
    description: "A dynamic blog platform demonstrating modern web capabilities. Built with a focus on performance and SEO.",
    link: "https://my-pahse-two-cpastone.vercel.app/",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    category: "Blog",
    image: "/photo/blog.png" 
  },
  {
    title: "Static Ecommerce",
    description: "A responsive e-commerce interface showcasing product listings and shopping cart UI patterns.",
    link: "https://static-ecommerce-xi.vercel.app/",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    category: "E-commerce",
    image: "/photo/ecommerce.png"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website design to showcase skills and projects.",
    link: "https://my-portfolio-tau-lime.vercel.app/",
    tags: ["HTML5", "JavaScript", "Tailwind CSS"],
    category: "Web App",
    image: "/photo/portifolio.png"
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "University of Rwanda",
    degree: "Bachelor of Science in Information Systems",
    period: "2023 - 2027",
    description: "Currently pursuing degree."
  },
  {
    institution: "She Can Code | Igire Rwanda Organization",
    degree: "Professional Certificate as an Advanced Front-End Developer",
    period: "Completed",
    description: "Intensive training in modern frontend technologies and best practices."
  }
];

export const SKILLS: Skill[] = [
  { name: "React", level: 90, category: "Technical" },
  { name: "Next.js", level: 85, category: "Technical" },
  { name: "TypeScript", level: 80, category: "Technical" },
  { name: "JavaScript", level: 90, category: "Technical" },
  { name: "Tailwind CSS", level: 95, category: "Technical" },
  { name: "HTML5 & CSS3", level: 95, category: "Technical" },
  { name: "Web Design", level: 85, category: "Design" },
  { name: "Ms Excel & PowerPoint", level: 80, category: "Tools" },
];

export const RESUME_CONTEXT_FOR_AI = `
Name: Deborah Teta
Role: Frontend Developer
Contact: ${CONTACT_INFO.phone}, ${CONTACT_INFO.email}
LinkedIn: ${CONTACT_INFO.linkedin}
GitHub: ${CONTACT_INFO.github}

Profile:
${PROFILE_SUMMARY}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.institution} (${e.period})`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Stack: ${p.tags.join(', ')}) - Link: ${p.link}`).join('\n')}
`;
