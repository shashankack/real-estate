import { Box, Typography, useTheme } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Intro = ({ NextComponent }) => {
  const theme = useTheme();

  const [hasPlayed, setHasPlayed] = useState(
    sessionStorage.getItem("introVideoPlayed") === "true"
  );

  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  const textContainerRef = useRef(null);
  const mainContainerRef = useRef(null);

  const text = "RSJP Developers";

  useEffect(() => {
    if (hasPlayed || !textContainerRef.current) return;

    const letters = textContainerRef.current.querySelectorAll(".letter");

    const tl = gsap.timeline({
      onComplete: () => {
        setHasPlayed(true);
        mainContainerRef.current.style.zIndex = "-1";
        sessionStorage.setItem("introVideoPlayed", "true");
      },
    });

    tl.fromTo(
      letters,
      { opacity: 0, yPercent: -40 },
      {
        opacity: 1,
        yPercent: 0,
        stagger: 0.05,
        duration: 1,
        ease: "back.out",
      }
    );

    tl.to(
      [leftContainerRef.current, rightContainerRef.current],
      {
        xPercent: (i) => (i === 0 ? -100 : 100),
        duration: 1,
        ease: "power1.out",
      },
      "+=0.8"
    );

    tl.to(
      textContainerRef.current,
      {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=1.5"
    );
  }, [hasPlayed]);

  return (
    <Box
      position="relative"
      height="100vh"
      width="100%"
      overflow="hidden"
      zIndex={hasPlayed ? "auto" : "4000"}
      ref={mainContainerRef}
    >
      <NextComponent />

      {!hasPlayed && (
        <>
          <Typography
            ref={textContainerRef}
            sx={{
              position: "absolute",
              color: theme.palette.grey[500],
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 30,
              fontSize: "3vw",
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "900",
              display: "flex",
              gap: "0.1em",
              textShadow: "-2px 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            {text.split("").map((char, idx) => (
              <Box
                key={idx}
                className="letter"
                component="span"
                sx={{ display: "inline-block", opacity: 0 }}
              >
                {char === " " ? "\u00A0" : char}
              </Box>
            ))}
          </Typography>

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
        </>
      )}
    </Box>
  );
};

export default Intro;
