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
} from "@mui/material";

const AmbulanceList = () => {
  const [ambulances, setAmbulances] = useState([
    {
      id: 1,
      name: "Ambulance A",
      locationRange: "5-10 km",
      costRange: "$50 - $100",
      averageDuration: "20 mins",
      seatNumber: 4,
    },
    {
      id: 2,
      name: "Ambulance B",
      locationRange: "10-20 km",
      costRange: "$40 - $90",
      averageDuration: "30 mins",
      seatNumber: 6,
    },
    {
      id: 3,
      name: "Ambulance C",
      locationRange: "0-15 km",
      costRange: "$30 - $70",
      averageDuration: "25 mins",
      seatNumber: 3,
    },
    {
      id: 4,
      name: "Ambulance D",
      locationRange: "5-12 km",
      costRange: "$60 - $120",
      averageDuration: "18 mins",
      seatNumber: 5,
    },
    {
      id: 5,
      name: "Ambulance E",
      locationRange: "12-22 km",
      costRange: "$45 - $95",
      averageDuration: "35 mins",
      seatNumber: 7,
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
