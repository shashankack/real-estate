import { Box } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import greenMonogram from "../assets/images/logos/green_logo_monogram.png";
import greenLogoText from "../assets/images/logos/green_logo_text.png";

const Intro = ({ NextComponent }) => {
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

        // ✅ Re-enable scroll when animation completes
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
      x: "-6vw",
      duration: 0.5,
      ease: "power2.inOut",
    });
    tl.fromTo(
      logoTextRef.current,
      { x: 0 },
      { x: "50%", duration: 0.8, ease: "power2.out" },
      "<"
    );
    tl.to(
      [monogramRef.current, logoTextRef.current],
      {
        opacity: 0,
        duration: 0.6,
        ease: "power1.out",
      },
      "+=0.4"
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
            <Box position="relative" width="10vw" height="10vw">
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
                  padding: "1vw",
                }}
              />
              <Box
                component="img"
                src={greenLogoText}
                ref={logoTextRef}
                sx={{
                  width: "8vw",
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
