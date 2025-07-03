import { projectsData } from "../assets/data";
import Intro from "../components/Intro";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

const Home = () => {
  return (
    <>
      <Intro NextComponent={Hero} />
      <Projects data={projectsData} />
      <About />
    </>
  );
};

export default Home;
