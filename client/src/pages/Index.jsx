const Index = () => {
  return (
    <div>
      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                src="img/carousel-bg-1.jpg"
                alt="Slide 1"
              />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">
                      <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                        // Car Servicing //
                      </h6>
                      <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                        Qualified Car Repair Service Center
                      </h1>
                      <a
                        href="#"
                        className="btn btn-primary py-3 px-5 animated slideInDown"
                      >
                        Learn More <i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img
                        className="img-fluid"
                        src="img/carousel-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Slide */}
            <div className="carousel-item">
              <img
                className="w-100"
                src="img/carousel-bg-2.jpg"
                alt="Slide 2"
              />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">
                      <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                        // Car Servicing //
                      </h6>
                      <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                        Qualified Car Wash Service Center
                      </h1>
                      <a
                        href="#"
                        className="btn btn-primary py-3 px-5 animated slideInDown"
                      >
                        Learn More <i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img
                        className="img-fluid"
                        src="img/carousel-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="d-flex py-5 px-4">
                <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                <div className="ps-4">
                  <h5 className="mb-3">Quality Servicing</h5>
                  <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                  <a className="text-secondary border-bottom" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="d-flex bg-light py-5 px-4">
                <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                <div className="ps-4">
                  <h5 className="mb-3">Expert Workers</h5>
                  <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                  <a className="text-secondary border-bottom" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="d-flex py-5 px-4">
                <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                <div className="ps-4">
                  <h5 className="mb-3">Modern Equipment</h5>
                  <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                  <a className="text-secondary border-bottom" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="img/about.jpg"
                  style={{ objectFit: "cover" }}
                  alt="About"
                />
                <div
                  className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5"
                  style={{ background: "rgba(0, 0, 0, .08)" }}
                >
                  <h1 className="display-4 text-white mb-0">
                    5 <span className="fs-4">Years</span>
                  </h1>
                  <h4 className="text-white">Experience</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="text-primary text-uppercase">// About Us //</h6>
              <h1 className="mb-4">
                <span className="text-primary">DriveWell</span> Is The Best Place
                For Your Auto Care
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">01</span>
                    </div>
                    <div className="ps-3">
                      <h6>Professional & Expert</h6>
                      <span>Diam dolor diam ipsum sit amet diam et eos</span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">02</span>
                    </div>
                    <div className="ps-3">
                      <h6>Quality Servicing Center</h6>
                      <span>Diam dolor diam ipsum sit amet diam et eos</span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">03</span>
                    </div>
                    <div className="ps-3">
                      <h6>Award Winning Workers</h6>
                      <span>Diam dolor diam ipsum sit amet diam et eos</span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-primary py-3 px-5">
                Read More <i className="fa fa-arrow-right ms-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Fact Start */}
      <div className="container-fluid fact bg-dark my-5 py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 text-center">
              <i className="fa fa-check fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2">5</h2>
              <p className="text-white mb-0">Years Experience</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center">
              <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2">34</h2>
              <p className="text-white mb-0">Expert Technicians</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center">
              <i className="fa fa-users fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2">397</h2>
              <p className="text-white mb-0">Satisfied Clients</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center">
              <i className="fa fa-car fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2">31</h2>
              <p className="text-white mb-0">Complete Projects</p>
            </div>
          </div>
        </div>
      </div>
      {/* Fact End */}

      {/* Service Start */}
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center">
            <h6 className="text-primary text-uppercase">// Our Services //</h6>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="nav w-100 nav-pills me-4">
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-1"
                  type="button"
                >
                  <i className="fa fa-car-side fa-2x me-3"></i>
                  <h4 className="m-0">Diagnostic Test</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-2"
                  type="button"
                >
                  <i className="fa fa-car fa-2x me-3"></i>
                  <h4 className="m-0">Engine Servicing</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-3"
                  type="button"
                >
                  <i className="fa fa-cog fa-2x me-3"></i>
                  <h4 className="m-0">Tires Replacement</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-4"
                  type="button"
                >
                  <i className="fa fa-oil-can fa-2x me-3"></i>
                  <h4 className="m-0">Oil Changing</h4>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/service-1.jpg"
                          style={{ objectFit: "cover" }}
                          alt="Service 1"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">
                        5 Years Of Experience In Auto Servicing
                      </h3>
                      <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit...
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Quality Servicing
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Expert Workers
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Modern Equipment
                      </p>
                      <a href="#" className="btn btn-primary py-3 px-5 mt-3">
                        Read More <i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Repeat for tab-pane-2, tab-pane-3, tab-pane-4 */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Booking Start */}
      <div className="container-fluid bg-secondary booking my-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 py-5">
              <div className="py-5">
                <h1 className="text-white mb-4">
                  Certified and Award Winning Car Repair Service Provider
                </h1>
                <p className="text-white mb-0">
                  Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing
                  kasd ipsum...
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5">
                <h1 className="text-white mb-4">Book For A Service</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Your Name"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Your Email"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select border-0"
                        style={{ height: "55px" }}
                      >
                        <option defaultValue>Select A Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Service Date"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control border-0"
                        placeholder="Special Request"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-secondary w-100 py-3"
                        type="submit"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking End */}

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h6 className="text-primary text-uppercase">
              // Our Technicians //
            </h6>
            <h1 className="mb-5">Our Expert Technicians</h1>
          </div>
          <div className="row g-4">
            {[1, 2, 3, 4].map((num, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src={`img/team-${num}.jpg`}
                      alt={`Team ${num}`}
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

      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h6 className="text-primary text-uppercase">// Testimonial //</h6>
            <h1 className="mb-5">Our Clients Say!</h1>
          </div>
          <div className="row">
            {[1, 2, 3, 4].map((num, i) => (
              <div key={i} className="col-md-6 col-lg-3 text-center">
                <div className="testimonial-item text-center">
                  <img
                    className="bg-light rounded-circle p-2 mx-auto mb-3"
                    src={`img/testimonial-${num}.jpg`}
                    alt={`Testimonial ${num}`}
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h5 className="mb-0">Client Name</h5>
                  <p>Profession</p>
                  <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit diam amet diam et eos...
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
};

export default Index;