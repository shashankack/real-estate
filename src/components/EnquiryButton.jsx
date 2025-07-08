/**
 * EnquiryButton Component
 * This component renders a button that opens a dialog for user enquiries.
 * It includes a form for name and phone number input,
 * and options to contact via Telegram or WhatsApp.
 * It also supports redirection to a specified URL.
 * @component
 * @param {Object} props - Component properties
 * @param {string} [props.text="Get Consultation"] - Button text
 * @param {string} [props.redirect] - URL to redirect when button is clicked
 * @param {string} [props.themeColor="#66785E"] - Button theme color
 * @returns {JSX.Element} Rendered EnquiryButton component
 */
import {
  Button,
  Dialog,
  Box,
  Grid,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { forwardRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

import dialogImage from "../assets/images/formBg.jpg";

const EnquiryButton = forwardRef(
  ({ text = "Get Consultation", redirect, themeColor = "#66785E" }, ref) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", phone: "" });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
      setOpen(false);
      setFormData({ name: "", phone: "" });
    };

    return (
      <>
        <Button
          ref={ref}
          variant="outlined"
          onClick={() => {
            if (redirect) {
              window.location.href = redirect;
            } else {
              setOpen(true);
            }
          }}
          sx={{
            marginBottom: 2,
            color: themeColor,
            border: 2,
            borderColor: themeColor,
            fontSize: isMobile ? "4vw" : "1vw",
            textTransform: "none",
            width: isMobile ? "100%" : 300,
            borderRadius: 6,
            "&:hover": {
              backgroundColor: themeColor,
              color: theme.palette.custom.white,
              borderColor: themeColor,
            },
          }}
        >
          {text}
        </Button>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullWidth
          maxWidth="md"
          PaperProps={{ sx: { overflow: "hidden" } }}
        >
          <Grid container>
            {/* Left Panel */}
            <Grid
              size={{ sm: 12, md: 6 }}
              sx={{
                backgroundColor: "#f6f0ec",
                px: isMobile ? 2 : 4,
                py: isMobile ? 4 : 6,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                gap: 3,
              }}
            >
              <Typography variant="h5" fontWeight={500}>
                Want to know more details?
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Feel free to contact us
              </Typography>

              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="standard"
                fullWidth
              />
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="standard"
                fullWidth
                type="tel"
              />

              <Button
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  py: 1.5,
                  fontWeight: 500,
                  backgroundColor: "black",
                  borderRadius: 999,
                  "&:hover": { backgroundColor: "#222" },
                }}
              >
                Submit
              </Button>

              <Typography
                variant="caption"
                color="text.secondary"
                textAlign="center"
              >
                By submitting this form, you agree to our{" "}
                <a
                  href="/#"
                  style={{
                    color: "#c36247",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  privacy policy
                </a>
                .
              </Typography>

              <Grid container spacing={2} mt={1} justifyContent="center">
                <Grid item>
                  <Button
                    startIcon={<TelegramIcon />}
                    sx={{ textTransform: "none", color: "black" }}
                  >
                    Telegram
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    startIcon={<WhatsAppIcon />}
                    sx={{ textTransform: "none", color: "black" }}
                  >
                    WhatsApp
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/* Right Panel with Image */}
            <Grid size={{ sm: 12, md: 6 }}>
              <Box
                component="img"
                src={dialogImage}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <IconButton
                onClick={() => setOpen(false)}
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  "&:hover": {
                    color: theme.palette.custom.green,
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Dialog>
      </>
    );
  }
);

export default EnquiryButton;
