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
  Slide,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// Smooth dialog transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UserProfile = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    location: "New York, USA",
    gender: "Male",
    field: "Software Engineer",
  });

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    console.log("Updated Data:", formData);
    handleCloseEdit();
  };

  const handleDelete = () => {
    console.log("Account Deleted!");
    setFormData({
      name: "",
      email: "",
      location: "",
      gender: "",
      field: "",
    });
    handleCloseDelete();
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="93vh"
      sx={{
        background: "linear-gradient(135deg, #1a1a2e, #16213e)",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: 420,
          borderRadius: 5,
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          backdropFilter: "blur(8px)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.2)",
          p: 3,
          textAlign: "center",
          transition: "0.4s",
          "&:hover": { boxShadow: "0 12px 40px rgba(0,0,0,0.5)", transform: "translateY(-5px)" },
        }}
      >
        <Avatar
          alt="User Avatar"
          src="https://via.placeholder.com/150"
          sx={{
            width: 140,
            height: 140,
            margin: "auto",
            mb: 2,
            border: "4px solid #fff",
            boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
            transition: "0.3s",
            "&:hover": { transform: "scale(1.07)" },
          }}
        />

        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom color="#fff">
            {formData.name || "No Name"}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            {formData.email || "No Email"}
          </Typography>
          <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.2)" }} />

          <Stack spacing={1.5} alignItems="center" color="#fff">
            <Typography variant="body1">
              <strong>Location:</strong> {formData.location || "N/A"}
            </Typography>
            <Typography variant="body1">
              <strong>Gender:</strong> {formData.gender || "N/A"}
            </Typography>
            {/* <Typography variant="body1">
              <strong>Field:</strong> {formData.field || "N/A"}
            </Typography> */}
          </Stack>
        </CardContent>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 3 }}
        >
          <Button
            startIcon={<EditIcon />}
            variant="contained"
            onClick={handleOpenEdit}
            sx={{
              background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
              "&:hover": { background: "linear-gradient(135deg, #e03e5a, #d73827)" },
              borderRadius: 30,
              px: 3,
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(255,65,108,0.4)",
            }}
          >
            Edit
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            variant="contained"
            onClick={handleOpenDelete}
            sx={{
              background: "linear-gradient(135deg, #ff0844, #ff5f6d)",
              "&:hover": { background: "linear-gradient(135deg, #e3003f, #e84162)" },
              borderRadius: 30,
              px: 3,
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(255,8,68,0.4)",
            }}
          >
            Delete
          </Button>
        </Stack>
      </Card>

      {/* Edit Profile Dialog */}
      <Dialog
        open={openEdit}
        onClose={handleCloseEdit}
        fullWidth
        maxWidth="sm"
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            borderRadius: 4,
            p: 1,
          },
        }}
      >
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2} mt={1}>
            <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
            <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth />
            <TextField label="Location" name="location" value={formData.location} onChange={handleChange} fullWidth />
            <TextField select label="Gender" name="gender" value={formData.gender} onChange={handleChange} fullWidth>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
            <TextField label="Field" name="field" value={formData.field} onChange={handleChange} fullWidth />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button
            onClick={handleUpdate}
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              "&:hover": { background: "linear-gradient(135deg, #5a6fd1, #653b91)" },
              borderRadius: 30,
              px: 3,
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(102,126,234,0.4)",
            }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            borderRadius: 4,
            p: 1,
          },
        }}
      >
        <DialogTitle>⚠️ Delete Account</DialogTitle>
        <DialogContent dividers>
          <Typography>
            Are you sure you want to <strong>permanently delete</strong> your account? <br />
            This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Cancel</Button>
          <Button
            onClick={handleDelete}
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #ff0844, #ff5f6d)",
              "&:hover": { background: "linear-gradient(135deg, #e3003f, #e84162)" },
              borderRadius: 30,
              px: 3,
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(255,8,68,0.4)",
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserProfile;
