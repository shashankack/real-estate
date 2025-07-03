import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";

import { useLocation } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const gridRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !gridRefs.current.includes(el)) {
      gridRefs.current.push(el);
    }
  };

  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/\-\-+/g, "-");
  };

  useLayoutEffect(() => {
    gridRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1)",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      gridRefs.current.forEach((el) => {
        ScrollTrigger.getById(el)?.kill();
      });
    };
  }, []);

  return (
    <Box
      overflow="hidden"
      width="100%"
      px={isMobile ? 2 : 4}
      py={isMobile ? 4 : 6}
      mt={location.pathname === "/" ? 0 : 10}
    >
      <Typography
        variant="h2"
        textAlign="start"
        fontWeight={500}
        color={theme.palette.custom.black}
      >
        Projects
      </Typography>
      <Divider
        sx={{
          mt: 1,
          mb: 4,
          width: "100%",
          height: "2px",
          backgroundColor: theme.palette.custom.black,
        }}
      />

      <Grid container width="100%" spacing={2}>
        {data.map((project, index) => {
          const pattern = [7, 5, 5, 7];
          const size = pattern[index % pattern.length];

          return (
            <Grid
              key={index}
              size={isMobile ? 12 : size}
              ref={addToRefs}
              sx={{ transformOrigin: "center" }}
            >
              {/* Image + Overlay */}
              <Box
                position="relative"
                height={isMobile ? 300 : 400}
                overflow="hidden"
                sx={{
                  "&:hover .overlay-box": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={`Project ${index}`}
                  onClick={() =>
                    (window.location.href = `/projects/${slugify(
                      project.title
                    )}`)
                  }
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      filter: "blur(2px) brightness(0.8)",
                      cursor: "pointer",
                    },
                  }}
                />

                <Box
                  className="overlay-box"
                  position="absolute"
                  bottom={0}
                  left={0}
                  width="100%"
                  bgcolor="rgba(0, 0, 0, 0.3)"
                  p={2}
                  sx={{
                    opacity: 0,
                    transform: "translateY(10px)",
                    transition: "all 0.3s ease",
                    pointerEvents: "none",
                  }}
                >
                  <Typography fontSize="1.4em" color="white" textAlign="center">
                    {project.statistics.handoverDate}
                  </Typography>
                </Box>
              </Box>

              {/* Static Text Block BELOW the image */}
              <Box width="100%" mt={1} px={1}>
                <Typography
                  fontWeight={600}
                  fontSize="1.4em"
                  color={theme.palette.custom.black}
                >
                  {project.title}
                </Typography>
                <Typography fontSize="1em" color="text.secondary">
                  {project.location}
                </Typography>
                <Typography
                  fontSize="1.2em"
                  fontWeight={500}
                  color={theme.palette.custom.black}
                >
                  Starting from {project.startPrice}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Projects;
