import React from "react";
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h2>Car & Bike Servicing Made Easy</h2>
        <p>
          Book your vehicle service online, track status in real-time, and get
          digital invoices.
        </p>
        <a href="/booking" className="cta-btn">
          Book a Service Now
        </a>
      </section>

      {/* Services Section */}
      <section className="services">
        <h3>Our Services</h3>
        <div className="service-cards">
          <div className="card">
            <h4>Oil Change</h4>
            <p>Keep your engine running smoothly with regular oil changes.</p>
          </div>
          <div className="card">
            <h4>Full Servicing</h4>
            <p>Complete health check and maintenance for your vehicle.</p>
          </div>
          <div className="card">
            <h4>Dent & Paint</h4>
            <p>Repair scratches and dents with professional finishing.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h3>Why Choose Us?</h3>
        <div className="why-cards">
          <div className="card">
            <h4>Easy Online Booking</h4>
            <p>Book your service anytime, anywhere within seconds.</p>
          </div>
          <div className="card">
            <h4>Trusted Mechanics</h4>
            <p>Our expert mechanics ensure top-quality service.</p>
          </div>
          <div className="card">
            <h4>Transparent Billing</h4>
            <p>No hidden charges. Get instant invoices digitally.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
