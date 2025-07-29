import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Locations from "./components/Common/Locations";
import AdditionalClass from "./components/Common/AdditionalClass";
import Paramedic from "./components/Common/Paramedic";
import VideoSection from "./components/Common/VideoSection";
import OurResource from "./components/Common/OurResource";
import ContactUs from "./components/Common/ContactUs";
import Testimonial from "./components/Common/Testimonial";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Hero from "./components/Common/Hero";
import TryAI from "./components/TryAI";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="d-flex inner-container">
            <header>
              <Header />
            </header>

            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hero" element={<Hero />} />
                <Route path="/location" element={<Locations />} />
                <Route path="/additonalclass" element={<AdditionalClass />} />
                <Route path="/paramedic" element={<Paramedic />} />
                <Route path="/videos" element={<VideoSection />} />
                <Route path="/ourresource" element={<OurResource />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/tryai" element={<TryAI />} />
              </Routes>
            </main>

            <footer>
              <Footer />
            </footer>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
