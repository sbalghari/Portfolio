function ProjectsSection() {
  return (
    <section className="h-screen bg-background dark:bg-darkBackground font-sans">
      <div className="flex justify-center">
        <p className="relative p-2 inline-block">
          <span className="relative z-10 text-3xl font-semibold text-lightText dark:text-darkText">
            Projects
          </span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"></span>
        </p>
      </div>
    </section>
  );
}
export default ProjectsSection;
