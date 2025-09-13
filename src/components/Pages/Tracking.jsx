import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  LinearProgress,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Chip,
} from "@mui/material";
import ambulanceGif from "../../assets/am.gif";

// Dummy routes with unique hops + traffic jam info
const routes = [
  {
    start: "Dhanmondi",
    end: "Farmgate",
    hops: ["Kalabagan", "Science Lab", "Russell Square"],
    baseTime: 15,
    jam: true,
  },
  {
    start: "Farmgate",
    end: "Shahbagh",
    hops: ["Banglamotor", "Kawran Bazar", "Elephant Road"],
    baseTime: 12,
    jam: false,
  },
  {
    start: "Karwan Bazar",
    end: "Mohammadpur",
    hops: ["Panthapath", "Asad Gate", "Shyamoli"],
    baseTime: 18,
    jam: true,
  },
  {
    start: "Gulshan",
    end: "Banani",
    hops: ["Gulshan 1", "Police Plaza", "Mohakhali"],
    baseTime: 20,
    jam: false,
  },
  {
    start: "Mirpur",
    end: "Uttara",
    hops: ["Kazipara", "Shewrapara", "Airport"],
    baseTime: 25,
    jam: true,
  },
  {
    start: "Mohakhali",
    end: "Bashundhara",
    hops: ["Banani", "Khilkhet", "Notun Bazar"],
    baseTime: 22,
    jam: false,
  },
  {
    start: "Shyamoli",
    end: "Gabtoli",
    hops: ["Technical", "Kallyanpur", "Aminbazar"],
    baseTime: 10,
    jam: true,
  },
];

const Tracking = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  // Handle Route Selection
  const handleRouteChange = (event) => {
    const route = routes.find(
      (r) => `${r.start} to ${r.end}` === event.target.value
    );
    if (route) {
      const delay = route.jam ? Math.floor(Math.random() * 5 + 5) : 0;
      const total = (route.baseTime + delay) * 60;

      setSelectedRoute(route);
      setTimeLeft(total);
      setTotalTime(total);
      setProgress(0);
      setIsRunning(true);
    }
  };

  // Timer effect
  useEffect(() => {
    if (!isRunning || !timeLeft) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }

        const elapsed = ((totalTime - (prev - 1)) / totalTime) * 100;
        setProgress(elapsed);

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft, totalTime]);

  // Format Time
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <Box
      sx={{
        maxWidth: 850,
        margin: "auto",
        mt: 5,
        p: 4,
        bgcolor: "white",
        boxShadow: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        🚑 Ambulance Tracking System
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Select your route and track ambulance in real-time.
      </Typography>

      {/* Route Dropdown */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Select Route</InputLabel>
        <Select onChange={handleRouteChange} defaultValue="">
          {routes.map((r, idx) => (
            <MenuItem key={idx} value={`${r.start} to ${r.end}`}>
              {r.start} → {r.end}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedRoute && (
        <>
          {selectedRoute.jam && (
            <Chip
              label="⚠️ Traffic Jam detected on this route"
              color="error"
              sx={{ mb: 2, fontWeight: "bold" }}
            />
          )}

          {/* Path with hop names */}
          <Paper
            sx={{
              position: "relative",
              height: 180,
              bgcolor: "#f9fafb",
              borderRadius: 2,
              overflow: "hidden",
              mb: 3,
              display: "flex",
              alignItems: "center",
              px: 3,
            }}
          >
            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              {/* Start */}
              <Typography fontWeight="bold" color="primary">
                {selectedRoute.start}
              </Typography>

              {/* Hops with name */}
              {selectedRoute.hops.map((hop, i) => (
                <Box
                  key={i}
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: "20px",
                      bgcolor: selectedRoute.jam ? "#ffcccc" : "#ccffcc",
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                      color: "#333",
                      boxShadow: 1,
                    }}
                  >
                    {hop}
                  </Box>
                </Box>
              ))}

              {/* End */}
              <Typography fontWeight="bold" color="primary">
                {selectedRoute.end}
              </Typography>
            </Stack>

            {/* Ambulance Moving */}
            {isRunning && (
              <Box
                component="img"
                src={ambulanceGif}
                alt="ambulance"
                sx={{
                  position: "absolute",
                  top: "70%",
                  left: `${progress}%`,
                  transform: "translate(-50%, -50%)",
                  height: 200,
                  width: 200,
                  transition: "left 1s linear",
                }}
              />
            )}
          </Paper>

          {/* Time Info */}
          <Stack spacing={2} mb={2}>
            <Typography variant="subtitle1">
              ⏳ Estimated Arrival:{" "}
              <strong style={{ color: "#d32f2f" }}>
                {formatTime(timeLeft)}
              </strong>
            </Typography>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ height: 10, borderRadius: 5 }}
            />
          </Stack>

          {/* Control Buttons */}
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              variant="contained"
              color="error"
              onClick={() => setIsRunning(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00695c",
                "&:hover": { backgroundColor: "#004d40" },
              }}
              onClick={() => setIsRunning(true)}
            >
              Resume
            </Button>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Tracking;
