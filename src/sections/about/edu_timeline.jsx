
const Timeline = () => {
    return (
      <ol className="items-center sm:flex">
        {[
          {
            name: "High School - Grade: A",
            year: "March 2020 - Dec 2022",
            description: "I completed high school from APSACS, Skardu.",
          },
          {
            name: "College",
            year: "March 2023 - Present",
            description: "I am currently a college student of APSACS, Skardu.",
          },
          {
            name: "Online Learning",
            year: "April 2022 - Present",
            description: "Learning AI/ML from websites like w3school, Khan Academy, YouTube, etc.",
          },
        ].map((item, index) => (
          <li key={index} className="relative mb-6 sm:mb-0 bg-transparent dark:bg-transparent">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-secondary shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-primary dark:text-primary">{item.name}</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.year}
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    );
  };
  
  export default Timeline;