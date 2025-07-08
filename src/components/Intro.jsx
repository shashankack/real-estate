import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import greenMonogram from "../assets/images/logos/green_logo_monogram.png";
import greenLogoText from "../assets/images/logos/green_logo_text.png";

const Intro = ({ NextComponent }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [hasPlayed, setHasPlayed] = useState(() => {
    return sessionStorage.getItem("introVideoPlayed") === "true";
  });

  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  const mainContainerRef = useRef(null);
  const monogramRef = useRef(null);
  const logoTextRef = useRef(null);

  useEffect(() => {
    if (hasPlayed) return;

    // Disable scrolling
    document.body.style.overflow = "hidden";

    if (
      !leftContainerRef.current ||
      !rightContainerRef.current ||
      !mainContainerRef.current ||
      !monogramRef.current ||
      !logoTextRef.current
    )
      return;

    const tl = gsap.timeline({
      onComplete: () => {
        setHasPlayed(true);
        mainContainerRef.current.style.zIndex = "-1";
        sessionStorage.setItem("introVideoPlayed", "true");

        document.body.style.overflow = "";
      },
    });

    // Animation steps...
    tl.set(monogramRef.current, { scale: 10 });
    tl.to(monogramRef.current, {
      scale: 1,
      duration: 0.8,
      ease: "back.out(.8)",
    });
    tl.to(monogramRef.current, {
      x: isMobile ? -80 : -130,
      duration: 0.5,
      ease: "power2.inOut",
    });

    tl.fromTo(
      logoTextRef.current,
      { x: isMobile ? -20 : -10 },
      {
        x: isMobile ? 70 : 100,
        duration: 0.8,
        ease: "power2.out",
      },
      "<"
    );
    tl.to(
      [monogramRef.current, logoTextRef.current],
      {
        opacity: 0,
        duration: 0.6,
        ease: "power1.out",
      },
      "+=0.8"
    );
    tl.to(
      [leftContainerRef.current, rightContainerRef.current],
      {
        xPercent: (i) => (i === 0 ? -100 : 100),
        duration: 1,
        ease: "power1.out",
      },
      "-=0.2"
    );

    // Cleanup in case component unmounts early
    return () => {
      document.body.style.overflow = "";
    };
  }, [hasPlayed]);

  return (
    <>
      <NextComponent />

      {!hasPlayed && (
        <Box
          position="fixed"
          height="100vh"
          width="100%"
          overflow="hidden"
          zIndex="4000"
          ref={mainContainerRef}
          top={0}
          left={0}
        >
          {/* Split Containers */}
          <Box
            ref={leftContainerRef}
            position="absolute"
            top={0}
            left={0}
            width="102%"
            height="100vh"
            sx={{
              backgroundColor: "#fff",
              zIndex: 20,
              pointerEvents: "none",
              clipPath: "polygon(0% 0%, 50% 50%, 100% 100%, 0% 100%)",
            }}
          />
          <Box
            ref={rightContainerRef}
            position="absolute"
            top={0}
            left={0}
            width="101%"
            height="100vh"
            sx={{
              backgroundColor: "#fff",
              zIndex: 19,
              pointerEvents: "none",
              clipPath: "polygon(0% 0%, 50% 50%, 100% 100%, 100% 0%)",
            }}
          />

          {/* Centered Animation Group */}
          <Box
            height="100vh"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top={0}
            left={0}
            zIndex={25}
          >
            <Box
              position="relative"
              width={isMobile ? 190 : 250}
              height={isMobile ? 190 : 250}
            >
              <Box
                component="img"
                src={greenMonogram}
                ref={monogramRef}
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 2,
                  bgcolor: "#fff",
                  padding: 4,
                }}
              />
              <Box
                component="img"
                src={greenLogoText}
                ref={logoTextRef}
                sx={{
                  width: isMobile ? 100 : 180,
                  height: "auto",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                }}
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Intro;
