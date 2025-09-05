import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const UserSettings = () => {
  const [reason, setReason] = useState("");

  const handleDelete = () => {
    // Here you can handle the deletion logic
    console.log("Account delete reason:", reason);
    alert("Account deletion request submitted!");
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 600, margin: "auto", mt: 5 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Delete Account
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        We're sorry to see you go. Please tell us why you want to delete your account:
      </Typography>

      <TextField
        label="Reason for deleting account"
        multiline
        minRows={4}
        fullWidth
        variant="outlined"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <Stack direction="row" justifyContent="flex-end" mt={3}>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
        >
          Delete Account
        </Button>
      </Stack>
    </Paper>
  );
};

export default UserSettings;
