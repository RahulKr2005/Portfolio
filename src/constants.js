// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// SVG Data URIs for Cisco & Linux
const linuxLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23FCC624' d='M224 0C100.3 0 0 100.3 0 224c0 86.8 52 161.5 126.8 195.4C118 436.4 104 466.8 104 480c0 17.7 14.3 32 32 32h176c17.7 0 32-14.3 32-32 0-13.2-14-43.6-22.8-60.6C396 385.5 448 310.8 448 224 448 100.3 347.7 0 224 0zm0 416c-106 0-192-86-192-192S118 32 224 32s192 86 192 192-86 192-192 192z'/%3E%3C/svg%3E";

const ciscoLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2300BCEB' d='M2 13h1.5v4H2zm3-3h1.5v7H5zm3-3h1.5v10H8zm3-3h1.5v13H11zm3 3h1.5v10H14zm3 3h1.5v7H17zm3 3h1.5v4H20z'/%3E%3C/svg%3E";

export const bioMessage = "I am a passionate Full-Stack Developer and aspiring DevOps Engineer, building scalable web applications with modern frontend interfaces, robust backend architectures, and automated deployment pipelines.";

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Linux', logo: linuxLogo },
      { name: 'Cisco', logo: ciscoLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const ProjectsInfo = [
  {
    id: 1,
    title: "Advanced Modern Calculator",
    description: "Responsive web-based calculator with basic & scientific calculations, calculation history, complete keyboard shortcuts, dark/light theme switching, and memory recall operations.",
    tags: ["JavaScript", "HTML5", "CSS3", "Scientific Math", "Responsive UI"],
    category: "Frontend",
    github: "https://github.com/RahulKr2005/Calculator",
    demo: "https://usecalculatorapp.netlify.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management Application",
    description: "Complete task and workflow management application with user authentication, dynamic CRUD functionality, priority tagging (High, Medium, Low), search, and progress tracking.",
    tags: ["JavaScript", "HTML5", "CSS3", "CRUD", "Workflow Management"],
    category: "Full Stack",
    github: "https://github.com/RahulKr2005/task-manager",
    demo: "https://addyourtaskapp.netlify.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Neon Glow Tic-Tac-Toe Game",
    description: "Cyberpunk neon-themed interactive Tic-Tac-Toe game featuring glowing animations, two-player local gameplay, live win-streak tracking, and winning line highlights.",
    tags: ["JavaScript", "CSS Animations", "Game Logic", "Interactive UI"],
    category: "Frontend",
    github: "https://github.com/RahulKr2005/ticktacktoe",
    demo: "https://freetictacgame.netlify.app/",
    featured: true,
  },
];

export const EducationInfo = [
  {
    id: 1,
    institution: "ABES Engineering College",
    location: "Ghaziabad, Uttar Pradesh, India",
    degree: "B.Tech in Computer Science and Engineering (Data Science)",
    duration: "2024 - 2028",
    description: "Undergraduate engineering program in Computer Science & Engineering with core focus on Full-Stack Development and DevOps methodologies. Actively studying data structures, algorithms, cloud computing, CI/CD pipelines, containerization, and scalable web architectures.",
    highlights: ["Full-Stack Web Development", "DevOps & CI/CD", "Cloud Computing & Linux", "Data Structures & Algorithms", "Database Management"],
  },
];


