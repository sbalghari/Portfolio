// import { projectsData } from "../../data/projects_data.js";
// import ProjectsCard from "./projects_card.jsx";

function ProjectsSection() {
  return (
    <section className="p-4 lg:p-12 h-auto w-auto bg-background dark:bg-darkBackground font-sans">
      <div className="flex justify-center mb-10">
        <p className="relative p-4 inline-block ">
          <span className="flex justify-center text-4xl font-bold text-primary dark:text-primary py-2">
            My Projects
          </span>
          <span className="flex justify-center text-lg text-lightText dark:text-darkText py-0">
            These are my project, I&apos;ve built to practice and learn new things.
            </span>
        </p>
      </div>
      <div className="justify-items-center">
        
      </div>
    </section>
  );
}

export default ProjectsSection;
  