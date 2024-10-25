import { useEffect } from "react";

function Header() {
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

  return (
    <header className="text-gray-900 dark:text-gray-300 bg-white hover:cursor-grab dark:bg-gray-800 body-font">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center bg-transparent">
        <h2 className="text-2xl text-gray-900 dark:text-white font-extrabold">
          Saifullah
        </h2>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center h-5 bg-transparent">
          <a className="mr-5 hover:text-white" href="/home">
            Home
          </a>
          <a className="mr-5 hover:text-white">About Me</a>
          <a className="mr-5 hover:text-white">Resume</a>
          <a className="mr-5 hover:text-white">My Skills</a>
          <a className="mr-5 hover:text-white">Projects</a>
        </nav>
        <div className="flex flex-col justify-center ml-3">
          <input
            type="checkbox"
            name="light-switch"
            className="light-switch sr-only"
            id="light-switch" // Added ID here
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
      </div>
    </header>
  );
}

export default Header;
