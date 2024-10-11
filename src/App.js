import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import ProgramPage from "./pages/ProgramPage"; // Update this import
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import JoinUs from "./pages/JoinUs";
import SupportUs from "./pages/SupportUs";
import Programs from "./components/Programs";
import Navbar from "./components/Navbar";
import ProgramPageWithBanner from "./pages/ProgramPageWithBanner";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/program" element={<ProgramPageWithBanner />} />
          <Route
            path="/programs/:programId" // Use dynamic route to capture programId
            element={<ProgramPage />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/support-us" element={<SupportUs />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
