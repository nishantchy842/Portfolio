
import { 
  frontend,
  reactjs,
  backend,
  fullstack,
  html,
  css,
  javascript,
  nodejs,
  tailwind,
  typescript,
  redux,
  git,
  mongodb,
  prasadi,
  ncit

} from "../assets";


const services = [
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "React.js Developer",
      icon: reactjs,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];

  const skills = [
    {
      title: "React.js Developer",
      icon: reactjs,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Understanding of modern javascript, ES6",
        "Knowledge of UI libraries like Material UI, Ant design etc",
        "Uderstanding of performance issues, side effects and optimization and memorization techniques using react hooks such as useCallback, useMemo",
        "Formik and Yup for validation",
        "Data fetching -> axios, image upload..",
        "Auth, headers, token, jwt..",
        "Solid understanding of state management libraries such as redux and its middlewares like loggers and persist",
        "Real time application using socket.io"
      ],
    },
    {
      title: "Node.js",
      icon: nodejs,
      iconBg: "#E6DEDD",
      points: [
        "Understanding of server side and architechtures",
        "In-depth knowledge of asynchronous js..",
        "Express, oak, nest",
        "NoSQL abd SQL",
        "Schema, colllections, operatiors Understanding of Mongoose and Mongodb",
        "Error Handling, Backend validation",
        "Understanding of HTTP calls, REST API",
        "Encyption using Bcrypt",
        "Building middleware",
        "Multure-> file upload",
        "Real time-> Socket.io"
      ],
    },
    {
      title: "Prasadi Academy",
      icon: prasadi,
      iconBg: "#383E56",
      date: "2016 - 2018",
      points: [
        "+2 Science Stream (Biology and Math)",
      ],
    },
    {
      title: "Nepal College of information Techonology",
      icon: ncit,
      iconBg: "#E6DEDD",
      date: "2018 - Present",
      points: [
        "Bachelor in Computer Engineering",
      ],
    },
  ];
  export {services, technologies,skills}