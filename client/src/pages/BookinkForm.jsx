import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    customer: "",
    type: "",
    brand: "",
    model: "",
    registrationNumber: "",
    service: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // TODO: Call backend API
    // fetch("/api/vehicles", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log("Saved:", data));
  };

  return (
    <div className="vehicle-form-container">
      <h2>Register Vehicle & Book Service</h2>
      <form onSubmit={handleSubmit}>
        {/* Customer Name */}
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>

        {/* Customer ID (ObjectId) */}
        {/* <div>
          <label htmlFor="customer">Customer ID</label>
          <input
            type="text"
            id="customer"
            name="customer"
            value={formData.customer}
            onChange={handleChange}
            placeholder="Enter Customer ObjectId"
          />
          <small>(Will be auto-linked when backend is ready)</small>
        </div> */}

        {/* Vehicle Type */}
        <div>
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
          </select>
        </div>

        {/* Vehicle Brand */}
        <div>
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Enter Vehicle Brand (e.g. Honda)"
            required
          />
        </div>

        {/* Vehicle Model */}
        <div>
          <label htmlFor="model">Model</label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Enter Vehicle Model (e.g. City, Pulsar)"
            required
          />
        </div>

        {/* Registration Number */}
        <div>
          <label htmlFor="registrationNumber">Registration Number</label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            placeholder="Enter Registration Number"
            required
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service">Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Brake Repair">Brake Repair</option>
            <option value="Full Service">Full Service</option>
            <option value="Full Service">Dent Repair</option>
            <option value="Full Service">Clutch Replacement</option>
            <option value="Full Service">Wheel Alignment</option>
            <option value="Full Service">Battery Service</option>
            <option value="Full Service">Exhaust Repair</option>
            <option value="Full Service">Engine Diagnostics</option>
            <option value="Full Service">Paint Job</option>
            <option value="Full Service">Suspension Repair</option>
            <option value="Full Service">AC Repair</option>
            <option value="Full Service">Normal Checking</option>
          </select>
        </div>

        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
