import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

// Mock data
const locations = {
  Dhanmondi: ["Dhanmondi 1", "Dhanmondi 2", "Dhanmondi 3"],
  Tejgaon: ["Tejgaon North", "Tejgaon South"],
  KathanBagan: ["KathanBagan East", "KathanBagan West"],
  Kolabagan: ["Kolabagan Central", "Kolabagan North"],
};

const ambulances = [
  { id: 1, name: "Ambulance A", location: "Dhanmondi 1", eta: 10 },
  { id: 2, name: "Ambulance B", location: "Tejgaon North", eta: 12 },
  { id: 3, name: "Ambulance C", location: "Kolabagan Central", eta: 15 },
  { id: 4, name: "Ambulance D", location: "KathanBagan East", eta: 8 },
];

const BookAmbulance = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    mainLocation: "",
    subLocation: "",
  });

  const [subLocations, setSubLocations] = useState([]);
  const [nearestAmbulances, setNearestAmbulances] = useState([]);
  const [selectedAmbulance, setSelectedAmbulance] = useState("");
  const [booked, setBooked] = useState([]);
  const [timers, setTimers] = useState({});

  // Update sub-locations when main location changes
  useEffect(() => {
    if (user.mainLocation) {
      setSubLocations(locations[user.mainLocation] || []);
      setUser((prev) => ({ ...prev, subLocation: "" }));
    }
  }, [user.mainLocation]);

  // Update nearest ambulances based on sub-location
  useEffect(() => {
    if (user.subLocation) {
      const filtered = ambulances.filter(
        (a) => a.location === user.subLocation
      );
      setNearestAmbulances(filtered);
    } else {
      setNearestAmbulances([]);
    }
  }, [user.subLocation]);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) => {
        const updated = {};
        Object.keys(prev).forEach((id) => {
          updated[id] = prev[id] > 0 ? prev[id] - 1 : 0;
        });
        return updated;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBook = () => {
    if (!selectedAmbulance) return;
    const ambulance = nearestAmbulances.find(
      (a) => a.id === parseInt(selectedAmbulance)
    );
    if (ambulance && !booked.find((b) => b.id === ambulance.id)) {
      setBooked([...booked, ambulance]);
      setTimers((prev) => ({ ...prev, [ambulance.id]: ambulance.eta * 60 }));
    }
  };

  const handleCancel = (id) => {
    setBooked(booked.filter((b) => b.id !== id));
    setTimers((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

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
        maxWidth: 900,
        margin: "auto",
        mt: 5,
        p: 4,
        bgcolor: "white",
        boxShadow: 3,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Book Ambulance
      </Typography>

      {/* User Info */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="subtitle1">
          <strong>Name:</strong> {user.name}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Email:</strong> {user.email}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Phone:</strong> {user.phone}
        </Typography>
      </Paper>

      {/* Location Selection */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={4}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Main Location</InputLabel>
          <Select
            value={user.mainLocation}
            label="Main Location"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, mainLocation: e.target.value }))
            }
          >
            {Object.keys(locations).map((loc) => (
              <MenuItem key={loc} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Sub Location</InputLabel>
          <Select
            value={user.subLocation}
            label="Sub Location"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, subLocation: e.target.value }))
            }
            disabled={!user.mainLocation}
          >
            {subLocations.map((sub) => (
              <MenuItem key={sub} value={sub}>
                {sub}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Nearest Ambulance</InputLabel>
          <Select
            value={selectedAmbulance}
            label="Nearest Ambulance"
            onChange={(e) => setSelectedAmbulance(e.target.value)}
            disabled={!user.subLocation}
          >
            {nearestAmbulances.map((amb) => (
              <MenuItem key={amb.id} value={amb.id}>
                {amb.name} - ETA {amb.eta} mins
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#800000", "&:hover": { backgroundColor: "#660000" } }}
          onClick={handleBook}
          disabled={!selectedAmbulance}
        >
          Book Ambulance
        </Button>
      </Stack>

      {/* Booked Ambulances Table */}
      {booked.length > 0 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Booked Ambulances
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ambulance Name</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>ETA</TableCell>
                <TableCell>Countdown</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {booked.map((b) => (
                <TableRow key={b.id}>
                  <TableCell>{b.name}</TableCell>
                  <TableCell>{b.location}</TableCell>
                  <TableCell>{b.eta} mins</TableCell>
                  <TableCell>{formatTime(timers[b.id])}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleCancel(b.id)}
                    >
                      Cancel
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Box>
  );
};

export default BookAmbulance;
