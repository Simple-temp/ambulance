
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
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <textarea rows="4" placeholder="Your Message" />
          <button type="submit">Send Message</button>
        </form>
        <div className="social-icons">
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <InstagramIcon />
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
