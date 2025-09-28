import { Container, Grid, Divider, IconButton, Box, Typography, TextField, Button } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#0f172a", color: "white", pt: 6, pb: 3, mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Left */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Subscribe to Our Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "#cbd5e1" }}>
              Stay updated with the latest news and offers.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                size="small"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": { borderRadius: 1 },
                }}
              />
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
            </Box>
          </Grid>

          {/* Right */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
              {["Home", "About", "Services", "Contact"].map(
                (menu) => (
                  <Typography
                    key={menu}
                    variant="body2"
                    sx={{ cursor: "pointer", "&:hover": { color: "#38bdf8" } }}
                  >
                    {menu}
                  </Typography>
                )
              )}
            </Box>
            <Typography variant="body2" sx={{ color: "#cbd5e1" }}>
              Explore our services and enjoy seamless support from our dedicated
              team.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "#334155" }} />

        {/* Bottom */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "#94a3b8" }}>
            © 2025 YourCompany. All rights reserved.
          </Typography>
          <Box>
            {[Facebook, Twitter, Instagram, LinkedIn, YouTube].map(
              (Icon, idx) => (
                <IconButton key={idx} color="inherit">
                  <Icon />
                </IconButton>
              )
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;