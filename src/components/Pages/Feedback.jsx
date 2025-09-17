import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Rating,
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Switch,
  Snackbar,
  Alert,
} from "@mui/material";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [category, setCategory] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = () => {
    if (!category || !comment) {
      alert("Please select category and enter comment!");
      return;
    }

    const newFeedback = {
      rating,
      comment,
      category,
      anonymous,
      id: Date.now(),
    };

    setFeedbackList([newFeedback, ...feedbackList.slice(0, 2)]); // keep last 3
    setSnackbarOpen(true);

    // Reset form
    setRating(0);
    setComment("");
    setCategory("");
    setAnonymous(false);
  };

  return (
    <Box
      sx={{
        maxWidth: 700,
        margin: "auto",
        mt: 5,
        p: 4,
        bgcolor: "white",
        boxShadow: 3,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Give Your Feedback
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Please rate our service, select category and leave your comments below.
      </Typography>

      <Stack spacing={3}>
        {/* Category */}
        <FormControl fullWidth>
          <InputLabel>Feedback Category</InputLabel>
          <Select
            value={category}
            label="Feedback Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="Service">Service</MenuItem>
            <MenuItem value="Ambulance">Ambulance</MenuItem>
            <MenuItem value="Staff">Staff</MenuItem>
            <MenuItem value="App">App / Website</MenuItem>
          </Select>
        </FormControl>

        {/* Rating */}
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Your Rating
          </Typography>
          <Rating
            name="feedback-rating"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
            size="large"
          />
        </Box>

        {/* Anonymous Option */}
        {/* <FormControlLabel
          control={
            <Switch
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
            />
          }
          label="Submit Anonymously"
        /> */}

        {/* Comment */}
        <TextField
          label="Your Comments"
          multiline
          minRows={4}
          fullWidth
          variant="outlined"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          helperText={`${comment.length}/500`}
          inputProps={{ maxLength: 500 }}
        />

        {/* Submit Button */}
        <Box textAlign="right">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#800000",
              "&:hover": { backgroundColor: "#660000" },
            }}
            onClick={handleSubmit}
          >
            Submit Feedback
          </Button>
        </Box>
      </Stack>

      {/* Recent Feedback Preview */}
      {feedbackList.length > 0 && (
        <Box mt={5}>
          <Typography variant="h6" gutterBottom>
            Recent Feedback
          </Typography>
          {feedbackList.map((fb) => (
            <Paper
              key={fb.id}
              sx={{ p: 2, mb: 2, bgcolor: "#f5f5f5", borderRadius: 2 }}
            >
              <Typography variant="subtitle2" color="text.secondary">
                {fb.anonymous ? "Anonymous" : "User"} - {fb.category}
              </Typography>
              <Typography variant="body1">{fb.comment}</Typography>
              <Rating value={fb.rating} readOnly size="small" />
            </Paper>
          ))}
        </Box>
      )}

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Feedback submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Feedback;
