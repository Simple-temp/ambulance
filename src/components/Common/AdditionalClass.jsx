import React from "react";
import c1 from "../../assets/c1.avif";
import c2 from "../../assets/c2.webp";
import c3 from "../../assets/c3.webp";

const AdditionalClass = () => {
  return (
    <div
      className="additional-container"
      style={{
        marginTop: "60px",
        padding: "50px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #f5f7fa, #e4ebf0)",
      }}
    >
      {/* Heading */}
      <h1
        className="additional-heading"
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          color: "#1a237e",
          marginBottom: "20px",
          animation: "fadeInDown 1s ease",
        }}
      >
        About Our Ambulance Service
      </h1>

      {/* Paragraph */}
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 40px auto",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#444",
          animation: "fadeInUp 1.2s ease",
        }}
      >
        Our ambulance service is committed to providing <b>24/7 emergency
        medical support</b> with the fastest response times. Equipped with
        modern life-saving equipment and trained professionals, we ensure
        that every patient receives critical care during transit. Our goal is
        to save lives, reduce response times, and make emergency care more
        accessible to everyone.
      </p>

      {/* Image Row */}
      <div
        className="image-row"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {[c1, c2, c3].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Service ${idx + 1}`}
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
              animation: `fadeIn 1s ease ${idx * 0.3 + 0.5}s both`,
            }}
            className="about-image"
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }

          .about-image:hover {
            transform: scale(1.05);
            box-shadow: 0 12px 25px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </div>
  );
};

export default AdditionalClass;
