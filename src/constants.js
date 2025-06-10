// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.jpg';
import agcLogo from './assets/company_logo/agc_logo.jpg';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.jpg';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.webp';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
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
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Development Using MERN Internship",
      company: "CDAC Patna",
      date: "March 2025 - April 2025",
      desc: "Completed a Full Stack Development Internship using the MERN stack (MongoDB, Express.js, React.js, Node.js). Developed EcoBeats, a modern music streaming platform where users can explore, play, and manage songs. Built secure user authentication, playlist creation, and dynamic music player features. The frontend was developed using React and Tailwind CSS, and the backend APIs were built using Node.js and Express. Used MongoDB Atlas for data storage, Postman for API testing, and deployed the project on Render. Managed the codebase with Git and GitHub.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "JQuary",
        "React JS",
        "MySql",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Express JS"
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Cyber Security Intern",
      company: "CDAC Noida",
      date: "December 2024 - January 2025",
      desc: "Completed a Cyber Security internship at CDAC Noida, where I learned about network security, ethical hacking, system vulnerabilities, and threat analysis. Gained hands-on experience with tools like Wireshark, Nmap, and Metasploit. Worked on identifying security risks, performing penetration testing, and implementing basic security protocols to protect systems and data. Also explored cybersecurity policies, firewalls, and intrusion detection systems.",
      skills: [
        "Ethical Hacking", 
        "Penetration Testing", 
        "vulnerability Assessments", 
        "Incident Response",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontent Intern",
      company: "Bharat Intern",
      date: "October 2023 - Novenber 2023",
      desc: "Completed a Frontend Development Internship where I built responsive and user-friendly Netflix Homepages using HTML, CSS. And Temperature Converter using HTML, CSS, and JavaScript .",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: bsaLogo,
      school: "Mahatma Gandhi Central University, Motihari",
      // date: "May 2022 - May 2026",
      // grade: "7.81 CGPA",
      desc: "I have pursuing my Bachelor of Technology (B.Tech) in Computer Science from Mahatma Gandhi Central University, Motihari. I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge.",
      degree: "Bachelor of Technology in Computer Science - B.Tech",
    },
    {
      id: 2,
      img: glaLogo,
      school: "Rajpur +2 High School, Banka",
      // date: "Apr 2017 - March 2018",
      // grade: "78%",
      desc: "I completed my class 12 education from Rajpur +2 High School, Banka, under the BSEB board, where I studied Physics, Chemistry, and Mathematics (PCM) with Biology.",
      degree: "BSEB(XII) - PCM with Biology",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Paramount Academy, Munger",
      // date: "Apr 2015 - March 2016",
      // grade: "87.5%",
      desc: "I completed my class 10 education from Paramount Academy, Munger, under the CBSE board, where I studied Hindi, Engilsh, Mathematics, Science and Social Sience.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    
    {
      id: 0,
      title: "Netflix Homepage",
      description:
        "Designed and developed a clone of the Netflix homepage using only HTML and CSS. This project replicates the original layout, including a top navigation bar, banner section, featured content rows, and a footer. The focus was on clean UI design, modern styling, and cross-device responsiveness.",
      image: csprepLogo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/vishalkumar4sep/Netflix_Homepage",
      
    },
    {
      id: 1,
      title: "Temperature Converter",
      description:
        "Built a simple and interactive temperature converter that allows users to convert values between Celsius, Fahrenheit, and Kelvin. The application features a clean UI, real-time conversion logic using JavaScript.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/vishalkumar4sep/temperature_calculator",
    },
    {
      id: 2,
      title: "Tic-Tac-Toe",
      description:
        "Developed a two-player Tic Tac Toe game with a responsive and interactive interface. The game includes real-time win detection, draw logic, and the ability to reset the board. All logic is handled using JavaScript.",
      image: movierecLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/vishalkumar4sep/Tic-Tac-Toe",
    },
    {
      id: 3,
      title: "Rock-Paper-Scissor",
      description:
        "Created an interactive Rock Paper Scissors game where the user plays against the computer. The game features real-time score tracking, random computer choice generation, and result display with smooth UI interactions.",
      image: npmLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/vishalkumar4sep/Rock-Paper-Scissor",
    },
    {
      id: 4,
      title: "EchoBeats",
      description:
        "EcoBeast is a full-stack music streaming platform where users can browse, stream, and manage music tracks. Features include secure user authentication, dynamic playlist management, track upload (admin), and a responsive UI for seamless user experience. Built with the MERN stack and styled using Tailwind CSS for a modern, mobile-friendly interface.",
      image: taskremLogo,
      tags: ["JavaScript", "React JS", "Node.js", "MongoDB", "Express.js", "HTML", "CSS"],
      github: "https://github.com/vishalkumar4sep/EchoBeats",
      webapp: "https://echobeats-14jw.onrender.com/",
    },
    {
      id: 5,
      title: "e-banking",
      description:
        "Built a secure and responsive E-Banking system as a mini project using the MERN stack. Core features include user authentication, balance display, deposit/withdrawal functionality, fund transfers, and transaction history. The project emphasizes a clean UI, real-time updates, and secure API integration between frontend and backend.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/vishalkumar4sep/e-banking",
      webapp: "https://e-banking-yn22.onrender.com/",
    },
  ];  
