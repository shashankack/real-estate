import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";

import ProjectGallery from "../components/ProjectGallery";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { projectsData } from "../assets/data";
import GetConsultationButton from "../components/EnquiryButton";
import { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

const ProjectInternal = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { "project-name": projectName } = useParams();

  const statsRefs = useRef([]);
  const imageContainerRef = useRef(null);
  const titleRefs = useRef([]);
  const descriptionRef = useRef(null);

  const project = projectsData.find((p) => slugify(p.title) === projectName);

  const addToTitleRefs = (el) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current.push(el);
    }
  };

  const addToStatsRefs = (el) => {
    if (el && !statsRefs.current.includes(el)) {
      statsRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Step 1: Animate Image Container from left
      tl.from(imageContainerRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      });

      tl.from(
        titleRefs.current,
        {
          y: 20,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power1.out",
        },
        "<=0.6"
      );

      // Step 2: Animate statsRefs in stagger
      tl.from(
        statsRefs.current,
        {
          y: 20,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        },
        "<=0.6"
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {}, []);

  if (!project) {
    return (
      <Box my={10}>
        <Typography variant="h4" component="h1" gutterBottom>
          Project Not Found
        </Typography>
        <Typography variant="body1">
          No project matched the name "{projectName}".
        </Typography>
      </Box>
    );
  }

  return (
    <Box my={10} px={isMobile ? 2 : 4}>
      {/* Image Banner */}
      <Box height={isMobile ? 300 : 700} mb={4} ref={imageContainerRef}>
        <Box
          component="video"
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Title + Button */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h3" fontWeight={600} ref={addToTitleRefs}>
          {project.title}
        </Typography>
        {!isMobile && <GetConsultationButton ref={addToTitleRefs} />}
      </Stack>

      {/* Metadata */}
      <Grid container spacing={4} mb={6}>
        {/* Location */}
        <Grid
          size={{
            sm: 12,
            md: 2,
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <ArrowOutwardIcon fontSize="small" />
            <Box>
              <Typography variant="caption" color="text.secondary">
                Location
              </Typography>
              <Typography fontWeight={500}>{project.location}</Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid
          size={{
            sm: 12,
            md: 10,
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <ArrowOutwardIcon fontSize="small" />
            <Box>
              <Typography variant="caption" color="text.secondary">
                Developer
              </Typography>
              <Typography fontWeight={500}>Unknown</Typography>
            </Box>
          </Stack>
        </Grid>

        {/* Statistics */}
        <Grid
          container
          size={{
            sm: 12,
            md: 6,
          }}
        >
          {project.statistics.map((stat, index) => (
            <Grid
              ref={addToStatsRefs}
              key={index}
              size={4}
              justifyContent="center"
              alignItems="center"
              display="flex"
              flexDirection="column"
            >
              <Typography
                fontWeight={600}
                fontSize={isMobile ? "4vw" : "1.4vw"}
                color={theme.palette.custom.orange}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                fontSize={isMobile ? "3vw" : ".8vw"}
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Description & Inquiry */}
        <Grid
          container
          size={{
            sm: 12,
            md: 6,
          }}
          spacing={4}
          alignItems="center"
        >
          <Grid>
            <Typography
              variant={isMobile ? "body2" : "h6"}
              color="text.secondary"
              lineHeight={1.8}
              textAlign="justify"
              ref={descriptionRef}
            >
              {project.description}
            </Typography>
          </Grid>
          {isMobile && (
            <Grid size={12} md={4} display="flex" justifyContent="center">
              <GetConsultationButton />
            </Grid>
          )}
        </Grid>
        {project.gallery && project.gallery.length > 0 && (
          <Box my={8}>
            <Typography variant="h5" fontWeight={600} mb={2}>
              Project Gallery
            </Typography>
            <ProjectGallery images={project.gallery} />
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default ProjectInternal;
