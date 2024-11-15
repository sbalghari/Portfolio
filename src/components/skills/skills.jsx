import SkillCardWithAnimation from "./SkillCardWithAnimation.jsx";
import { skillsData } from "../../data/index.js";

function SkillsSection() {
  return (
    <section className="p-2 sm:p-4 md:p-6 lg:p-12 bg-transparent dark:bg-transparent font-sans">
      <header className="flex flex-col items-center text-center mb-10">
        <h2 className="text-4xl font-bold text-primary dark:text-primary py-2">
          My Skills
        </h2>
        <p className="text-lg text-lightText dark:text-darkText">
          These are my skills, I&apos;ve been working on for the past 2 years.
        </p>
      </header>
      <div className="p-2 flex justify-center">
        <div className="mb-8 grid gap-6 lg:gap-12 justify-items-center w-full max-w-screen-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(450px,1fr))]">
          {Object.entries(skillsData).map(([key, skills]) => (
            <SkillCardWithAnimation key={key} title={key} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
