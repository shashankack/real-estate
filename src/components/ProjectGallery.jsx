import {
  Box,
  Grid,
  Modal,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState, useEffect } from "react";

const ProjectGallery = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpen = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!open) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <Grid container spacing={2}>
        {images.map((img, idx) => (
          <Grid
            size={{
              xs: 6,
              sm: 4,
            }}
            key={idx}
          >
            <Box
              component="img"
              src={img}
              alt={`Gallery Image ${idx + 1}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 2,
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
              onClick={() => handleOpen(idx)}
            />
          </Grid>
        ))}
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#000",
            boxShadow: 24,
            borderRadius: 2,
            maxWidth: "95vw",
            maxHeight: "90vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "none",
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={images[activeIndex]}
            alt={`Image ${activeIndex + 1}`}
            sx={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              objectFit: "contain",
            }}
          />

          {/* Controls */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              bgcolor: "rgba(0,0,0,0.4)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              bgcolor: "rgba(0,0,0,0.4)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
            }}
          >
            <ChevronRightIcon />
          </IconButton>

          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "white",
              bgcolor: "rgba(0,0,0,0.5)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
};

export default ProjectGallery;
