import {
  Box,
  TextField,
  Typography,
  Grid,
  Button,
  Stack,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { faqData } from "../assets/data";
import { useEffect, useRef } from "react";

import contactImg from "../assets/images/contact.jpg";

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const mapContainerRef = useRef(null);
  const gridRefs = useRef([]);

  const addToGridRefs = (el) => {
    if (el && !gridRefs.current.includes(el)) {
      gridRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(imageContainerRef.current, { yPercent: -100, opacity: 0 }).to(
      imageContainerRef.current,
      { yPercent: 0, opacity: 1 },
      "<"
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { y: 0 },
      {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "bottom 40%",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      mapContainerRef.current,
      { y: 50, scale: 1.2 },
      {
        y: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: mapContainerRef.current,
          start: "top 80%",
          end: "center 85%",
          scrub: true,
        },
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Query submitted!");
  };

  return (
    <Grid container minHeight="100vh" pt={10} overflow="hidden">
      {/* Full-width Image */}
      <Box
        ref={imageContainerRef}
        sx={{ width: "100%", overflow: "hidden" }}
        height={isMobile ? 400 : 600}
        position="relative"
      >
        <Box
          ref={imageRef}
          component="img"
          src={contactImg}
          alt="Contact Hero"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box position="absolute" bottom={0} left={40}>
          <Typography color="#fff" fontSize="4vw">Contact Us</Typography>
        </Box>
      </Box>

      {/* Contact Form */}
      <Grid
        height={{ sm: "auto", md: 700 }}
        size={12}
        container
        spacing={4}
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          px: isMobile ? 2 : 4,
          py: 6,
        }}
      >
        <Grid
          ref={addToGridRefs}
          size={{
            sm: 12,
            md: 6,
          }}
        >
          <Typography variant="h4" mb={2} width="100%">
            Get in Touch
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <TextField label="Name" variant="outlined" required fullWidth />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              label="Phone"
              type="tel"
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              label="Your Query"
              variant="outlined"
              multiline
              rows={4}
              required
              fullWidth
            />

            {/* Social Icons */}
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
              sx={{ pb: 4 }}
            >
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  alignSelf: "flex-start",
                  color: "#c36247",
                  borderColor: "#c36247",
                  textTransform: "none",
                  fontSize: "1rem",
                  px: 10,
                  py: 1.2,
                  borderRadius: 6,
                  "&:hover": {
                    backgroundColor: "#c36247",
                    color: "#fff",
                    borderColor: "#c36247",
                  },
                }}
              >
                Submit
              </Button>
              <Stack direction="row" spacing={2}>
                <IconButton
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: "#c36247" }}
                >
                  <InstagramIcon fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: "#c36247" }}
                >
                  <WhatsAppIcon fontSize="large" />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        </Grid>

        {/* FAQ */}
        <Grid
          ref={addToGridRefs}
          size={{
            sm: 12,
            md: 6,
          }}
          pr={2}
          sx={{
            overflowY: "auto",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#c36247",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#a04c34",
            },
          }}
          maxHeight={600}
        >
          <Typography variant="h4" mb={2} width="100%">
            Frequently Asked Questions
          </Typography>
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={{
                mb: 1.5,
                backgroundColor: "transparent",
                borderBottom: "1px solid #e0e0e0",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: "#c36247", fontSize: "1.5rem" }}
                  />
                }
                sx={{
                  px: 0,
                  py: 1,
                  "& .MuiTypography-root": {
                    fontWeight: 500,
                    color: "#222",
                    fontSize: "1rem",
                  },
                }}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  px: 0,
                  pb: 2,
                  pt: 0,
                  color: "#555",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                }}
              >
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>

      {/* Google Maps Embed */}
      <Box
        ref={mapContainerRef}
        sx={{
          width: "100%",
          height: { xs: 300, md: 500 },
          borderTop: "1px solid #eee",
        }}
      >
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.947460057875!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDIuNiJF!5e0!3m2!1sen!2sin!4v1615978018474!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Grid>
  );
};

export default Contact;
