import React from "react";
import r1 from "../../assets/r1.jpg";
import r2 from "../../assets/r2.webp";
import r3 from "../../assets/r3.webp";

const data = [
  {
    id: 1,
    img: r1,
    title: "Continuing Education",
    desc: "Access structured learning modules and advanced workshops designed to keep medical professionals up to date with the latest emergency care practices.",
  },
  // {
  //   id: 2,
  //   img: r2,
  //   title: "Online Certification",
  //   desc: "Earn recognized certifications through flexible online training programs, helping you advance your career while maintaining your busy schedule.",
  // },
  {
    id: 3,
    img: r3,
    title: "Paramedic Training",
    desc: "Get hands-on experience with real-world simulations and guidance from experienced paramedics to build confidence and skills in emergency response.",
  },
];

const OurResource = () => {
  return (
    <div
      className="resource-container"
      style={{
        padding: "60px 20px",
        background: "linear-gradient(135deg, #f9fafc, #eef2f7)",
      }}
    >
      <h2
        className="resource-title"
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "700",
          color: "#1a237e",
          marginBottom: "40px",
        }}
      >
        Our Resources
      </h2>

      <div
        className="resource-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {data.map((item) => (
          <div
            className="inner-resource-container"
            key={item.id}
            style={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              background: "#fff",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
            }}
          >
            {/* Image with overlay */}
            <div style={{ position: "relative" }}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  display: "block",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                }}
                className="img-overlay"
              />
            </div>

            {/* Info Section */}
            <div
              className="resources-info"
              style={{
                padding: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#e53935",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#444",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                {item.desc}
              </p>
              <button
                className="resources-btn"
                style={{
                  padding: "10px 20px",
                  background: "#1a237e",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background 0.3s ease, transform 0.3s ease",
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Hover Styles */}
      <style>
        {`
          .inner-resource-container:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          }
          .inner-resource-container:hover .img-overlay {
            opacity: 1;
          }
          .resources-btn:hover {
            background: #e53935;
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default OurResource;
