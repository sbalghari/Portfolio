import { projectsData } from "../../data/projects_data.js";
import ProjectCard from "./projects_card.jsx";

function ProjectsSection() {
    return (
        <section className="p-2 sm:p-4 md:p-6 lg:p-12 bg-background dark:bg-darkBackground font-sans">
            <div className="flex justify-center mb-10">
                <p className="relative p-4 inline-block ">
                    <span className="flex justify-center text-4xl font-bold text-primary dark:text-primary py-2">
                        My Projects
                    </span>
                    <span className="flex justify-center text-lg text-lightText dark:text-darkText py-0">
                        These are my projects, I&apos;ve built to practice and learn new things.
                    </span>
                </p>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:row-span-2 md:flex-wrap md:w-96  gap-2 mb-2 sm:gap-4 sm:mb-6 md:gap-6 sm:md-6 lg:gap-12 lg:mb-12">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} data={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
