const Services = () => {
  return (
    <>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(img/carousel-bg-2.jpg)" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Services
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
                  Services
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Service Start */}
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">// Our Services //</h6>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
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
                {/* Service Tab 1 */}
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/service-1.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">
                        5 Years Of Experience In Auto Servicing
                      </h3>
                      <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Quality
                        Servicing
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Expert
                        Workers
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Modern
                        Equipment
                      </p>
                      <a href="#" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service Tab 2 */}
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/service-2.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">
                        5 Years Of Experience In Auto Servicing
                      </h3>
                      <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Quality
                        Servicing
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Expert
                        Workers
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Modern
                        Equipment
                      </p>
                      <a href="#" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service Tab 3 */}
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/service-3.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">
                        5 Years Of Experience In Auto Servicing
                      </h3>
                      <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Quality
                        Servicing
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Expert
                        Workers
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Modern
                        Equipment
                      </p>
                      <a href="#" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service Tab 4 */}
                <div className="tab-pane fade" id="tab-pane-4">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/service-4.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">
                        5 Years Of Experience In Auto Servicing
                      </h3>
                      <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Quality
                        Servicing
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Expert
                        Workers
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Modern
                        Equipment
                      </p>
                      <a href="#" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End of Service Tabs */}
              </div>
            </div>
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
                  Certified and Award Winning Car Repair Service Provider
                </h1>
                <p className="text-white mb-0">
                  Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing
                  kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo
                  ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et
                  dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut
                  dolores magna sit. Sea dolore sanctus sed et. Takimata
                  takimata sanctus sed.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                data-wow-delay="0.6s"
              >
                <h1 className="text-white mb-4">Book For A Service</h1>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = "/booking-form";
                  }}
                >
                  <div className="row g-3">
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
    </>
  );
};

export default Services;
