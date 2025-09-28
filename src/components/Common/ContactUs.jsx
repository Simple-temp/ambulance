import contact from '../../assets/contact.avif';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Left - Form Section */}
      <div className="contact-form">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a question or want to work together? Fill out the form below and we’ll get back to you shortly.
        </p>
        <form className="contact-form-fields">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" />
          <textarea rows="5" placeholder="Your Message" required />
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
        <div className="social-icons">
          <a href="#"><FacebookIcon /></a>
          <a href="#"><TwitterIcon /></a>
          <a href="#"><LinkedInIcon /></a>
          <a href="#"><InstagramIcon /></a>
        </div>
      </div>

      {/* Right - Image Section */}
      <div className="contact-image">
        <img src={contact} alt="Contact" />
      </div>
    </div>
  );
};

export default ContactUs;
