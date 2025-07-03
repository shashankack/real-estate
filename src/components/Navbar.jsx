import {
  Box,
  AppBar,
  Stack,
  Toolbar,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useEffect, useRef, useState } from "react";

import TextAnimation from "./TextAnimation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scrollThreshold = 700;
  const lastScrollYRef = useRef(0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Agents", path: "/agents" },
    { name: "Contact", path: "/contact" },
  ];

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollThreshold) {
      setIsScrolled(true);
      setShowNavbar(currentScrollY < lastScrollYRef.current);
    } else {
      setIsScrolled(false);
      setShowNavbar(true);
    }

    lastScrollYRef.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          backdropFilter: "blur(10px)",
          py: 1,
          boxShadow: isScrolled ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
          transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isMobile ? "space-between" : "space-around",
          }}
        >
          {/* Logo */}
          <Box sx={{ textDecoration: "none", color: "#000" }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Real Estate
            </Typography>
          </Box>

          {/* Desktop Nav */}
          {!isMobile && (
            <Stack direction="row" spacing={3}>
              {navLinks.map((link, index) => (
                <TextAnimation
                  key={index}
                  text={link.name}
                  linkHref={link.path}
                />
              ))}
            </Stack>
          )}

          {/* Mobile Hamburger Icon */}
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)} edge="end">
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, px: 2, pt: 2 }}>
          {/* Close button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Navigation links */}
          <List>
            {navLinks.map((link, index) => (
              <ListItem button key={index} component="a" href={link.path}>
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
