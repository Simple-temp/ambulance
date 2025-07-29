

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        {/* Left Side */}
        <div className="footer-left">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Stay updated with the latest news and offers.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <div className="footer-menu">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Blog</span>
            <span>Contact</span>
            <span>FAQ</span>
          </div>
          <p className="footer-description">
            Explore our services and enjoy seamless support from our dedicated team.
          </p>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom Row */}
      <div className="footer-bottom">
        <span>© 2025 YourCompany. All rights reserved.</span>
        <div className="footer-socials">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter-x"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-youtube"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
