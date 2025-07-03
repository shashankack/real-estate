import {
  Box,
  Stack,
  Link,
  useTheme,
  useMediaQuery,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import TextAnimation from "./TextAnimation";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const footerLinks = {
    policyLinks: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Cookie Policy", url: "/cookie-policy" },
    ],

    socialLinks: [
      { name: "Facebook", url: "https://www.facebook.com" },
      { name: "Instagram", url: "https://www.instagram.com" },
      { name: "LinkedIn", url: "https://www.linkedin.com" },
    ],
  };

  return (
    <Stack
      width="100%"
      bgcolor={theme.palette.grey[900]}
      py={4}
      px={isMobile ? 2 : 6}
      spacing={6}
      justifyContent="start"
      alignItems="start"
    >
      {/* Top Section */}
      <Stack
        spacing={2}
        width="100%"
        direction={isMobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems={isMobile ? "start" : "center"}
      >
        <Typography
          color={theme.palette.grey[400]}
          fontSize={isMobile ? "1.2rem" : "1.5rem"}
          fontWeight={800}
          whiteSpace="nowrap"
        >
          Subscribe to our news and be the first <br />
          to receive unique offers
        </Typography>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            console.log("Subscribed with email:", email);
            e.target.reset();
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              variant="outlined"
              size="small"
              InputProps={{
                style: {
                  backgroundColor: theme.palette.common.white,
                  borderRadius: 8,
                },
              }}
              sx={{ width: isMobile ? "100%" : 300 }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: 8,
                backgroundColor: theme.palette.custom.orange,
                color: theme.palette.custom.white,
                px: 4,
                py: 1.2,
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#c36247",
                },
              }}
            >
              Subscribe
            </Button>
          </Stack>
        </form>
      </Stack>

      {/* Bottom Section */}
      <Stack
        direction={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        spacing={isMobile ? 3 : 0}
        pt={4}
        borderTop={`1px solid ${theme.palette.grey[800]}`}
      >
        <Typography color={theme.palette.grey[500]} flex={1} fontSize={14}>
          © 2025 RSJP Developers
        </Typography>

        <Stack direction="row" spacing={4} justifyContent="center" flex={1}>
          {footerLinks.policyLinks.map((link, index) => (
            <TextAnimation
              text={link.name}
              key={index}
              linkHref={link.url}
              color={theme.palette.grey[400]}
            />
          ))}
        </Stack>

        <Stack direction="row" spacing={4} justifyContent="center" flex={1}>
          {footerLinks.socialLinks.map((link, index) => (
            <TextAnimation
              text={link.name}
              key={index}
              linkHref={link.url}
              color={theme.palette.grey[400]}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
