import Hero from "../Common/Hero";
import Locations from "../Common/Locations";
import AdditionalClass from "../Common/AdditionalClass";
import Paramedic from "../Common/Paramedic";
import VideoSection from "../Common/VideoSection";
import OurResource from "../Common/OurResource";
import ContactUs from "../Common/ContactUs";
import Testimonial from "../Common/Testimonial";
import Services from "../Common/Services";
import AboutUs from "../Common/AboutUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <AboutUs/>
        <Locations />
        {/* <AdditionalClass />
        <Paramedic /> */}
        <Services />
        <VideoSection />
        {/* <OurResource /> */}
        <Testimonial />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
