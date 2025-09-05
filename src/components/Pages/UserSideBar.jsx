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
import SettingsIcon from "@mui/icons-material/Settings";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FeedbackIcon from "@mui/icons-material/Feedback";

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
              sx={{
                "&.active": {
                  bgcolor: "#33334d",
                  borderRadius: "8px",
                },
              }}
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
              to="history"
              sx={{
                "&.active": {
                  bgcolor: "#33334d",
                  borderRadius: "8px",
                },
              }}
            >
              <ListItemIcon>
                <HistoryIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="book-ambulance"
              sx={{
                "&.active": {
                  bgcolor: "#33334d",
                  borderRadius: "8px",
                },
              }}
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
              to="track-ambulance"
              sx={{
                "&.active": {
                  bgcolor: "#33334d",
                  borderRadius: "8px",
                },
              }}
            >
              <ListItemIcon>
                <LocationOnIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Tracking Ambulance" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="feedback"
              sx={{
                "&.active": {
                  bgcolor: "#33334d",
                  borderRadius: "8px",
                },
              }}
            >
              <ListItemIcon>
                <FeedbackIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Feedback" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="settings"
              sx={{
                "&.active": {
                  bgcolor: "#33334d",
                  borderRadius: "8px",
                },
              }}
            >
              <ListItemIcon>
                <SettingsIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      {/* Right content */}
      <Box
        sx={{
          flex: 1,
          p: 4,
          bgcolor: "#f9f9f9",
          overflowY: "auto",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default UserSideBar;
