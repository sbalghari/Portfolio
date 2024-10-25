function AboutSection() {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen">
      <div className="flex justify-center">
        <p className="relative p-2 inline-block">
          <span className="relative z-10 text-3xl font-semibold text-gray-900 dark:text-white">
            About Me
          </span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500"></span>
        </p>
      </div>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Hello, World!
          </h2>
          <p className="mb-6 font-normal text-gray-500 md:text-lg dark:text-gray-200">
            Hi! I am Saifullah Balghari, an aspiring AI/ML engineer currently
            studying Computer Science from APSACS skardu. I am really intrested
            in Artificial Intelligence, GPTs, LLMs, etc and how they are
            developed and works.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
