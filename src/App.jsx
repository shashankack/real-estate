import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Agents from "./pages/Agents";

import { projectsData, videosData } from "./assets/data";

import Projects from "./sections/ProjectsSection";

import Navbar from "./components/Navbar";
import ProjectInternal from "./pages/ProjectInternal";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects data={projectsData} />} />
      <Route path="/projects/:project-name" element={<ProjectInternal />} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#c36247",
      },
      background: {
        default: "#ffffff",
      },
      text: {
        primary: "#000000",
      },
      custom: {
        black: "#231F20",
        white: "#fff",
        orange: "#c36247",
        green: "#66785E",
        grey: "#f5f5f5",
      },
    },
  });

  return (
    <>
      <video src={videosData.intro} style={{ display: "none" }} />

      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Layout />
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
