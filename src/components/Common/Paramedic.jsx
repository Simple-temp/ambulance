import React from "react";
import parademic from "../../assets/p.jpg";

const Paramedic = () => {
  return (
    <div
      className="parademic-container"
      style={{
        padding: "60px 20px",
        background: "linear-gradient(135deg, #f8fbff, #eef3f8)",
      }}
    >
      <div
        className="inner-parademic-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        {/* Left Content */}
        <div
          className="parademic-left"
          style={{
            flex: "1",
            minWidth: "320px",
            animation: "fadeInLeft 1s ease",
          }}
        >
          <h2
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "#1a237e",
              marginBottom: "20px",
            }}
          >
            Paramedic Training Program
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#444",
              marginBottom: "20px",
            }}
          >
            Our <b>Paramedic Program</b> is designed to prepare students for
            high-pressure emergency situations. Trainees learn advanced
            life-saving techniques, patient assessment, trauma care, and
            emergency response protocols.
          </p>
          <i
            style={{
              display: "block",
              fontSize: "1rem",
              color: "#666",
              marginBottom: "20px",
            }}
          >
            With experienced instructors and hands-on field training, we
            ensure our graduates are ready to serve their communities with
            confidence and skill.
          </i>
          <span
            style={{
              display: "inline-block",
              padding: "10px 20px",
              background: "#e53935",
              color: "#fff",
              borderRadius: "6px",
              fontWeight: "600",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "transform 0.3s ease",
            }}
            className="cta-btn"
          >
            🚑 Pass Rate: 96% | Retention: 92%
          </span>
        </div>

        {/* Right Image */}
        <div
          className="parademic-right"
          style={{
            flex: "1",
            minWidth: "320px",
            textAlign: "center",
            animation: "fadeInRight 1s ease",
          }}
        >
          <img
            src={parademic}
            alt="Paramedic Training"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              transition: "transform 0.4s ease",
            }}
            className="paramedic-img"
          />
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .paramedic-img:hover {
            transform: scale(1.05);
          }
          .cta-btn:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default Paramedic;
