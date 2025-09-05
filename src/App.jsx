import { BrowserRouter, Routes, Route } from "react-router-dom";
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

import UserSideBar from "./components/Pages/UserSideBar";
import UserProfile from "./components/Pages/UserProfile";
import UserHistory from "./components/Pages/UserHistory";
import UserSettings from "./components/Pages/UserSettings";
import BookAmbulance from "./components/Pages/BookAmbulance";
import Tracking from "./components/Pages/Tracking";
import Feedback from "./components/Pages/Feedback";

// Layout for normal pages (with Header + Footer)
function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

// Layout for user pages (with sidebar only)
function UserLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <UserSideBar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="profile" element={<UserProfile />} />
          <Route path="history" element={<UserHistory />} />
          <Route path="settings" element={<UserSettings />} />
          <Route path="book-ambulance" element={<BookAmbulance />} />
          <Route path="track-ambulance" element={<Tracking />} />
          <Route path="feedback" element={<Feedback />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout routes */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/hero"
          element={
            <MainLayout>
              <Hero />
            </MainLayout>
          }
        />
        <Route
          path="/location"
          element={
            <MainLayout>
              <Locations />
            </MainLayout>
          }
        />
        <Route
          path="/additonalclass"
          element={
            <MainLayout>
              <AdditionalClass />
            </MainLayout>
          }
        />
        <Route
          path="/paramedic"
          element={
            <MainLayout>
              <Paramedic />
            </MainLayout>
          }
        />
        <Route
          path="/videos"
          element={
            <MainLayout>
              <VideoSection />
            </MainLayout>
          }
        />
        <Route
          path="/ourresource"
          element={
            <MainLayout>
              <OurResource />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactUs />
            </MainLayout>
          }
        />
        <Route
          path="/testimonial"
          element={
            <MainLayout>
              <Testimonial />
            </MainLayout>
          }
        />
        <Route
          path="/tryai"
          element={
            <MainLayout>
              <TryAI />
            </MainLayout>
          }
        />

        {/* User routes (sidebar only) */}
        <Route path="/user/*" element={<UserLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
