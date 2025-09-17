import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Chip,
  Button,
  TextField,
  MenuItem,
  LinearProgress,
} from "@mui/material";

// 5 Dummy Requests + Request Time
const dummyRequests = [
  { id: 1, patient: "John Doe", location: "Dhanmondi", status: "Pending", priority: "High", time: "10:30 AM" },
  { id: 2, patient: "Jane Smith", location: "Tejgaon", status: "In Transit", priority: "Medium", time: "11:00 AM" },
  { id: 3, patient: "Ali Khan", location: "Kallyanpur", status: "Completed", priority: "Low", time: "9:45 AM" },
  { id: 4, patient: "Nabila Akter", location: "Mirpur", status: "Pending", priority: "High", time: "12:10 PM" },
//   { id: 5, patient: "Rafiq Ahmed", location: "Gulshan", status: "In Transit", priority: "Medium", time: "11:30 AM" },
];

const EmergencyRequests = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Filtered requests
  const filteredRequests = dummyRequests.filter((req) => {
    const matchesSearch =
      req.patient.toLowerCase().includes(search.toLowerCase()) ||
      req.location.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || req.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Dummy actions
  const handleAssignAmbulance = (id) => alert(`Assign ambulance to request ID: ${id}`);
  const handleMarkComplete = (id) => alert(`Mark request ID: ${id} as Completed`);
  const handleContactPatient = (id) => alert(`Contact patient for request ID: ${id}`);

  // Progress mapping
  const statusProgress = {
    Pending: 30,
    "In Transit": 70,
    Completed: 100,
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Emergency Requests
      </Typography>

      {/* Filters & Search */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Search by Patient or Location"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            select
            label="Filter by Status"
            fullWidth
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="In Transit">In Transit</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      {/* Emergency Requests Cards */}
      <Grid container spacing={3}>
        {filteredRequests.map((req) => (
          <Grid item xs={12} md={6} key={req.id}>
            <Paper
              sx={{
                p: 3,
                bgcolor:
                  req.status === "Completed"
                    ? "#4caf50"
                    : req.status === "In Transit"
                    ? "#ff9800"
                    : "#f44336",
                color: "white",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
              }}
            >
              <Typography variant="h6">{req.patient}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Location: {req.location} | Time: {req.time}
              </Typography>

              {/* Chips for Status & Priority */}
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
                <Chip label={req.status} sx={{ color: "white", borderColor: "white" }} variant="outlined" />
                <Chip
                  label={`Priority: ${req.priority}`}
                  sx={{
                    color:
                      req.priority === "High"
                        ? "#f44336"
                        : req.priority === "Medium"
                        ? "#ff9800"
                        : "#4caf50",
                    borderColor: "white",
                  }}
                  variant="outlined"
                />
              </Box>

              {/* Progress Bar */}
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2">Progress:</Typography>
                <LinearProgress
                  variant="determinate"
                  value={statusProgress[req.status]}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    bgcolor: "rgba(255,255,255,0.3)",
                    "& .MuiLinearProgress-bar": { bgcolor: "white" },
                  }}
                />
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                <Button size="small" variant="contained" color="primary" onClick={() => handleAssignAmbulance(req.id)}>
                  Assign Ambulance
                </Button>
                {req.status !== "Completed" && (
                  <Button size="small" variant="contained" color="success" onClick={() => handleMarkComplete(req.id)}>
                    Mark Complete
                  </Button>
                )}
                <Button size="small" variant="contained" color="secondary" onClick={() => handleContactPatient(req.id)}>
                  Contact Patient
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EmergencyRequests;
