import React from "react";
import t1 from "../../assets/t1.avif";
import t2 from "../../assets/t2.webp";

const Testimonial = () => {
  return (
    <div
      className="testimonial-container"
      style={{
        padding: "60px 20px",
        background: "linear-gradient(135deg, #f9fafc, #eef2f7)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "700",
          color: "#1a237e",
          marginBottom: "50px",
        }}
      >
        What Our Clients Say
      </h2>

      <div
        className="testimonial-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Testimonial Card 1 */}
        <div
          className="testimonial-box"
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
          }}
        >
          <div className="testimonial-image">
            <img
              src={t1}
              alt="Jane Doe"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "20px",
                border: "4px solid #e53935",
              }}
            />
          </div>
          <div className="testimonial-text">
            <p
              style={{
                fontStyle: "italic",
                fontSize: "1.1rem",
                color: "#444",
                marginBottom: "20px",
              }}
            >
              "This platform really helped me grow my business. It's intuitive,
              fast, and support is amazing!"
            </p>
            <h4 style={{ fontWeight: "700", color: "#1a237e" }}>Jane Doe</h4>
            <small style={{ color: "#666" }}>CEO, StartupX</small>
          </div>
        </div>

        {/* Testimonial Card 2 */}
        <div
          className="testimonial-box"
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
          }}
        >
          <div className="testimonial-image">
            <img
              src={t2}
              alt="John Smith"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "20px",
                border: "4px solid #e53935",
              }}
            />
          </div>
          <div className="testimonial-text">
            <p
              style={{
                fontStyle: "italic",
                fontSize: "1.1rem",
                color: "#444",
                marginBottom: "20px",
              }}
            >
              "A truly transformative experience. I highly recommend it to
              anyone looking to improve efficiency."
            </p>
            <h4 style={{ fontWeight: "700", color: "#1a237e" }}>John Smith</h4>
            <small style={{ color: "#666" }}>
              Developer Advocate, CodeCorp
            </small>
          </div>
        </div>
      </div>

      {/* Hover Effects */}
      <style>
        {`
          .testimonial-box:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </div>
  );
};

export default Testimonial;
