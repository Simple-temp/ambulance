import { useState } from "react";


const Hero = () => {

    const [isLogin, setIsLogin] = useState(true);

  return (
<div className="hero-bg container-hero">
      {/* Left side */}
      <div className="inner-hero-content">
        <h1>
          Fast, Reliable, and 24/7 Emergency  <br /> Ambulance Service at Your Doorstep
        </h1>
        <p>
          We provide immediate ambulance assistance across Dhaka city and nearby areas.
        </p>
        <button className="hero-btn">Get Started</button>
      </div>

      {/* Right side */}
      <div className="form-container">
        <div className="form-header">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {isLogin ? (
          <form className="active">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        ) : (
          <form className="active">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Location" required />
            <input type="number" placeholder="Number" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Hero;
