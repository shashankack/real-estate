import { projectsData } from "../assets/data";
import Intro from "../components/Intro";
import AboutSection from "../sections/AboutSection";
import Hero from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";

const Home = () => {
  return (
    <>
      <Intro NextComponent={Hero} />
      <ProjectsSection data={projectsData} />
      <AboutSection />
    </>
  );
};

export default Home;
