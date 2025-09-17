import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Dummy Data for Analytics
const reportsData = [
  { title: "Total Trips", value: 56, color: "#2196f3" },
  { title: "Completed Requests", value: 48, color: "#4caf50" },
  { title: "Pending Requests", value: 8, color: "#ff9800" },
  { title: "Cancelled Requests", value: 2, color: "#f44336" },
  { title: "Active Ambulances", value: 12, color: "#4db6ac" },
  { title: "Available Ambulances", value: 7, color: "#81c784" },
  { title: "Staff On Duty", value: 15, color: "#64b5f6" },
  { title: "Staff On Break", value: 3, color: "#ffb74d" },
  { title: "Emergency Alerts", value: 5, color: "#e57373" },
  { title: "Avg Response Time (min)", value: 12, color: "#ba68c8" },
];

// Data for Bar Chart
const tripChartData = [
  { name: "Mon", Trips: 5 },
  { name: "Tue", Trips: 8 },
  { name: "Wed", Trips: 7 },
  { name: "Thu", Trips: 6 },
  { name: "Fri", Trips: 10 },
  { name: "Sat", Trips: 12 },
  { name: "Sun", Trips: 8 },
];

// Data for Pie Chart
const requestStatusData = [
  { name: "Completed", value: 48 },
  { name: "Pending", value: 8 },
  { name: "Cancelled", value: 2 },
];
const pieColors = ["#4caf50", "#ff9800", "#f44336"];

const Reports = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Reports & Analytics
      </Typography>

      {/* 10 Report Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {reportsData.map((report, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Paper
              sx={{
                p: 3,
                bgcolor: report.color,
                color: "white",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
              }}
            >
              <Typography variant="subtitle2">{report.title}</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {report.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Bar Chart for Weekly Trips */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Weekly Trips
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={tripChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Trips" fill="#2196f3" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      {/* Pie Chart for Request Status */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Request Status Distribution
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={requestStatusData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {requestStatusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default Reports;
