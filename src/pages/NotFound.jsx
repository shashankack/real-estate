import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fdf7f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "10vw", color: "#c36247", fontWeight: 700 }}
      >
        404
      </Typography>
      <Typography variant="h5" sx={{ color: "#333", mb: 2 }}>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" sx={{ color: "#777", mb: 4, maxWidth: 400 }}>
        The page you're looking for doesn’t exist or has been moved.
      </Typography>

      <Button
        variant="outlined"
        onClick={() => navigate("/")}
        sx={{
          color: "#c36247",
          borderColor: "#c36247",
          textTransform: "none",
          fontSize: "1rem",
          borderRadius: 6,
          "&:hover": {
            backgroundColor: "#c36247",
            color: "#fff",
            borderColor: "#c36247",
          },
        }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFound;
