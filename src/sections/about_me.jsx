import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function AboutSection() {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <p>Welcome! I’m a professional with a passion for ... (Your about info here)</p>;
      case "education":
        return (
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {educationData.map((item, index) => (
              <motion.li
                key={index}
                className="mb-10 ml-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {item.time}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
              </motion.li>
            ))}
          </ol>
        );
      case "experience":
        return (
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {experienceData.map((item, index) => (
              <motion.li
                key={index}
                className="mb-10 ml-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {item.time}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
              </motion.li>
            ))}
          </ol>
        );
      case "contact":
        return <p>Feel free to reach out... (Your contact info here)</p>;
      default:
        return null;
    }
  };

  const educationData = [
    {
      time: "March 2014 - Dec 2021",
      title: "School",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid earum...",
    },
    {
      time: "March 2021 - April 2022",
      title: "High School",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      time: "April 2022 - Present",
      title: "College",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
  ];

  const experienceData = [
    {
      time: "2022 - Present",
      title: "Project Development Experience",
      description: "Worked on various projects, including AI bots, web applications, and CLI tools, to build technical skills and expand knowledge in software development.",
    },
  ];

  return (
    <section className="h-screen bg-background dark:bg-darkBackground font-sans">
      {/* Heading with Fade-In Animation */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="relative p-2 inline-block">
          <span className="relative z-10 text-4xl font-bold text-gray-800 dark:text-gray-200">
            About Me
          </span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"></span>
        </p>
      </motion.div>
      
      {/* Responsive Tabs with Animation */}
      <div className="flex justify-center space-x-2 md:space-x-4 mb-6">
        {["About Me", "Education", "Experience", "Contact Me"].map((tab, idx) => (
          <motion.button
            key={idx}
            onClick={() => setActiveTab(tab.toLowerCase().replace(" ", ""))}
            className={`px-2 py-1 md:px-4 md:py-2 font-semibold rounded-lg text-sm md:text-base
              ${activeTab === tab.toLowerCase().replace(" ", "") 
                ? "bg-purple-600 text-white" 
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"}
              hover:bg-purple-700 hover:text-white transition duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab}
          </motion.button>
        ))}
      </div>
      
      {/* Content with Tab Switch Animation */}
      <div className="flex justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="max-w-2xl p-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AboutSection;
