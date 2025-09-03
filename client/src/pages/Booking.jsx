import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Booking = () => {
  const navigate = useNavigate();

  const handleBooking = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "info",
      title: "Redirecting to Booking Form 📋",
      text: "Please wait while we take you to the booking page...",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      navigate("/booking-form");
    });
  };

  return (
    <>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url('/img/carousel-bg-1.jpg')" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Booking
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Booking
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            {[
              {
                icon: "fa-certificate",
                title: "Quality Servicing",
                text: "We ensure top-notch servicing with genuine parts and expert care.",
              },
              {
                icon: "fa-users-cog",
                title: "Expert Workers",
                text: "Our mechanics are certified, experienced, and passionate about cars.",
                highlight: true,
              },
              {
                icon: "fa-tools",
                title: "Modern Equipment",
                text: "Equipped with the latest tools for quick and reliable service.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.1 + index * 0.2}s`}
              >
                <div
                  className={`d-flex py-5 px-4 ${
                    item.highlight ? "bg-light" : ""
                  }`}
                >
                  <i
                    className={`fa ${item.icon} fa-3x text-primary flex-shrink-0`}
                  ></i>
                  <div className="ps-4">
                    <h5 className="mb-3">{item.title}</h5>
                    <p>{item.text}</p>
                    <a className="text-secondary border-bottom" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Booking Start */}
      <div
        className="container-fluid bg-secondary booking my-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 py-5">
              <div className="py-5">
                <h1 className="text-white mb-4">
                  Certified & Award Winning Car Repair Service Provider
                </h1>
                <p className="text-white mb-0">
                  With years of excellence, DriveWell has become a trusted name
                  in vehicle servicing. Our certified technicians, modern tools,
                  and dedication ensure your car gets the best care possible.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn">
                <h1 className="text-white mb-4">Book For A Service</h1>
                <form onSubmit={handleBooking}>
                  <div className="row g-3">
                    <div className="col-12">
                      <button
                        className="btn btn-secondary w-100 py-3 fw-bold"
                        type="submit"
                      >
                        🚗 Book Now
                      </button>
                      <p className="text-white mt-3 mb-0">
                        Hassle-free booking in just one click!
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking End */}

      {/* Call To Action Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 col-md-6">
              <h6 className="text-primary text-uppercase">
                // Call To Action //
              </h6>
              <h1 className="mb-4">Have Any Pre-Booking Question?</h1>
              <p className="mb-0">
                Got queries before booking your service? Our support team is
                ready to assist you. From pricing to special requests, we’ll
                guide you every step of the way.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary d-flex flex-column justify-content-center text-center h-100 p-4 rounded">
                <h3 className="text-white mb-4">
                  <i className="fa fa-phone-alt me-3"></i>+91 8250188083
                </h3>
                <a href="/contact" className="btn btn-secondary py-3 px-5">
                  Contact Us <i className="fa fa-arrow-right ms-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call To Action End */}
    </>
  );
};

export default Booking;
