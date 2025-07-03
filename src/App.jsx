import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material";

import { projectsData } from "./assets/data";

import Projects from "./sections/Projects";

import Navbar from "./components/Navbar";
import ProjectInternal from "./pages/ProjectInternal";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects data={projectsData} />} />
      <Route path="/projects/:project-name" element={<ProjectInternal />} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/contact" element={<div>Contact</div>} />
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
        black: "#000",
        white: "#fff",
        orange: "#c36247",
        grey: "#f5f5f5",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Layout />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
