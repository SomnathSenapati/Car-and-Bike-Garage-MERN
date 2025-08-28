import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      img: "testimonial-1.jpg",
      name: "Client Name",
      profession: "Profession",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    },
    {
      img: "testimonial-2.jpg",
      name: "Client Name",
      profession: "Profession",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    },
    {
      img: "testimonial-3.jpg",
      name: "Client Name",
      profession: "Profession",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    },
    {
      img: "testimonial-4.jpg",
      name: "Client Name",
      profession: "Profession",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    },
  ];

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
              Testimonial
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
                  Testimonial
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Testimonial Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="text-primary text-uppercase">// Testimonial //</h6>
            <h1 className="mb-5">Our Clients Say!</h1>
          </div>

          <div className="owl-carousel testimonial-carousel position-relative">
            {testimonials.map((t, i) => (
              <div className="testimonial-item text-center" key={i}>
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-3"
                  src={`/img/${t.img}`}
                  alt={t.name}
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="mb-0">{t.name}</h5>
                <p>{t.profession}</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">{t.text}</p>
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

export default Testimonial;
