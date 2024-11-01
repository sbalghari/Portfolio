import { projectsData } from "../../data/projects_data.js";
import ProjectCard from "./projects_card.jsx";

function ProjectsSection() {
    return (
        <section className="p-2 sm:p-4 md:p-6 lg:p-12 bg-background dark:bg-darkBackground font-sans">
            <header className="flex flex-col items-center text-center mb-10">
                <h2 className="text-4xl font-bold text-primary dark:text-primary py-2">
                    My Projects
                </h2>
                <p className="text-lg text-lightText dark:text-darkText">
                    These are my projects, I&apos;ve built to practice and learn new things.
                </p>
            </header>
            <div className="flex justify-center mb-8">
                <div className="grid gap-4 md:gap-6 lg:gap-8 p-4 w-full max-w-screen-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] overflow-y-auto max-h-[70vh] relative scrollable-container">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} data={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
