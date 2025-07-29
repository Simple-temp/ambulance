
import t1 from '../../assets/t1.avif';
import t2 from '../../assets/t2.webp';

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      {/* Left Card */}
      <div className="testimonial-box">
        <div className="testimonial-text">
          <p>"This platform really helped me grow my business. It's intuitive, fast, and support is amazing!"</p>
          <h4>Jane Doe</h4>
          <small>CEO, StartupX</small>
        </div>
        <div className="testimonial-image">
          <img src={t1} alt="Jane Doe" />
        </div>
      </div>

      {/* Right Card */}
      <div className="testimonial-box">
        <div className="testimonial-text">
          <p>"A truly transformative experience. I highly recommend it to anyone looking to improve efficiency."</p>
          <h4>John Smith</h4>
          <small>Developer Advocate, CodeCorp</small>
        </div>
        <div className="testimonial-image">
          <img src={t2} alt="John Smith" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
