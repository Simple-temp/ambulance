import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
} from "recharts";

// Dummy Data
const activeData = [
  { name: 'A1', trips: 5 },
  { name: 'B2', trips: 3 },
  { name: 'C3', trips: 4 },
  { name: 'D4', trips: 2 },
];

const dailyRequests = [
  { day: 'Mon', requests: 3 },
  { day: 'Tue', requests: 5 },
  { day: 'Wed', requests: 2 },
  { day: 'Thu', requests: 4 },
  { day: 'Fri', requests: 6 },
];

const ambulanceStatus = [
  { name: 'Available', value: 6 },
  { name: 'On Duty', value: 4 },
  { name: 'Maintenance', value: 2 },
];

const tripTrend = [
  { day: 'Mon', trips: 2 },
  { day: 'Tue', trips: 3 },
  { day: 'Wed', trips: 5 },
  { day: 'Thu', trips: 4 },
  { day: 'Fri', trips: 6 },
];

const COLORS = ['#4caf50', '#ff9800', '#f44336'];

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Dashboard Overview
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, bgcolor: "#4caf50", color: "white", transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}>
            <Typography variant="h6">Active Ambulances</Typography>
            <Typography variant="h4">12</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, bgcolor: "#2196f3", color: "white", transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}>
            <Typography variant="h6">Pending Requests</Typography>
            <Typography variant="h4">5</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, bgcolor: "#ff9800", color: "white", transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}>
            <Typography variant="h6">Completed Trips</Typography>
            <Typography variant="h4">28</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, bgcolor: "#9c27b0", color: "white", transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}>
            <Typography variant="h6">Cancelled Requests</Typography>
            <Typography variant="h4">2</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3}>
        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Trips per Ambulance</Typography>
            <BarChart width={500} height={250} data={activeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="trips" fill="#4caf50" />
            </BarChart>
          </Paper>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Daily Requests</Typography>
            <LineChart width={500} height={250} data={dailyRequests}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="requests" stroke="#2196f3" strokeWidth={3} />
            </LineChart>
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Ambulance Status</Typography>
            <PieChart width={500} height={250}>
              <Pie
                data={ambulanceStatus}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {ambulanceStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </Paper>
        </Grid>

        {/* Area Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Trip Trend (Weekly)</Typography>
            <AreaChart width={500} height={250} data={tripTrend} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorTrips" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff9800" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ff9800" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="trips" stroke="#ff9800" fillOpacity={1} fill="url(#colorTrips)" />
            </AreaChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
