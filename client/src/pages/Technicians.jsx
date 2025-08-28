import React from "react";

const Technicians = () => {
  return (
    <>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url('/img/carousel-bg-2.jpg')" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Technicians
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Technicians
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">
              // Our Technicians //
            </h6>
            <h1 className="mb-5">Our Expert Technicians</h1>
          </div>
          <div className="row g-4">
            {[
              { img: "team-1.jpg", delay: "0.1s" },
              { img: "team-2.jpg", delay: "0.3s" },
              { img: "team-3.jpg", delay: "0.5s" },
              { img: "team-4.jpg", delay: "0.7s" },
              { img: "team-2.jpg", delay: "0.1s" },
              { img: "team-3.jpg", delay: "0.3s" },
              { img: "team-4.jpg", delay: "0.5s" },
              { img: "team-1.jpg", delay: "0.7s" },
            ].map((tech, index) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={tech.delay}
                key={index}
              >
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src={`/img/${tech.img}`}
                      alt="Technician"
                    />
                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                      <a className="btn btn-square mx-1" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square mx-1" href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square mx-1" href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="bg-light text-center p-4">
                    <h5 className="fw-bold mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
};

export default Technicians;
