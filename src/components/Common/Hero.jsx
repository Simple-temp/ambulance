import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (e, newValue) => {
    setTab(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100vh",
        px: 6,
        background: "linear-gradient(to right, #e0f7fa, #b3e5fc)",
      }}
    >
      {/* Left Side - Hero Text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Fast, Reliable & 24/7 Emergency Ambulance Service
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={3}>
          We provide immediate ambulance assistance across Dhaka city and nearby
          areas. Your safety is our top priority.
        </Typography>
        <Link to="/user/profile">
          <Button variant="contained" size="large">
            Get Started
          </Button>
        </Link>
      </motion.div>

      {/* Right Side - Login/Register */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3, minWidth: 350 }}>
          <Tabs
            value={tab}
            onChange={handleTabChange}
            variant="fullWidth"
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="LOGIN" />
            <Tab label="REGISTER" />
          </Tabs>

          {/* LOGIN FORM */}
          {tab === 0 && (
            <Box mt={3}>
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                type="email"
                variant="outlined"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
            </Box>
          )}

          {/* REGISTER FORM */}
          {tab === 1 && (
            <Box mt={3}>
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                type="text"
                variant="outlined"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                type="email"
                variant="outlined"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                variant="outlined"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Phone"
                type="tel"
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Register
              </Button>
            </Box>
          )}
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Hero;
