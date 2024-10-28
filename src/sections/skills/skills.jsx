import { skillsData } from "./skills_data.js";
import SkillsCard from "./skills_card.jsx";

function SkillsSection() {
  return (
    <section className="h-screen bg-background dark:bg-darkBackground font-sans">
      <div className="flex justify-center mb-10">
        <p className="relative px-2 inline-block ">
          <span className="flex justify-center items-center justify-items-center text-4xl font-bold text-primary dark:text-primary py-2">
            My Skills
          </span>
          <span className="flex justify-center items-center justify-items-center text-lg text-lightText dark:text-darkText py-0">
            These are my skill, I have learnt through various online courses.
            </span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-96 my-12 justify-items-center">
        <SkillsCard title="Frontend Development" skills={skillsData.frontEnd} />
        <SkillsCard title="Backend Development" skills={skillsData.backEnd} />
        <SkillsCard title="Frameworks" skills={skillsData.frameworks} />
        <SkillsCard title="Others" skills={skillsData.others} />
      </div>
    </section>
  );
}

export default SkillsSection;
