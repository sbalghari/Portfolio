import { useRef } from 'react';
import HeaderSection from "./header";
import FooterSection from "./footer";
import SkillsSection from "./sections/skills/skills";
import AboutSection from "./sections/about/about_me";
import HomeSection from "./sections/home/home";
import ProjectsSection from "./sections/projects/projects";

import "./index.css";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-y-auto max-h-screen w-screen scrollable-container">
      <HeaderSection 
        onNavigate={scrollToSection} 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        skillsRef={skillsRef} 
        projectsRef={projectsRef} 
      />
      <div ref={homeRef} id="home"><HomeSection /></div>
      <div ref={aboutRef} id="about"><AboutSection /></div>
      <div ref={skillsRef} id="skills"><SkillsSection /></div>
      <div ref={projectsRef} id="projects"><ProjectsSection /></div>
      <FooterSection />
    </div>
  );
}

export default App;
