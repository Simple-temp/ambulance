import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Divider,
  Stack,
  Chip,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ambulanceServices = [
  {
    title: "ICU Ambulance",
    description:
      "Advanced life-saving ambulance with ventilator, oxygen & monitor.",
    benefits: [
      "24/7 emergency availability",
      "Real-time patient monitoring",
      "Professional ICU-trained staff",
    ],
    services: [
      "Long-distance transfer",
      "Emergency pickup",
      "Hospital-to-hospital support",
    ],
    facilities: [
      "Ventilator",
      "Defibrillator",
      "Oxygen cylinder",
      "Suction machine",
    ],
    url: "http://localhost:5173/user/ambulance-list",
  },
  {
    title: "AC Ambulance",
    description: "Air-conditioned ambulance for smooth, comfortable transfers.",
    benefits: ["Comfortable transfer", "Affordable rates"],
    services: ["Patient drop-off", "Routine transfers"],
    facilities: ["AC", "Reclining seats"],
    url: "http://localhost:5173/user/ambulance-list",
  },
  {
    title: "Freezing Ambulance",
    description:
      "Freezer van for deceased with -5°C controlled cold environment.",
    benefits: ["Long-distance capable", "24-hour preservation"],
    services: ["Body transfer to hometown", "Hospital morgue delivery"],
    facilities: ["Freezer chamber", "Generator backup"],
    url: "http://localhost:5173/user/ambulance-list",
  },
  {
    title: "Air Ambulance",
    description:
      "Fast air transport for emergency patient transfers inside or outside Bangladesh.",
    benefits: ["Very fast long-distance transport", "High-end medical team"],
    services: ["Intercountry evacuation", "Critical transfers"],
    facilities: ["Medical cabin", "In-flight monitoring"],
    url: "http://localhost:5173/user/ambulance-list",
  },
  {
    title: "NICU Ambulance",
    description:
      "Specialized service for premature newborns with incubator and neonatal care tools.",
    benefits: ["Infant incubator support", "Experienced NICU nurses"],
    services: ["Newborn hospital transfer", "Emergency neonatal support"],
    facilities: ["Baby warmer", "Incubator", "Pulse oximeter"],
    url: "http://localhost:5173/user/ambulance-list",
  },
  {
    title: "CCU Ambulance",
    description:
      "Cardiac-equipped ambulance with ECG, defibrillator & oxygen support.",
    benefits: [
      "Quick response for cardiac emergencies",
      "Continuous heart monitoring",
      "Specialized cardiac staff",
    ],
    services: ["Cardiac transfer", "Doctor-on-call service"],
    facilities: ["ECG monitor", "Oxygen cylinder", "Portable stretcher"],
    url: "http://localhost:5173/user/ambulance-list",
  },
];

const Services = () => {
  const [open, setOpen] = useState(false);
  const [selectedAmbulance, setSelectedAmbulance] = useState(null);

  const handleLearnMore = (service) => {
    setSelectedAmbulance(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSelectedAmbulance(null), 200);
  };

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 }, backgroundColor: "#f0f4f8" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", color: "#1e3a8a", mb: 6 }}
      >
        Our Ambulance Services
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "space-between",
        }}
      >
        {ambulanceServices.map((service, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: 4,
              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
              p: 3,
              flex: "0 1 calc(33.333% - 16px)",
              minWidth: 260,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 8px 30px rgba(0,0,0,0.2)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#1e3a8a", mb: 2 }}
              >
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {service.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #f97316, #f59e0b)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #ea580c, #d97706)",
                  },
                }}
                onClick={() => handleLearnMore(service)}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: 3,
            overflow: "hidden",
            background: "#ffffff",
            boxShadow: "0px 10px 40px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease-in-out",
          },
        }}
      >
        {/* Header with gradient */}
        <Box
          sx={{
            background: "linear-gradient(90deg, #1e3a8a, #2563eb)",
            px: 3,
            py: 2,
            color: "#fff",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {selectedAmbulance?.title}
          </Typography>
        </Box>

        <DialogContent
          dividers
          sx={{
            maxHeight: "60vh",
            overflowY: "auto",
            px: 3,
            py: 2,
            "&::-webkit-scrollbar": { width: 6 },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#2563eb",
              borderRadius: 3,
            },
          }}
        >
          <Typography variant="body1" mb={3} sx={{ color: "#1e3a8a" }}>
            {selectedAmbulance?.description}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#2563eb", mb: 1 }}
          >
            Benefits
          </Typography>
          <Stack spacing={1} mb={2}>
            {selectedAmbulance?.benefits.map((b, i) => (
              <Box
                key={i}
                sx={{
                  px: 2,
                  py: 0.5,
                  borderRadius: 2,
                  backgroundColor: "#e0f2fe",
                  color: "#1e3a8a",
                  fontWeight: 500,
                  transition: "all 0.2s",
                  "&:hover": { backgroundColor: "#bae6fd" },
                }}
              >
                {b}
              </Box>
            ))}
          </Stack>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#2563eb", mb: 1 }}
          >
            Services
          </Typography>
          <Stack spacing={1} mb={2}>
            {selectedAmbulance?.services.map((s, i) => (
              <Box
                key={i}
                sx={{
                  px: 2,
                  py: 0.5,
                  borderRadius: 2,
                  backgroundColor: "#fef3c7",
                  color: "#b45309",
                  fontWeight: 500,
                  transition: "all 0.2s",
                  "&:hover": { backgroundColor: "#fde68a" },
                }}
              >
                {s}
              </Box>
            ))}
          </Stack>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#2563eb", mb: 1 }}
          >
            Facilities
          </Typography>
          <Stack spacing={1}>
            {selectedAmbulance?.facilities.map((f, i) => (
              <Box
                key={i}
                sx={{
                  px: 2,
                  py: 0.5,
                  borderRadius: 2,
                  backgroundColor: "#d1fae5",
                  color: "#065f46",
                  fontWeight: 500,
                  transition: "all 0.2s",
                  "&:hover": { backgroundColor: "#a7f3d0" },
                }}
              >
                {f}
              </Box>
            ))}
          </Stack>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "space-between", px: 3, py: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClose}
            sx={{ borderRadius: 2, fontWeight: "bold" }}
          >
            Close
          </Button>

          <IconButton
            onClick={() => window.open(selectedAmbulance?.url, "_blank")}
            sx={{
              backgroundColor: "#2563eb",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#1e40af",
                transform: "scale(1.1)",
              },
              transition: "all 0.2s ease-in-out",
            }}
          >
            <ArrowOutwardIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Services;
