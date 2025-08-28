import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Booking from "../pages/Booking";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Services from "../pages/Services";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Index from "../pages/Index";
import Technicians from "../pages/Technicians"
import Testimonial from "../pages/Testimonial";
import Profile from "../pages/Profile";
import VerifyEmail from "../pages/VerifyEmail";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ paddingBottom: "60px" }}>
        {" "}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/index" element={<Index />} />
          <Route path="/team" element={<Technicians />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/emailVerification" element={<VerifyEmail />} />

          {/* all else route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Router