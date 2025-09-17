import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  LinearProgress,
} from "@mui/material";

// 10 Medical Staff with scheduled ambulance, status, shift, performance
const staffData = [
  { id: 1, name: "Dr. Sarah Khan", role: "Doctor", scheduledAmbulance: "A1", status: "Active", shift: "08:00 - 16:00", performance: 95 },
  { id: 2, name: "Ali Rahman", role: "Paramedic", scheduledAmbulance: "B2", status: "On Break", shift: "09:00 - 17:00", performance: 80 },
  { id: 3, name: "Nabila Akter", role: "Nurse", scheduledAmbulance: "C3", status: "Active", shift: "07:00 - 15:00", performance: 88 },
  { id: 4, name: "Dr. Kamal Hossain", role: "Doctor", scheduledAmbulance: "D4", status: "Off Duty", shift: "10:00 - 18:00", performance: 70 },
  { id: 5, name: "Farzana Begum", role: "Nurse", scheduledAmbulance: "E5", status: "Active", shift: "08:00 - 16:00", performance: 92 },
  { id: 6, name: "Rafiq Ahmed", role: "Paramedic", scheduledAmbulance: "F6", status: "On Break", shift: "09:00 - 17:00", performance: 78 },
  { id: 7, name: "Dr. Meherun Nahar", role: "Doctor", scheduledAmbulance: "G7", status: "Active", shift: "08:00 - 16:00", performance: 90 },
  { id: 8, name: "Hasan Mahmud", role: "Paramedic", scheduledAmbulance: "H8", status: "Active", shift: "07:00 - 15:00", performance: 85 },
];

// Map status to chip color
const statusColor = {
  Active: "success",
  "On Break": "warning",
  "Off Duty": "default",
};

// Map role to badge color
const roleColor = {
  Doctor: "primary",
  Nurse: "secondary",
  Paramedic: "info",
};

const MedicalStaff = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Medical Staff Schedule
      </Typography>

      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#1e1e2f", "& th": { color: "white" } }}>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Scheduled Ambulance</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Shift Hours</TableCell>
              <TableCell>Performance</TableCell>
              <TableCell>Contact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staffData.map((staff) => (
              <TableRow
                key={staff.id}
                sx={{ "&:hover": { bgcolor: "#f5f5f5", transition: "0.3s" }, cursor: "pointer" }}
              >
                <TableCell>{staff.name}</TableCell>
                <TableCell>
                  <Chip label={staff.role} color={roleColor[staff.role]} />
                </TableCell>
                <TableCell>{staff.scheduledAmbulance}</TableCell>
                <TableCell>
                  <Chip label={staff.status} color={statusColor[staff.status]} />
                </TableCell>
                <TableCell>{staff.shift}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="body2">{staff.performance}%</Typography>
                    <LinearProgress
                      variant="determinate"
                      value={staff.performance}
                      sx={{
                        flex: 1,
                        height: 10,
                        borderRadius: 5,
                        bgcolor: "rgba(0,0,0,0.1)",
                        "& .MuiLinearProgress-bar": { bgcolor: "#1976d2" },
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Button variant="contained" size="small" color="primary" onClick={() => alert(`Contacting ${staff.name}`)}>
                    Contact
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MedicalStaff;
