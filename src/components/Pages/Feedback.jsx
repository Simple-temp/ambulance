import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Rating,
  Stack,
} from "@mui/material";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    console.log("Rating:", rating);
    console.log("Comment:", comment);
    alert("Feedback submitted successfully!");
    // Reset
    setRating(0);
    setComment("");
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
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
        Please rate our service and leave your comments below.
      </Typography>

      <Stack spacing={3}>
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

        {/* Comment */}
        <TextField
          label="Your Comments"
          multiline
          minRows={4}
          fullWidth
          variant="outlined"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        {/* Submit Button */}
        <Box textAlign="right">
          <Button
            variant="contained"
            sx={{ backgroundColor: "#800000", "&:hover": { backgroundColor: "#660000" } }}
            onClick={handleSubmit}
          >
            Submit Feedback
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Feedback;
