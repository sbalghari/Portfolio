import HeaderSection from "./header";
import FooterSection from "./footer";
import SkillsSection from "./sections/skills";
import AboutSection from "./sections/about_me";
import HomeSection from "./sections/home";
import ProjectsSection from "./sections/projects";
import ResumeSection from "./sections/resume";

import "./index.css";

function App() {
  return (
    <>
      <HeaderSection />
      <HomeSection />
      <AboutSection />
      <ResumeSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </>
  );
}

export default App;
