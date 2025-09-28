import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, Container, Button } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const VideoSection = () => {
  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(to right, #e3f2fd, #bbdefb)",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            See How Our Ambulance Service Saves Lives
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            sx={{ maxWidth: 700, mx: "auto", mb: 5 }}
          >
            Watch this short video to understand how our emergency ambulance
            team provides fast, reliable, and life-saving support 24/7.
          </Typography>
        </motion.div>

        {/* Video Wrapper */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "900px",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            {/* Embedded YouTube Video */}
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/g8bdycR6YnI"
              title="Ambulance Service Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "12px" }}
            ></iframe>
          </Box>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ marginTop: "2rem", textAlign: "center" }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<PlayCircleOutlineIcon />}
            sx={{ borderRadius: "30px" }}
            href="https://www.youtube.com/watch?v=g8bdycR6YnI"
            target="_blank"
          >
            Watch Full Video
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default VideoSection;
