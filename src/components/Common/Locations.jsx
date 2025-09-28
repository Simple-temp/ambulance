import React from "react";
import { motion } from "framer-motion";
import location1 from "../../assets/l1.jpg";
import location2 from "../../assets/l2.jpeg";
import location3 from "../../assets/l3.webp";

// ✅ Realistic ambulance service location data
const data = [
  {
    id: 1,
    title: "Dhaka Central Station",
    img: location1,
    description:
      "Our main ambulance hub located in Dhaka city ensures the fastest emergency response within 10–15 minutes across the metropolitan area.",
  },
  {
    id: 2,
    title: "Uttara Emergency Point",
    img: location2,
    description:
      "Covering Uttara, Tongi, and airport zones with 24/7 standby ambulances equipped with life-saving medical equipment.",
  },
  {
    id: 3,
    title: "Mirpur Medical Hub",
    img: location3,
    description:
      "Specialized for quick transfers to National Heart Foundation, Kidney Hospital, and nearby critical care centers.",
  },
];

const Locations = () => {
  return (
    <div className="location-container" style={{ padding: "60px 20px" }}>
      <motion.div
        className="location-inner"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#b71c1c",
          }}
        >
          🚑 Our Emergency Coverage Points
        </h1>

        <div
          className="location-box-wrapper"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {data.map((item, index) => (
            <motion.div
              className="location-inner-box"
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: "#fff",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                transition: "0.3s",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "20px" }}>
                <h4
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    color: "#ffffffff",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    color: "#ffffffff",
                    margin: "10px 0 20px 0",
                    fontSize: "0.95rem",
                  }}
                >
                  {item.description}
                </p>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#d32f2f",
                    color: "#fff",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#b71c1c",
                    border: "none",
                    borderRadius: "25px",
                    color: "#fff",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Locations;
