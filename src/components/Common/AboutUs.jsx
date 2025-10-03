import React, { useEffect, useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Simulate fetching stats
const fetchStats = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalAmbulances: 25,
        totalStaff: 18,
        totalEmergenciesHandled: 135,
      });
    }, 1000);
  });
};

const AboutUs = () => {
  const [stats, setStats] = useState(null);

  const faqs = [
    {
      question: "How do I book an ambulance?",
      answer: "You can book an ambulance directly from our online booking system available 24/7.",
    },
    {
      question: "What types of ambulances do you provide?",
      answer: "We provide ICU, CCU, NICU, AC, Air, and Freezing ambulances to meet all medical needs.",
    },
    {
      question: "Is your service available all over Bangladesh?",
      answer: "Yes, our emergency service operates across major cities and towns to ensure timely response.",
    },
  ];

  useEffect(() => {
    fetchStats().then((data) => setStats(data));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "flex-start",
        justifyContent: "space-between",
        maxWidth: 1200,
        mx: "auto",
        p: 3,
        gap: 6,
      }}
    >
      {/* Left Side - Content */}
      <Box sx={{ flex: 7 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#0f172a" }}
        >
          About Us
        </Typography>

        {/* Stats Cards */}
        {stats && (
          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            <Paper sx={{ p: 2, flex: 1, minWidth: 150, textAlign: "center", bgcolor: "#e0f2fe" }}>
              <Typography variant="h6" fontWeight="bold" color="#0369a1">
                {stats.totalAmbulances}
              </Typography>
              <Typography variant="body2" color="#075985">Ambulances</Typography>
            </Paper>
            <Paper sx={{ p: 2, flex: 1, minWidth: 150, textAlign: "center", bgcolor: "#fef3c7" }}>
              <Typography variant="h6" fontWeight="bold" color="#b45309">
                {stats.totalStaff}
              </Typography>
              <Typography variant="body2" color="#78350f">Staff</Typography>
            </Paper>
            <Paper sx={{ p: 2, flex: 1, minWidth: 150, textAlign: "center", bgcolor: "#dcfce7" }}>
              <Typography variant="h6" fontWeight="bold" color="#15803d">
                {stats.totalEmergenciesHandled}
              </Typography>
              <Typography variant="body2" color="#166534">Emergencies</Typography>
            </Paper>
          </Box>
        )}

        <Typography
          variant="body1"
          sx={{ mb: 3, color: "#475569", lineHeight: 1.8 }}
        >
          AmbulanceBD24 is Bangladesh's leading online ambulance service, providing
          fast, reliable, and safe emergency medical transport. Our modern fleet
          and professional medical staff ensure patients get timely care, no matter
          the location. We are dedicated to supporting communities in need with
          prompt and professional services.
        </Typography>

        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 2, color: "#1e40af" }}
        >
          Frequently Asked Questions
        </Typography>

        {faqs.map((faq, idx) => (
          <Accordion key={idx} sx={{ mb: 2, boxShadow: 1, borderRadius: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: "bold", color: "#1e3a8a" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#334155" }}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Right Side - Image */}
      <Box sx={{ flex: 5 }}>
        <img
          src="https://ambulancebd24.com/wp-content/uploads/2022/10/Online-Ambulance-Service-in-Bangladesh.png"
          alt="About Us"
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutUs;
