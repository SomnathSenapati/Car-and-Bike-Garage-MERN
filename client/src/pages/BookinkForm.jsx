import React, { useState, useEffect } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    vehicle_type: "",
    vehicle_brand: "",
    vehicle_model: "",
    vehicle_number: "",
    service: "",
  });

  // Dropdown data
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  // Load user info from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");

    setFormData((prev) => ({
      ...prev,
      name: storedName || "",
      email: storedEmail || "",
    }));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Fetch brands when vehicle_type is selected
    if (name === "vehicle_type") {
      setFormData((prev) => ({
        ...prev,
        vehicle_brand: "",
        vehicle_model: "",
      }));
      fetch(`http://localhost:2809/api/vehicles/type/${value}`)
        .then((res) => res.json())
        .then((data) => {
          const uniqueBrands = [...new Set(data.map((v) => v.brand))];
          setBrands(uniqueBrands);
          setModels([]);
        })
        .catch((err) => console.error(err));
    }

    // Fetch models when vehicle_brand is selected
    if (name === "vehicle_brand") {
      setFormData((prev) => ({ ...prev, vehicle_model: "" })); // reset model
      fetch(`http://localhost:2809/api/vehicles/brand/${value}`)
        .then((res) => res.json())
        .then((data) => {
          const uniqueModels = [...new Set(data.map((v) => v.model))];
          setModels(uniqueModels);
        })
        .catch((err) => console.error(err));
    }
  };

  // Handle submit → POST to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting booking:", formData);

    try {
      const res = await fetch("http://localhost:2809/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Booking submitted successfully!");
        // reset form but keep name & email from localStorage
        setFormData({
          category: localStorage.getItem("ID"),
          name: localStorage.getItem("username") || "",
          email: localStorage.getItem("email") || "",
          vehicle_type: "",
          vehicle_brand: "",
          vehicle_model: "",
          vehicle_number: "",
          service: "",
        });
        setBrands([]);
        setModels([]);
      } else {
        alert("❌ Failed to submit: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("⚠️ Something went wrong while submitting booking");
    }
  };

  return (
    <div className="vehicle-form-container">
      <h2>Register Vehicle & Book Service</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            readOnly
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
            required
            readOnly
          />
        </div>

        {/* Vehicle Type */}
        <div>
          <label htmlFor="vehicle_type">Type</label>
          <select
            id="vehicle_type"
            name="vehicle_type"
            value={formData.vehicle_type}
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
          <label htmlFor="vehicle_brand">Brand</label>
          <select
            id="vehicle_brand"
            name="vehicle_brand"
            value={formData.vehicle_brand}
            onChange={handleChange}
            required
            disabled={!brands.length}
          >
            <option value="">Select Brand</option>
            {brands.map((b, i) => (
              <option key={i} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Vehicle Model */}
        <div>
          <label htmlFor="vehicle_model">Model</label>
          <select
            id="vehicle_model"
            name="vehicle_model"
            value={formData.vehicle_model}
            onChange={handleChange}
            required
            disabled={!models.length}
          >
            <option value="">Select Model</option>
            {models.map((m, i) => (
              <option key={i} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Registration Number */}
        <div>
          <label htmlFor="vehicle_number">Vehicle Number</label>
          <input
            type="text"
            id="vehicle_number"
            name="vehicle_number"
            value={formData.vehicle_number}
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
            <option value="Dent Repair">Dent Repair</option>
            <option value="Clutch Replacement">Clutch Replacement</option>
            <option value="Wheel Alignment">Wheel Alignment</option>
            <option value="Battery Service">Battery Service</option>
            <option value="Exhaust Repair">Exhaust Repair</option>
            <option value="Engine Diagnostics">Engine Diagnostics</option>
            <option value="Paint Job">Paint Job</option>
            <option value="Suspension Repair">Suspension Repair</option>
            <option value="AC Repair">AC Repair</option>
            <option value="Normal Checking">Normal Checking</option>
          </select>
        </div>

        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
