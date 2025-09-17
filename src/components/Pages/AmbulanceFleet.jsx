import React, { useState } from "react";
import { Box, Typography, Grid, Paper, Chip, TextField, MenuItem, Button, LinearProgress } from "@mui/material";

// Dummy Ambulance Fleet Data
const fleetData = [
  { id: 1, name: "Ambulance A1", status: "Available", lastService: "2025-09-01", location: "Dhanmondi" },
  { id: 2, name: "Ambulance B2", status: "On Duty", lastService: "2025-08-25", location: "Tejgaon" },
  { id: 3, name: "Ambulance C3", status: "Maintenance", lastService: "2025-08-15", location: "Kallyanpur" },
  { id: 4, name: "Ambulance D4", status: "Available", lastService: "2025-09-05", location: "Gulshan" },
  { id: 5, name: "Ambulance E5", status: "On Duty", lastService: "2025-08-20", location: "Mirpur" },
  { id: 6, name: "Ambulance F6", status: "Available", lastService: "2025-09-07", location: "Uttara" },
  { id: 7, name: "Ambulance G7", status: "Maintenance", lastService: "2025-08-10", location: "Banani" },
  { id: 8, name: "Ambulance H8", status: "On Duty", lastService: "2025-08-28", location: "Khilgaon" },
];

const AmbulanceFleet = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Filter fleet based on search and status
  const filteredFleet = fleetData.filter((amb) => {
    const matchesSearch = amb.name.toLowerCase().includes(search.toLowerCase()) || amb.location.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || amb.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleAssignDriver = (id) => alert(`Assign driver to ambulance ID: ${id}`);

  // Map status to progress bar value
  const statusProgress = {
    Available: 100,
    "On Duty": 70,
    Maintenance: 30,
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Ambulance Fleet
      </Typography>

      {/* Search & Filter */}
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <TextField
          label="Search by Name or Location"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ minWidth: 250 }}
        />
        <TextField
          select
          label="Filter by Status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Available">Available</MenuItem>
          <MenuItem value="On Duty">On Duty</MenuItem>
          <MenuItem value="Maintenance">Maintenance</MenuItem>
        </TextField>
      </Box>

      {/* Ambulance Cards */}
      <Grid container spacing={3}>
        {filteredFleet.map((amb) => (
          <Grid item xs={12} md={3} key={amb.id}>
            <Paper
              sx={{
                p: 3,
                bgcolor:
                  amb.status === "Available"
                    ? "#4caf50"
                    : amb.status === "On Duty"
                    ? "#ff9800"
                    : "#f44336",
                color: "white",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
              }}
            >
              <Typography variant="h6">{amb.name}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Location: {amb.location}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Last Service: {amb.lastService}
              </Typography>

              {/* Status & Progress */}
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
                <Chip label={amb.status} sx={{ color: "white", borderColor: "white" }} variant="outlined" />
              </Box>
              <LinearProgress
                variant="determinate"
                value={statusProgress[amb.status]}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  mb: 1,
                  bgcolor: "rgba(255,255,255,0.3)",
                  "& .MuiLinearProgress-bar": { bgcolor: "white" },
                }}
              />

              {/* Action Button */}
              <Button size="small" variant="contained" color="primary" onClick={() => handleAssignDriver(amb.id)}>
                Assign Driver
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AmbulanceFleet;
