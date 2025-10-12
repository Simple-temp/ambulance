import React from "react";
import { motion } from "framer-motion";


// ✅ Realistic ambulance service location data
const data = [
  {
    id: 1,
    title: "Dhaka Central Station",
    img: "https://24ambulance.com/wp-content/uploads/2023/12/Ambulance-service-24Ambulance-scaled.jpg",
    description:
      "Our main ambulance hub located in Dhaka city ensures the fastest emergency response within 10–15 minutes across the metropolitan area.",
  },
  {
    id: 2,
    title: "Uttara Emergency Point",
    img: "https://hawladerambulance.com/wp-content/uploads/2022/01/Dhaka-ambulance-service-hawlader.jpg",
    description:
      "Covering Uttara, Tongi, and airport zones with 24/7 standby ambulances equipped with life-saving medical equipment.",
  },
  {
    id: 3,
    title: "Mirpur Medical Hub",
    img: "https://ambulanceservicemirpur.com/wp-content/uploads/2025/01/2-1-1024x768.jpeg",
    description:
      "Specialized for quick transfers to National Heart Foundation, Kidney Hospital, and nearby critical care centers.",
  },
  {
    id: 4,
    title: "Banani Fast Response Unit",
    img: "https://ambulancelagbe.com/wp-content/uploads/2025/05/Bonani-400x250.jpg",
    description:
      "Dedicated to serving Banani, Gulshan, and Mohakhali areas, ensuring high-priority emergency reach within 8 minutes.",
  },
  {
    id: 5,
    title: "Dhanmondi Medical Corridor",
    img: "https://ambulancelagbe.com/wp-content/uploads/2025/07/Dhanmondi-Ambulance-Service.jpg",
    description:
      "Strategically located near major hospitals for rapid patient transport and advanced medical support in Dhanmondi and Lalmatia.",
  },
  {
    id: 6,
    title: "Savar Highway Point",
    img: "https://gdb.voanews.com/0136faa7-0dc6-4e08-9a17-87bec6822dfc_cx0_cy5_cw0_w1080_h608_s.jpg",
    description:
      "Covers Nabinagar, Savar EPZ, and Jahangirnagar University areas with highway-ready ambulances for accident response.",
  },
  {
    id: 7,
    title: "Gazipur Industrial Zone",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4HyXgkFaYyDxQi4TxB4mKe2d4qgrhCOjLg&s",
    description:
      "Provides emergency medical coverage to industrial workers in Gazipur, Konabari, and Boardbazar regions.",
  },
  {
    id: 8,
    title: "Narayanganj River Port Station",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZemxng2iuAOYobXvzsuZsigG7275xnLdckkbrOmzk33irjsUD3DmJ8tUy7TmA4iJyxA&usqp=CAU",
    description:
      "Equipped with specialized ambulances for port and factory emergencies around Narayanganj and Fatullah.",
  },
  {
    id: 9,
    title: "Keraniganj Support Base",
    img: "https://ambulancebd24.com/wp-content/uploads/2023/04/Freezing-Ambulance-khulna.jpg",
    description:
      "Ensures quick access to the southern Dhaka region, including Keraniganj and Basila areas, during high-traffic hours.",
  },
  {
    id: 10,
    title: "Ashulia Rapid Response Base",
    img: "https://ambulancebd24.com/wp-content/uploads/2023/04/Freezing-Ambulance-khulna.jpg",
    description:
      "Supports emergency evacuations and road accident rescues in Ashulia, Savar Bazar, and DEPZ surroundings.",
  },
];

const Locations = () => {
  return (
    <div className="location-container" style={{ padding: "60px 20px" }}>
      <motion.div
        className="location-inner"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .3 }}
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
                    color: "#b71c1c",
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
