import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Stack, LinearProgress, Button } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const Tracking = () => {
  const totalTime = 15 * 60; // 15 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  const handleCancel = () => setIsRunning(false);
  const handleStart = () => {
    setTimeLeft(totalTime);
    setIsRunning(true);
  };

  return (
    <Box
      sx={{
        maxWidth: 700,
        margin: "auto",
        mt: 5,
        p: 4,
        bgcolor: "white",
        boxShadow: 3,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Ambulance Tracking
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Your ambulance is on the way. Track it in real-time.
      </Typography>

      {/* Animation Path */}
      <Paper
        sx={{
          position: "relative",
          height: 100,
          bgcolor: "#e0e0e0",
          borderRadius: 2,
          overflow: "hidden",
          mb: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            animation: isRunning ? "moveAmbulance 5s linear infinite" : "none",
          }}
        >
          <LocalHospitalIcon sx={{ fontSize: 50, color: "#d32f2f" }} />
        </Box>
      </Paper>

      <Stack spacing={2} mb={2}>
        <Typography variant="subtitle1">
          Estimated Arrival: {formatTime(timeLeft)}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={((totalTime - timeLeft) / totalTime) * 100}
        />
      </Stack>

      {/* Control Buttons */}
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="contained" color="error" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "#800000", "&:hover": { backgroundColor: "#660000" } }} onClick={handleStart}>
          Start
        </Button>
      </Stack>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes moveAmbulance {
            0% { left: 0; }
            50% { left: 80%; }
            100% { left: 0; }
          }
        `}
      </style>
    </Box>
  );
};

export default Tracking;
