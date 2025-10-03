import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const ambulanceServices = [
  {
    title: "ICU Ambulance",
    description:
      "Advanced life-saving ambulance with ventilator, oxygen & monitor.",
  },
  {
    title: "AC Ambulance",
    description: "Air-conditioned ambulance for smooth, comfortable transfers.",
  },
  {
    title: "Freezing Ambulance",
    description:
      "Freezer van for deceased with -5°C controlled cold environment.",
  },
  {
    title: "Air Ambulance",
    description:
      "Fast air transport for emergency patient transfers inside or outside Bangladesh.",
  },
  {
    title: "NICU Ambulance",
    description:
      "Specialized service for premature newborns with incubator and neonatal care tools.",
  },
  {
    title: "CCU Ambulance",
    description:
      "Cardiac-equipped ambulance with ECG, defibrillator & oxygen support.",
  },
];

const Services = () => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 }, backgroundColor: "#f8fafc" }}>
      {/* Heading */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", color: "#1d4ed8", mb: 6 }}
      >
        Our Ambulance Services
      </Typography>

      {/* Grid of cards */}
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
              borderRadius: 3,
              boxShadow: 3,
              p: 2,
              flex: "0 1 calc(33.333% - 16px)", // 3 columns
              minWidth: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#1d4ed8", mb: 1 }}
              >
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {service.description}
              </Typography>
              <Link
                to="/user/ambulance-list"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f97316",
                    "&:hover": { backgroundColor: "#ea580c" },
                  }}
                >
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
