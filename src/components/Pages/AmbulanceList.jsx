import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  TextField,
  MenuItem,
} from "@mui/material";

const AmbulanceList = () => {
  const [ambulances, setAmbulances] = useState([
    {
      id: 1,
      name: "Ambulance A",
      locationRange: "5-10 km",
      class: "High",
      costRange: "$50 - $100",
      averageDuration: "20 mins",
      availableLocations: [
        "Dhanmondi",
        "Gulshan",
        "Dhaka",
        "Banani",
        "Mirpur",
        "Uttara",
        "Khilgaon",
        "Mohammadpur",
      ],
      seatNumber: 4,
    },
    {
      id: 2,
      name: "Ambulance B",
      locationRange: "10-20 km",
      class: "Medium",
      costRange: "$40 - $90",
      averageDuration: "30 mins",
      availableLocations: [
        "Dhanmondi",
        "Tejgaon",
        "Shantinagar",
        "Mohakhali",
        "Bashundhara",
        "Farmgate",
        "Azimpur",
        "Rampura",
      ],
      seatNumber: 6,
    },
    {
      id: 3,
      name: "Ambulance C",
      locationRange: "0-15 km",
      class: "Low",
      costRange: "$30 - $70",
      averageDuration: "25 mins",
      availableLocations: [
        "Motijheel",
        "Malibagh",
        "Mirpur",
        "Gulshan",
        "Banani",
        "Khilkhet",
        "Shahbagh",
        "Dhanmondi",
      ],
      seatNumber: 3,
    },
    {
      id: 4,
      name: "Ambulance D",
      locationRange: "5-12 km",
      class: "High",
      costRange: "$60 - $120",
      averageDuration: "18 mins",
      availableLocations: [
        "Dhanmondi",
        "Gulshan",
        "Banani",
        "Bashundhara",
        "Tejgaon",
        "Uttara",
        "Khilgaon",
        "Mohammadpur",
      ],
      seatNumber: 5,
    },
    {
      id: 5,
      name: "Ambulance E",
      locationRange: "12-22 km",
      class: "Medium",
      costRange: "$45 - $95",
      averageDuration: "35 mins",
      availableLocations: [
        "Azimpur",
        "Farmgate",
        "Motijheel",
        "Malibagh",
        "Rampura",
        "Shantinagar",
        "Shahbagh",
        "Mohakhali",
      ],
      seatNumber: 7,
    },
    {
      id: 6,
      name: "Ambulance F",
      locationRange: "3-8 km",
      class: "Low",
      costRange: "$25 - $60",
      averageDuration: "15 mins",
      availableLocations: [
        "Gulshan",
        "Banani",
        "Tejgaon",
        "Farmgate",
        "Khilkhet",
        "Uttara",
        "Rampura",
        "Bashundhara",
      ],
      seatNumber: 2,
    },
    {
      id: 7,
      name: "Ambulance G",
      locationRange: "7-14 km",
      class: "High",
      costRange: "$55 - $110",
      averageDuration: "22 mins",
      availableLocations: [
        "Dhanmondi",
        "Mirpur",
        "Mohammadpur",
        "Banani",
        "Khilgaon",
        "Azimpur",
        "Malibagh",
        "Tejgaon",
      ],
      seatNumber: 5,
    },
    {
      id: 8,
      name: "Ambulance H",
      locationRange: "15-25 km",
      class: "Medium",
      costRange: "$50 - $105",
      averageDuration: "40 mins",
      availableLocations: [
        "Uttara",
        "Khilkhet",
        "Bashundhara",
        "Farmgate",
        "Rampura",
        "Shahbagh",
        "Mohakhali",
        "Banani",
      ],
      seatNumber: 6,
    },
    {
      id: 9,
      name: "Ambulance I",
      locationRange: "2-7 km",
      class: "Low",
      costRange: "$20 - $50",
      averageDuration: "12 mins",
      availableLocations: [
        "Dhanmondi",
        "Shahbagh",
        "Azimpur",
        "Motijheel",
        "Malibagh",
        "Rampura",
        "Farmgate",
        "Mirpur",
      ],
      seatNumber: 3,
    },
    {
      id: 10,
      name: "Ambulance J",
      locationRange: "8-18 km",
      class: "High",
      costRange: "$70 - $130",
      averageDuration: "28 mins",
      availableLocations: [
        "Banani",
        "Gulshan",
        "Bashundhara",
        "Uttara",
        "Khilgaon",
        "Tejgaon",
        "Farmgate",
        "Shahbagh",
      ],
      seatNumber: 4,
    },
  ]);

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Edit popup state
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEdit = (data) => {
    setEditData(data);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setAmbulances(ambulances.filter((a) => a.id !== id));
  };

  const handleClose = () => {
    setOpen(false);
    setEditData(null);
  };

  const handleUpdate = () => {
    setAmbulances(ambulances.map((a) => (a.id === editData.id ? editData : a)));
    handleClose();
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box p={3}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Location Range</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Cost Range</TableCell>
              <TableCell>Avg Duration</TableCell>
              <TableCell>Seats</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ambulances
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((a) => (
                <TableRow key={a.id}>
                  <TableCell>{a.id}</TableCell>
                  <TableCell>{a.name}</TableCell>
                  <TableCell>{a.locationRange}</TableCell>
                  <TableCell>
                    <Chip
                      label={a.class}
                      color={
                        a.class === "High"
                          ? "error"
                          : a.class === "Medium"
                          ? "warning"
                          : "success"
                      }
                    />
                  </TableCell>
                  <TableCell>{a.costRange}</TableCell>
                  <TableCell>{a.averageDuration}</TableCell>
                  <TableCell>{a.seatNumber}</TableCell>
                  <TableCell align="center">
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit()}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      size="small"
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(a.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={ambulances.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      {/* Edit Popup */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit Ambulance</DialogTitle>
        <DialogContent dividers>
          {/* {editData && (
            <Stack spacing={2} mt={1}>
              <TextField
                label="Name"
                name="name"
                value={editData.name}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Location Range"
                name="locationRange"
                value={editData.locationRange}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                select
                label="Class"
                name="class"
                value={editData.class}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </TextField>
              <TextField
                label="Cost Range"
                name="costRange"
                value={editData.costRange}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Average Duration"
                name="averageDuration"
                value={editData.averageDuration}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Seat Number"
                name="seatNumber"
                type="number"
                value={editData.seatNumber}
                onChange={handleChange}
                fullWidth
              />
            </Stack>
          )} */}
          <Stack spacing={2} mt={1}>
            <TextField
              label="Name"
              name="name"
              value={editData?.name || ""}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Location Range"
              name="locationRange"
              value={editData?.locationRange || ""}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              select
              label="Class"
              name="class"
              value={editData?.class || ""}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </TextField>
            <TextField
              label="Cost Range"
              name="costRange"
              value={editData?.costRange || ""}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Average Duration"
              name="averageDuration"
              value={editData?.averageDuration || ""}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Seat Number"
              name="seatNumber"
              type="number"
              value={editData?.seatNumber || ""}
              onChange={handleChange}
              fullWidth
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleUpdate}
            variant="contained"
            sx={{ bgcolor: "maroon", "&:hover": { bgcolor: "#800000" } }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AmbulanceList;
