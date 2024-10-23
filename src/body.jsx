import FooterSection from './sections/footer'
import HeaderSection from './sections/header'
import HomeSection from './sections/home'
import AboutMeSection from './sections/about_me'
import ProjectsSection from './sections/projects'
import ResumeSection from './sections/resume'

function Body() {
  
    return (
        <>
        <HeaderSection/>
        <HomeSection/>
        <AboutMeSection/>
        <ProjectsSection/>
        <ResumeSection/>
        <FooterSection/>
        </>
    )
  }
  
  export default Body