import HeaderSection from "./header";
import FooterSection from "./footer";
import SkillsSection from "./sections/skills/skills";
import AboutSection from "./sections/about/about_me";
import HomeSection from "./sections/home/home";
import ProjectsSection from "./sections/projects/projects";

import "./index.css";

function App() {
  return (
    <>
      <HeaderSection />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </>
  );
}

export default App;
