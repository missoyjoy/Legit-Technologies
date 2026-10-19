import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main Navigation Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";

// Division 01 Pages
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import MobileApps from "./pages/MobileApps";
import Cybersecurity from "./pages/Cybersecurity";
import Networking from "./pages/Networking";

// Division 02 Pages
import Biometrics from "./pages/Biometrics";
import CctvSurveillance from "./pages/CctvSurveillance";
import ItHardware from "./pages/ItHardware";
import PosSystems from "./pages/PosSystems";

// Division 03 Pages
import CorporateBranding from "./pages/CorporateBranding";
import CommercialPrinting from "./pages/CommercialPrinting";
import DigitalSolutions from "./pages/DigitalSolutions";
import Education from "./pages/Education";

// Additional Core Services
import SystemsInnovation from "./pages/SystemsInnovation";
import Consultancy from "./pages/Consultancy";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          {/* Main Navigation Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />

          {/* Division 01 */}
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/networking" element={<Networking />} />

          {/* Division 02 */}
          <Route path="/services/biometrics" element={<Biometrics />} />
          <Route path="/services/cctv-surveillance" element={<CctvSurveillance />} />
          <Route path="/services/it-hardware" element={<ItHardware />} />
          <Route path="/services/pos-systems" element={<PosSystems />} />

          {/* Division 03 */}
          <Route path="/services/corporate-branding" element={<CorporateBranding />} />
          <Route path="/services/commercial-printing" element={<CommercialPrinting />} />
          <Route path="/services/digital-solutions" element={<DigitalSolutions />} />
          <Route path="/services/education" element={<Education />} />

          {/* Core Services */}
          <Route path="/services/systems-innovation" element={<SystemsInnovation />} />
          <Route path="/services/consultancy" element={<Consultancy />} />
        </Routes>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}

export default App;




