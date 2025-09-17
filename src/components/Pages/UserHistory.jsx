import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer, Button } from "@mui/material";

const dummyData = [
  { id: 1, name: "Alice", email: "alice@mail.com", number: "12345", ambulance: "Ambulance A", location: "NY", duration: "30m", route: "NY-01", time: "12:30 PM" },
  { id: 2, name: "Bob", email: "bob@mail.com", number: "67890", ambulance: "Ambulance B", location: "LA", duration: "40m", route: "LA-02", time: "01:00 PM" },
  { id: 3, name: "Charlie", email: "charlie@mail.com", number: "11111", ambulance: "Ambulance C", location: "TX", duration: "25m", route: "TX-03", time: "11:45 AM" },
  { id: 4, name: "Daisy", email: "daisy@mail.com", number: "22222", ambulance: "Ambulance D", location: "FL", duration: "50m", route: "FL-04", time: "02:15 PM" },
  { id: 5, name: "Ethan", email: "ethan@mail.com", number: "33333", ambulance: "Ambulance E", location: "WA", duration: "35m", route: "WA-05", time: "03:10 PM" },
];

const UserHistory = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ bgcolor: "#333" }}>
          <TableRow>
            <TableCell sx={{ color: "white" }}>ID</TableCell>
            <TableCell sx={{ color: "white" }}>Name</TableCell>
            <TableCell sx={{ color: "white" }}>Email</TableCell>
            <TableCell sx={{ color: "white" }}>Number</TableCell>
            <TableCell sx={{ color: "white" }}>Ambulance</TableCell>
            <TableCell sx={{ color: "white" }}>Location</TableCell>
            <TableCell sx={{ color: "white" }}>Duration</TableCell>
            <TableCell sx={{ color: "white" }}>Route</TableCell>
            <TableCell sx={{ color: "white" }}>Approx Time</TableCell>
            <TableCell sx={{ color: "white" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.ambulance}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.duration}</TableCell>
              <TableCell>{row.route}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>
                <Button color="error" variant="contained" size="small" sx={{ mr: 1 }}>
                  Cancel
                </Button>
                <Button color="warning" variant="contained" size="small">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserHistory;
