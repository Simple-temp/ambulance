import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Stack,
  Button,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"; // Ambulance-style icon
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1a1a1a" }}>
      <Toolbar>
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <LocalHospitalIcon sx={{ color: "#e53935", mr: 1 }} />
          <Link to="/" style={{textDecoration:"none", color:"#ffffffff"}}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Ambulance Service
            </Typography>
          </Link>
        </Box>

        {/* Menu Items */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              backgroundColor: "#800000", // Deep maroon
              color: "#fff",
              px: 2,
              py: 2.5,
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          >
            +880 5461512121
          </Box>
          <Button color="inherit">Course</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Employment</Button>
          <Button color="inherit">FAQ</Button>
          <Button color="inherit">Contact Us</Button>
          <Link to="/tryai">
            <Button className="glow-button">Try AI Feature</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
