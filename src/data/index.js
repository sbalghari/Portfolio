// Projects Screenshots
import screenshot1 from "../assets/screenshots/serp.png";
import screenshot2 from "../assets/screenshots/calc.png";
import screenshot3 from "../assets/screenshots/libmngr.png";
import screenshot4 from "../assets/screenshots/portfolio.png";

// Skills Icons
import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/js.png";
import reactIcon from "../assets/icons/react.png";
import tailwindIcon from "../assets/icons/tailwindcss.png";
import bootstrapIcon from "../assets/icons/bootstrap.png";
import pythonIcon from "../assets/icons/python.png";
import cIcon from "../assets/icons/c.png";
import cppIcon from "../assets/icons/cpp.png";
import nodejsIcon from "../assets/icons/node.png";
import mysqlIcon from "../assets/icons/mysql.png";
import mongodbIcon from "../assets/icons/mongodb.png";
import tkinterIcon from "../assets/icons/ctk.png";
import pandasIcon from "../assets/icons/pandas.png";
import numpyIcon from "../assets/icons/numpy.png";
import matplotlibIcon from "../assets/icons/matplotlib.png";
import gitIcon from "../assets/icons/git.png";
import githubIcon from "../assets/icons/github.png";
import linuxIcon from "../assets/icons/linux.png";
import bashIcon from "../assets/icons/bash.png";
import vscodeIcon from "../assets/icons/vscode.png";
import jupyter from "../assets/icons/jupyter.png";

// Profile Picture
import ProfilePic from "../assets/pic1.png";

// Social Icons
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";


// About
export const About = {
  name: "Saifullah Balghari",
  titles: {
    1: "a Full-Stack Developer",
    2: "a College Student",
    3: "an Aspiring ML Engineer",
  },
  description:
    "Hi, I am Saifullah Balghari based in Skardu, GB, Pakistan. I am currently studying Computer Science from Army Public School and College System, Skardu. I've learned various programming languages online. I have a strong foundation in Python and it's simplicity and extensive libraries, makes it my favorite. I also know C++, JavaScript, SQL, etc, and have an intermediate knowledge in CS concepts like DSA, DB, OS, and VC.",
  picture: ProfilePic,
};

// Socials Links
export const socialLinks = [
  {
    icon: FaGithub,
    link: "https://github.com/Saifullah-Balghari",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/saifullah-balghari/",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/saifullahbalghari/",
  },
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/Saifullah.BlghaRi/",
  },
];

// Education
export const educationData = [
  {
    institution: "APSACS, Skardu",
    name: "SSC - High School",
    year: "2020-2022",
    description:
      "I've got the secondary school certificate on June 2022 with a grade of A and a marks of 776 out of 1100.",
  },
  {
    institution: "APSACS, Skardu",
    name: "HSSC - College",
    year: "2022-Now",
    description: "I'am pursuing the higher secondary school certificate.",
  },
  {
    institution: "Self Taught",
    name: "Online Learning",
    year: "2021-Now",
    description:
      "I am currently learning Python, it's AI related Libraries and Web Development from online sources.",
  },
];

// Experience
export const experienceData = [
  {
    company: "Project Development",
    year: "2022-Now",
    position: "Self Employed",
    description:
      "I am building various GUI,CLI and Web Applications using Python, C++, ReactJS, TailwindCSS and Others.",
  },
];

// Projects
export const projectsData = [
  {
    Name: "SERP-Manager",
    Description:
      "Student Examination Results and Paper Manager is a GUI application...",
    Technologies_used: "Python, SQLite, Customtkinter",
    screenshot: screenshot1,
    Link: "https://github.com/Saifullah-Balghari/SERP-Manager",
    filter: "Desktop",
  },
  {
    Name: "Calculator",
    Description:
      "A simple GUI application that can perform various arithmetic operations...",
    Technologies_used: "Python, Tkinter",
    screenshot: screenshot2,
    Link: "https://github.com/Saifullah-Balghari/Arithmetic-Calculater",
    filter: "Desktop",
  },
  {
    Name: "Library Manager",
    Description:
      "A simple CLI application made with C++ capable of performing various library operations...",
    Technologies_used: "C++",
    screenshot: screenshot3,
    Link: "https://github.com/Saifullah-Balghari/LibraryManager",
    filter: "Others",
  },
  {
    Name: "Portfolio Website",
    Description: "...",
    Technologies_used: "ReactJS, TailwindCSS, JavaScript",
    screenshot: screenshot4,
    Link: "https://github.com/Saifullah-Balghari/Portfolio",
    filter: "Web",
  },
];

// Skills
export const skillsData = {
  Frontend: [
    { label: "HTML", icon: htmlIcon },
    { label: "CSS", icon: cssIcon },
    { label: "JavaScript", icon: jsIcon },
    { label: "CustomTkinter", icon: tkinterIcon },
    { label: "TailwindCSS", icon: tailwindIcon },
    { label: "React JS", icon: reactIcon },
    { label: "Bootstrap", icon: bootstrapIcon },
  ],
  Backend: [
    { label: "C-Language", icon: cIcon },
    { label: "C++", icon: cppIcon },
    { label: "NodeJS", icon: nodejsIcon },
    { label: "MySQL", icon: mysqlIcon },
    { label: "MongoDB", icon: mongodbIcon },
  ],
  AI: [
    { label: "Python", icon: pythonIcon },
    { label: "Pandas", icon: pandasIcon },
    { label: "Numpy", icon: numpyIcon },
    { label: "Matplotlib", icon: matplotlibIcon },
    { label: "Jupyter Notebook", icon: jupyter },
  ],
  Others: [
    { label: "Git", icon: gitIcon },
    { label: "GitHub", icon: githubIcon },
    { label: "Linux", icon: linuxIcon },
    { label: "Bash", icon: bashIcon },
    { label: "VS Code", icon: vscodeIcon },
  ],
};
