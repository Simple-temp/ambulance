import React, { useState } from "react";
import {
  Avatar,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    location: "New York, USA",
    gender: "Male",
    field: "Software Engineer",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    console.log("Updated Data:", formData);
    handleClose();
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Card
        sx={{
          width: 400,
          borderRadius: 3,
          boxShadow: 4,
          p: 3,
          textAlign: "center",
        }}
      >
        <Avatar
          alt="User Avatar"
          src="https://via.placeholder.com/150"
          sx={{
            width: 150,
            height: 150,
            margin: "auto",
            mb: 2,
            boxShadow: 3,
          }}
        />

        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {formData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formData.email}
          </Typography>
          <Divider sx={{ my: 2 }} />

          <Stack spacing={1.5} alignItems="center">
            <Typography variant="body1">
              <strong>Location:</strong> {formData.location}
            </Typography>
            <Typography variant="body1">
              <strong>Gender:</strong> {formData.gender}
            </Typography>
            <Typography variant="body1">
              <strong>Field:</strong> {formData.field}
            </Typography>
          </Stack>
        </CardContent>

        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ mt: 2, bgcolor: "maroon", "&:hover": { bgcolor: "#800000" } }}
        >
          Edit
        </Button>
      </Card>

      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
            <TextField
              label="Field"
              name="field"
              value={formData.field}
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

export default UserProfile;
