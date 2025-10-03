import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      elevation={4}
      sx={{
        background: "linear-gradient(90deg, #0d0d0d, #1a1a1a)",
        px: { xs: 2, md: 6 },
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LocalHospitalIcon sx={{ color: "#e53935", fontSize: 32, mr: 1 }} />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                "&:hover": { color: "#e53935", transition: "0.3s ease" },
              }}
            >
              Ambulance Service
            </Typography>
          </Link>
        </Box>

        {/* Right Menu */}
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          sx={{ textAlign: "center" }}
        >
          {/* Emergency Number Box */}
          {/* <Box
            sx={{
              backgroundColor: "#b71c1c",
              color: "#fff",
              px: 2.5,
              py: 1,
              borderRadius: "8px",
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(229,57,53,0.5)",
              "&:hover": {
                backgroundColor: "#d32f2f",
                transform: "scale(1.05)",
                transition: "0.3s",
              },
            }}
          >
            +880 5461512121
          </Box> */}

          {/* Nav Links */}
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "#fff",
                fontWeight: 500,
                "&:hover": { color: "#e53935" },
              }}
            >
              About
            </Button>
          </Link>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "#fff",
                fontWeight: 500,
                "&:hover": { color: "#e53935" },
              }}
            >
              Services
            </Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "#fff",
                fontWeight: 500,
                "&:hover": { color: "#e53935" },
              }}
            >
              Contact
            </Button>
          </Link>

          {/* CTA Button */}
          <Link to="/tryai" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                backgroundColor: "#e53935",
                color: "#fff",
                fontWeight: "bold",
                px: 3,
                py: 1,
                borderRadius: "25px",
                boxShadow: "0 4px 12px rgba(229,57,53,0.5)",
                "&:hover": {
                  backgroundColor: "#ff5252",
                  transform: "translateY(-3px)",
                  boxShadow: "0 6px 15px rgba(229,57,53,0.6)",
                  transition: "0.3s ease",
                },
              }}
            >
              🚑 Try AI Feature
            </Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
