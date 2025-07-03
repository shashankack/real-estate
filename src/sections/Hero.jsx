import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Grid,
} from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import EnquiryButton from "../components/EnquiryButton";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const video =
    "https://res.cloudinary.com/dhlowafw0/video/upload/f_auto,q_auto,vc_auto/Real-Estate-Development-With-Tightly-Located-Famil-2023-11-27-05-17-40-Utc_ohr9ie.mp4";

  const textContainerRefs = useRef([]);
  const textRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [hasPlayed] = useState(
    sessionStorage.getItem("introVideoPlayed") === "true"
  );

  const addToTextContainerRef = (el) => {
    if (el && !textContainerRefs.current.includes(el)) {
      textContainerRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (!hasPlayed || textContainerRefs.current.length === 0) return;

    gsap.set(textContainerRefs.current, {
      y: 100,
      opacity: 0,
    });

    gsap.to(textContainerRefs.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
      delay: 0.2,
    });
  }, [hasPlayed]);

  useEffect(() => {
    if (!hasPlayed || !videoRef.current) return;

    gsap.set(videoRef.current, {
      y: "100%",
    });

    gsap.to(videoRef.current, {
      y: "0%",
      duration: 0.6,
      ease: "back.out(1)",
    });
  }, [hasPlayed]);

  return (
    <Box
      height="100vh"
      width="100%"
      px={isMobile ? 2 : 4}
      overflow="hidden"
      ref={containerRef}
    >
      <Grid
        container
        width="100%"
        height={200}
        overflow="hidden"
        flexDirection={isMobile ? "column" : "row"}
        spacing={isMobile ? 1 : 4}
        mt={10}
        mb={4}
      >
        <Grid
          ref={addToTextContainerRef}
          size={{
            xs: 12,
            sm: 12,
            md: 6,
          }}
          overflow="hidden"
          height={isMobile ? "auto" : "100%"}
          display="flex"
          justifyContent="start"
          alignItems={isMobile ? "start" : "end"}
        >
          {isMobile ? (
            <Typography
              ref={textRef}
              fontSize={isMobile ? "6vw" : "3vw"}
              mb={isMobile ? 0 : 1}
            >
              Find the best properties in <br />
              the Middle East
            </Typography>
          ) : (
            <Typography
              ref={textRef}
              fontSize={isMobile ? "6vw" : "3vw"}
              mb={isMobile ? 0 : 1}
            >
              Find the best properties in the
              <br /> Middle East
            </Typography>
          )}
        </Grid>

        <Grid
          ref={addToTextContainerRef}
          size={{
            xs: 12,
            sm: 12,
            md: 3,
          }}
          overflow="hidden"
          display="flex"
          justifyContent={isMobile ? "start" : "center"}
          alignItems={isMobile ? "start" : "end"}
          height={isMobile ? "auto" : "100%"}
        >
          {!isMobile ? (
            <Typography
              ref={textRef}
              fontSize={isMobile ? "4vw" : "1.6vw"}
              mb={isMobile ? 0 : 1}
            >
              with a leading real
              <br /> estate agency
            </Typography>
          ) : (
            <Typography
              ref={textRef}
              fontSize={isMobile ? "4vw" : "1.6vw"}
              mb={isMobile ? 0 : 1}
            >
              with a leading real estate agency
            </Typography>
          )}
        </Grid>

        <Grid
          ref={addToTextContainerRef}
          size={{
            xs: 12,
            sm: 12,
            md: 3,
          }}
          overflow="hidden"
          height={isMobile ? "auto" : "100%"}
          display="flex"
          justifyContent={isMobile ? "start" : "center"}
          alignItems={isMobile ? "start" : "end"}
        >
          <EnquiryButton />
        </Grid>
      </Grid>

      <Box
        ref={videoContainerRef}
        height={600}
        sx={{
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          component="video"
          src={video}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
