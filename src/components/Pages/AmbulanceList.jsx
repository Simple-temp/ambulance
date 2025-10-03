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
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  TextField,
  Chip,
} from "@mui/material";

const AmbulanceList = () => {
  const [ambulances, setAmbulances] = useState([
    {
      id: 1,
      name: "ICU Ambulance",
      type: "ICU",
      locationRange: "0-20 km",
      costRange: "$150 - $250",
      averageDuration: "15-25 mins",
      seatNumber: 4,
    },
    {
      id: 2,
      name: "CCU Ambulance",
      type: "CCU",
      locationRange: "5-15 km",
      costRange: "$120 - $200",
      averageDuration: "20 mins",
      seatNumber: 4,
    },
    {
      id: 3,
      name: "NICU Ambulance",
      type: "NICU",
      locationRange: "0-10 km",
      costRange: "$180 - $280",
      averageDuration: "18 mins",
      seatNumber: 2,
    },
    {
      id: 4,
      name: "Freezing Ambulance",
      type: "Freezing",
      locationRange: "10-30 km",
      costRange: "$200 - $400",
      averageDuration: "30 mins",
      seatNumber: 2,
    },
    {
      id: 5,
      name: "AC Ambulance",
      type: "AC",
      locationRange: "0-25 km",
      costRange: "$80 - $150",
      averageDuration: "22 mins",
      seatNumber: 5,
    },
    {
      id: 6,
      name: "Air Ambulance",
      type: "Air",
      locationRange: "Domestic & International",
      costRange: "$2000+",
      averageDuration: "Depends on distance",
      seatNumber: 6,
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

  // Color mapping for ambulance type
  const getTypeColor = (type) => {
    switch (type) {
      case "ICU":
        return "error"; // red
      case "CCU":
        return "warning"; // orange
      case "NICU":
        return "secondary"; // purple
      case "Freezing":
        return "info"; // blue
      case "AC":
        return "success"; // green
      case "Air":
        return "primary"; // dark blue
      default:
        return "default";
    }
  };

  return (
    <Box p={3}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Location Range</TableCell>
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
                  <TableCell>
                    <Chip
                      label={a.type}
                      color={getTypeColor(a.type)}
                      size="small"
                      sx={{ fontWeight: "bold" }}
                    />
                  </TableCell>
                  <TableCell>{a.locationRange}</TableCell>
                  <TableCell>{a.costRange}</TableCell>
                  <TableCell>{a.averageDuration}</TableCell>
                  <TableCell>{a.seatNumber}</TableCell>
                  <TableCell align="center">
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit(a)}
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
          <Stack spacing={2} mt={1}>
            <TextField
              label="Name"
              name="name"
              value={editData?.name || ""}
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
