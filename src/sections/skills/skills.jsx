import { skillsData } from "../../data/skills_data.js";
import SkillsCard from "./skills_card.jsx";

function SkillsSection() {
  return (
    <section className="p-2 sm:p-4 md:p-6 lg:p-12 bg-background dark:bg-darkBackground font-sans">
      <div className="flex justify-center mb-10">
        <p className="relative p-4 inline-block ">
          <span className="flex justify-center text-4xl font-bold text-primary dark:text-primary py-2">
            My Skills
          </span>
          <span className="flex justify-center text-lg text-lightText dark:text-darkText py-0">
            These are my skill, I&apos;ve been working on for the past 2 years.
            </span>
        </p>
      </div>
      <div className="justify-items-center md:grid-cols-2">
        <div className="flex justify-center flex-col lg:flex-row gap-2 sm:gap-4 md:gap-6 sm:mb-4 md:mb-6 mb-2 lg:gap-12 lg:mb-12">
          <SkillsCard title="Frontend Development" skills={skillsData.frontEnd} />
          <SkillsCard title="Backend Development" skills={skillsData.backEnd} />
        </div>
        <div className="flex justify-center flex-col lg:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-12 ">
          <SkillsCard title="AI/ML" skills={skillsData.ai} />
          <SkillsCard title="Others" skills={skillsData.others} />
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
