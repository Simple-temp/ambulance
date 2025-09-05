import React from "react";
import {
  Avatar,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
} from "@mui/material";

const UserProfile = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
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
            John Doe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            johndoe@example.com
          </Typography>
          <Divider sx={{ my: 2 }} />

          <Stack spacing={1.5} alignItems="center">
            <Typography variant="body1">
              <strong>Location:</strong> New York, USA
            </Typography>
            <Typography variant="body1">
              <strong>Phone:</strong> +1 234 567 890
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfile;
