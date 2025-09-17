import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FeedbackIcon from "@mui/icons-material/Feedback";

// New professional icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmergencyIcon from "@mui/icons-material/ReportProblem";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import AssessmentIcon from "@mui/icons-material/Assessment";

const UserSideBar = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: "280px",
          bgcolor: "#1e1e2f",
          color: "white",
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ textAlign: "center", mb: 3, fontWeight: "bold" }}
        >
          User Dashboard
        </Typography>

        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="profile"
              sx={{ "&.active": { bgcolor: "#33334d", borderRadius: "8px" } }}
            >
              <ListItemIcon>
                <AccountCircleIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="book-ambulance"
              sx={{ "&.active": { bgcolor: "#33334d", borderRadius: "8px" } }}
            >
              <ListItemIcon>
                <LocalHospitalIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Book Ambulance" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="ambulance-list"
              sx={{ "&.active": { bgcolor: "#33334d", borderRadius: "8px" } }}
            >
              <ListItemIcon>
                <LocalHospitalIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Ambulance List" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="history"
              sx={{ "&.active": { bgcolor: "#33334d", borderRadius: "8px" } }}
            >
              <ListItemIcon>
                <HistoryIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
          </ListItem>

          {/* New professional ambulance options */}
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="dashboard"
              sx={{ "&.active": { bgcolor: "#33334d", borderRadius: "8px" } }}
            >
              <ListItemIcon>
                <DashboardIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="emergency-requests"
              sx={{ "&.active": { bgcolor: "#33334d", borderRadius: "8px" } }}
            >
              <ListItemIcon>
                <EmergencyIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Emergency Requests" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="ambulance-fleet"
              sx={{ "&.active": { bgcolor: "#33334d", borderRadius: "8px" } }}
            >
              <ListItemIcon>
                <DirectionsCarIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Ambulance Fleet" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="medical-staff"
              sx={{ "&.active": { bgcolor: "#33334d", borderRadius: "8px" } }}
            >
              <ListItemIcon>
                <MedicalServicesIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Medical Staff" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="reports"
              sx={{ "&.active": { bgcolor: "#33334d", borderRadius: "8px" } }}
            >
              <ListItemIcon>
                <AssessmentIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="feedback"
              sx={{ "&.active": { bgcolor: "#33334d", borderRadius: "8px" } }}
            >
              <ListItemIcon>
                <FeedbackIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Feedback" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      {/* Right content */}
      <Box sx={{ flex: 1, p: 4, bgcolor: "#f9f9f9", overflowY: "auto" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default UserSideBar;
