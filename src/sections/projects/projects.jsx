import { useState } from "react";
import { projectsData } from "../../data/projects.js";
import ProjectCard from "./projects_card.jsx";

function ProjectsSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = selectedCategory === "All"
        ? projectsData
        : projectsData.filter((project) => project.filter === selectedCategory);

    return (
        <section className="p-2 sm:p-4 md:p-6 lg:p-12 bg-transparent dark:bg-transparent font-sans">
            <header className="flex flex-col items-center text-center mb-10">
                <h2 className="text-4xl font-bold text-primary dark:text-primary py-2">
                    My Projects
                </h2>
                <p className="text-lg text-lightText dark:text-darkText">
                    These are my projects, I&apos;ve built to practice and learn new things.
                </p>
            </header>
            <div className="flex justify-center rounded-md my-4" role="group">
                <button
                    type="button"
                    onClick={() => handleCategoryClick("All")}
                    className={`px-4 py-2 text-sm font-medium ${selectedCategory === "All" ? "bg-primary text-white" : "text-gray-900 bg-transparent"} border border-gray-900 rounded-s-lg hover:bg-primary hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-primary focus:text-white dark:border-white dark:text-white dark:hover:bg-primary dark:focus:bg-primary`}
                >
                    All
                </button>
                <button
                    type="button"
                    onClick={() => handleCategoryClick("Web")}
                    className={`px-4 py-2 text-sm font-medium ${selectedCategory === "Web" ? "bg-primary text-white" : "text-gray-900 bg-transparent"} border-t border-b border-gray-900 hover:bg-primary hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-primary focus:text-white dark:border-white dark:text-white dark:hover:bg-primary dark:focus:bg-primary`}
                >
                    Web
                </button>
                <button
                    type="button"
                    onClick={() => handleCategoryClick("Desktop")}
                    className={`px-4 py-2 text-sm font-medium ${selectedCategory === "Desktop" ? "bg-primary text-white" : "text-gray-900 bg-transparent"} border-t border-b border-l border-gray-900 hover:bg-primary hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-primary focus:text-white dark:border-white dark:text-white dark:hover:bg-primary dark:focus:bg-primary`}
                >
                    Desktop
                </button>
                <button
                    type="button"
                    onClick={() => handleCategoryClick("AI/ML")}
                    className={`px-4 py-2 text-sm font-medium ${selectedCategory === "AI/ML" ? "bg-primary text-white" : "text-gray-900 bg-transparent"} border-t border-b border-l border-gray-900 hover:bg-primary hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-primary focus:text-white dark:border-white dark:text-white dark:hover:bg-primary dark:focus:bg-primary`}
                >
                    AI/ML
                </button>
                <button
                    type="button"
                    onClick={() => handleCategoryClick("Others")}
                    className={`px-4 py-2 text-sm font-medium ${selectedCategory === "Others" ? "bg-primary text-white" : "text-gray-900 bg-transparent"} border border-gray-900 rounded-e-lg hover:bg-primary hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-primary focus:text-white dark:border-white dark:text-white dark:hover:bg-primary dark:focus:bg-primary`}
                >
                    Others
                </button>
            </div>
            <div className="flex justify-center mb-8">
                <div className="grid gap-4 md:gap-6 lg:gap-8 p-6 w-full max-w-screen-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] overflow-y-auto max-h-[70vh] relative scrollable-container" style={{ minHeight: "400px" }}>
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <ProjectCard key={index} data={project} />
                        ))
                    ) : (
                        <div className="text-center text-gray-500 dark:text-gray-400 w-full">
                            <p>Currently, there are no projects in this category.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
