import {
  mobile,
  backend,
  fullstack,
  web,
  javascript,
  python,
  html,
  css,
  reactjs,
  java,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  csharp,
  cpp,
  unity,
  sql,
  projectfour,
  redbird,
  uwindsor,
  redagency,
  fouragency,
  pathfind,
  me,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "cv",
    title: "Download CV",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: fullstack,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
 // {
   // name: "MongoDB",
    //icon: mongodb,
  //},
  //{
  //  name: "git",
  //  icon: git,
  //},
  //{
   // name: "figma",
   // icon: figma,
 // },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "unity",
    icon: unity,
  },

];

const experiences = [

  {
    title: "Computer Science (Student)",
    company_name: "The University of Windsor",
    icon: uwindsor,
    iconBg: "#383E56",
    date: "Sep 2018 - Dec 2022",
    points: [
      "Achieved a bachelor's degree in Computer Science and Minor in IT (Honours).",
      "Relevant Courses: Data Structures and algorithms, Web development, World Wide Web Information Systems, Object Oriented Software Analysis and Design, Agile Software Development, and Advanced & practical Database Systems.",
    ],
  },

  {
    title: "Full Stack Developer",
    company_name: "ProjectFour",
    icon: projectfour,
    iconBg: "#383E56",
    date: "March 2020 - Oct 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Co-Founder/Developer",
    company_name: "RedBirdDigital",
    icon: redbird,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Present",
    points: [
      "Founded an agency that specializes in providing custom-made web design and development solutions to all industries.",
      "Worked in a team of developers in delivering numerous complex projects based using MERN Stack to clients based in real estate, construction, food delivery, and more.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Showcased excellence in marketing, advertising, and client relations by doubling the client base for 3 consecutive months. ",
    ],
  },
  {
    title: "Undergraduate Teacher Assistant",
    company_name: "The University of Windsor",
    icon: uwindsor,
    iconBg: "#383E56",
    date: "Jan 2022 - Apr 2022",
    points: [
      "Teacher assistant for Computer Concepts - End-Users.",
      "Performed all assistant teaching duties, including mentoring, grading assignments and tests, providing feedback and guidance, and regular data entry tasks on students grades.",
    ],
  },
];

const myWords = [
  {
    text: "Here you can download my СV by clicking on Download button.",
    name: "Youssef Houri",
    designation: "The owner",
    company: "",
    image: me,
  },
];

const projects = [
  {
    name: "RedBirdDigital",
    description:
      "full-service digital media and marketing company that offers our clients original strategies that lead to flourishing and lucrative businesses.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: redagency,
    source_code_link: "https://www.redbirddigital.co/",
  },
  {
    name: "ProjectFour",
    description:
      "Built a fully functional and responsive website made by using tools and technologies such as WordPress, HTML, CSS and JS. Serves as a business page for a web development agency.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: fouragency,
    source_code_link: "https://projectfour.co/",
  },
  {
    name: "Pathfinding Algorithms using Unity",
    description:
      "Pathfinding visualizer which uses different path finding algorithms and measures their efficiency. The goal was to determine which path finding algorithms were most efficient depending on the environment. The algorithms used in this project are: DFS, BFS, DIJKSTRA’S, and A*.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C-Sharp",
        color: "green-text-gradient",
      },
      {
        name: "GitHub",
        color: "pink-text-gradient",
      },
    ],
    image: pathfind,
    source_code_link: "https://github.com/ameenalkaisi/COMP-4990-Project",
  },
];

export { services, technologies, experiences, myWords, projects };
