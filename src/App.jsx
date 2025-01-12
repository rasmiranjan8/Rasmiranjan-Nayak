import React from "react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import Certifications from "./components/Certifications";
import Education from "./components/Education";


const App = () => {
  const projects = [
    {
      name: "Sustainable Developement",
      githublink: "https://github.com/rasmiranjan8/sustainableDev.git",
      pic: "./sustainable_dev.png",
      description:
        "Developed a frontend website using React, CSS, HTML, and JavaScript, enabling users to purchase eco-friendly products and promoting environmental sustainability.",
      type: "frontend",
      catagory: "Significant Projects",
      involved: "Team Project",
      used: "IBM Frontend Internship",
    },
    {
      name: "CareSync",
      githublink: "https://github.com/abhijitnaik101/CareSync.git",
      pic: "./caresync.png",
      description:
        "A portfolio website built using React, CSS, and JavaScript, showcasing my skills and experience as a software developer.",
      type: "frontend and backend",
      catagory: "Significant Projects",
      involved: "Team Project",
      used: "SIH 2024",
    },
    {
      name: "Simon Game",
      githublink: "https://github.com/rasmiranjan8",
      pic: "./simon_game.png",
      description:
        "A portfolio website built using React, CSS, and JavaScript, showcasing my skills and experience as a software developer.",
      type: "frontend and backend",
      catagory: "Learning Projects",
      involved: "self project",
    },
    {
      name: "Calculator App",
      githublink: "https://github.com/rasmiranjan8",
      pic: "./calculator.jpeg",
      description:
        "A portfolio website built using React, CSS, and JavaScript, showcasing my skills and experience as a software developer.",
      type: "frontend and backend",
      catagory: "Learning Projects",
      involved: "self project",
    },
    {
      name: "ToDo App",
      githublink: "https://github.com/rasmiranjan8",
      pic: "./todo_app.png",
      description:
        "A portfolio website built using React, CSS, and JavaScript, showcasing my skills and experience as a software developer.",
      type: "frontend",
      catagory: "Learning Projects",
      involved: "self project",
    },
  ];

  const skills = [
    {
      name: "HTML",
      level: 95,
      iconClass: "",
    },
    {
      name: "CSS",
      level: 90,
      iconClass: "text-blue-500",
    },
    {
      name: "JavaScript",
      level: 85,
      iconClass: "text-yellow-500",
    },
    {
      name: "React",
      level: 80,
      iconClass: "text-blue-400",
    },
    {
      name: "Node.js",
      level: 75,
      iconClass: "text-green-500",
    },
    {
      name: "Express",
      level: 70,
      iconClass: "text-gray-500",
    },
    {
      name: "MongoDB",
      level: 75,
      iconClass: "text-green-500",
    },
    {
      name: "MySQL",
      level: 70,
      iconClass: "text-blue-500",
    },
    {
      name: "C",
      level: 85,
      iconClass: "text-gray-300",
    },
    {
      name: "C++",
      level: 85,
      iconClass: "text-blue-300",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <NavBar />
      <Welcome />
      <AboutMe />
      <Education />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Certifications />
      <Contact />
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Rasmiranjan Nayak. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
