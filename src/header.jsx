import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import homeIcon from "./assets/ui_svg/home.svg";
import aboutIcon from "./assets/ui_svg/about.svg";
import skillsIcon from "./assets/ui_svg/skills.svg";
import projectsIcon from "./assets/ui_svg/projects.svg";

function Header({ onNavigate, homeRef, aboutRef, skillsRef, projectsRef }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Light/Dark Mode Toggle Logic
  useEffect(() => {
    const lightSwitches = document.querySelectorAll(".light-switch");
    const darkMode = localStorage.getItem("dark-mode") === "true";

    lightSwitches.forEach((lightSwitch) => {
      lightSwitch.checked = darkMode;
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });

    lightSwitches.forEach((lightSwitch, i) => {
      lightSwitch.addEventListener("change", () => {
        const { checked } = lightSwitch;
        lightSwitches.forEach((el, n) => {
          if (n !== i) {
            el.checked = checked;
          }
        });
        if (checked) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("dark-mode", "true");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("dark-mode", "false");
        }
      });
    });
  }, []);

  // Sidebar Toggle Logic
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Highlights the active section's nav item on lg and xl
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = [homeRef, aboutRef, skillsRef, projectsRef];
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [homeRef, aboutRef, skillsRef, projectsRef]);

  return (
    <header className="sticky top-0 md:top-2 z-50 w-screen md:w-fit flex backdrop-blur-md shadow-md justify-end md:justify-self-center h-fit text-lightText dark:text-darkText font-sans body-font md:rounded-lg">
      {/* For xs, sm and md */}
      <div className="md:hidden flex py-1 ">
        {/* Light/Dark Mode Toggle */}
        <div className="flex flex-col justify-end m-1">
          <input
            type="checkbox"
            name="light-switch"
            className="light-switch sr-only"
            id="light-switch"
          />
          <label className="relative cursor-pointer p-2" htmlFor="light-switch">
            <svg
              className="dark:hidden"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-slate-300"
                d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
              />
              <path
                className="fill-slate-400"
                d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
              />
            </svg>
            <svg
              className="hidden dark:block"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-slate-400"
                d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
              />
              <path
                className="fill-slate-500"
                d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
              />
            </svg>
            <span className="sr-only">Switch to light / dark version</span>
          </label>
        </div>
        {/* Sidebar Toggle */}
        <button
          className="flex justify-center items-center w-10 ml-2 "
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {/* Sidebar */}
        <div
          className={`fixed left-0 w-52 inset-y-1 rounded-lg bg-transparent dark:bg-transparent transform ${
            isSidebarOpen ? "translate-x-2" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out  p-0 h-10 w-56`}
        >
          {/* Sidebar Nav Items */}
          <div className="flex flex-row-reverse ml-2 h-10 w-44">
            <nav className="self-center flex space-x-6">
              <a
                onClick={() => onNavigate(homeRef)}
                className="text-lightText dark:text-darkText flex items-center text-lg font-semibold"
              >
                <img className="w-8" src={homeIcon} />
              </a>
              <a
                onClick={() => onNavigate(aboutRef)}
                className="text-lightText dark:text-darkText flex items-center text-lg font-semibold"
              >
                <img className="w-8" src={aboutIcon} />
              </a>
              <a
                onClick={() => onNavigate(skillsRef)}
                className="text-lightText dark:text-darkText flex items-center text-lg font-semibold"
              >
                <img className="w-8" src={skillsIcon} />
              </a>
              <a
                onClick={() => onNavigate(projectsRef)}
                className="text-lightText dark:text-darkText flex items-center text-lg font-semibold"
              >
                <img className="w-8" src={projectsIcon} />
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* For lg and xl */}
      <div className="hidden md:flex container flex-wrap mx-2 flex-col md:flex-row items-center p-2 bg-transparent">
        {/* Button */}
        <div className="pr-4">
          <a href="https://github.com/Saifullah-Balghari">
            <button
              type="button"
              className="text-darkText bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-xl text-sm px-2 py-1 text-center me-0 mb-0"
            >
              GitHub Profile
            </button>
          </a>
        </div>
        <div className="pr-20">
          <input
            type="checkbox"
            name="light-switch"
            className="light-switch sr-only"
            id="light-switch"
          />
          <label className="cursor-pointer" htmlFor="light-switch">
            <svg
              className="dark:hidden"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-slate-300"
                d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
              />
              <path
                className="fill-slate-400"
                d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
              />
            </svg>
            <svg
              className="hidden dark:block"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-slate-400"
                d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
              />
              <path
                className="fill-slate-500"
                d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
              />
            </svg>
            <span className="sr-only">Switch to light / dark version</span>
          </label>
        </div>
        {/* Nav Items */}
        <nav className="ml-auto flex flex-wrap justify-end h-6 bg-transparent text-md font-medium text-lightText dark:text-darkText">
          <a
            className={`relative mr-5 group hover:text-purple-500 hover:cursor-pointer ${
              activeSection === "home" ? "text-purple-500" : ""
            }`}
            onClick={() => onNavigate(homeRef)}
          >
            Home
            <span
              className={`block h-0.5 bg-purple-500 transition-all duration-300 ${
                activeSection === "home" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </a>
          <a
            className={`relative mr-5 group hover:text-purple-500 hover:cursor-pointer ${
              activeSection === "about" ? "text-purple-500" : ""
            }`}
            onClick={() => onNavigate(aboutRef)}
          >
            About Me
            <span
              className={`block h-0.5 bg-purple-500 transition-all duration-300 ${
                activeSection === "about" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </a>
          <a
            className={`relative mr-5 group hover:text-purple-500 hover:cursor-pointer ${
              activeSection === "skills" ? "text-purple-500" : ""
            }`}
            onClick={() => onNavigate(skillsRef)}
          >
            My Skills
            <span
              className={`block h-0.5 bg-purple-500 transition-all duration-300 ${
                activeSection === "skills" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </a>
          <a
            className={`relative group hover:text-purple-500 hover:cursor-pointer ${
              activeSection === "projects" ? "text-purple-500" : ""
            }`}
            onClick={() => onNavigate(projectsRef)}
          >
            Projects
            <span
              className={`block h-0.5 bg-purple-500 transition-all duration-300 ${
                activeSection === "projects" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </a>
        </nav>
      </div>
    </header>
  );
}

// Props Validations
Header.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  homeRef: PropTypes.oneOfType([
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  aboutRef: PropTypes.oneOfType([
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  skillsRef: PropTypes.oneOfType([
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  projectsRef: PropTypes.oneOfType([
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default Header;
