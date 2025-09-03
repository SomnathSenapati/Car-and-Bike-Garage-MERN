import React, { useState, useEffect } from "react";
import Swal from "sweetalert2"; // ✅ import sweetalert2

const BookingForm = () => {
  const [formData, setFormData] = useState({
    customer: "",
    name: "",
    email: "",
    vehicle_type: "",
    vehicle_brand: "",
    vehicle_model: "",
    vehicle_number: "",
    service: "",
  });

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [userBookings, setUserBookings] = useState(null);

  // Load user info and bookings
  useEffect(() => {
    const storedId = localStorage.getItem("ID");
    const storedName = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");

    setFormData((prev) => ({
      ...prev,
      customer: storedId || "",
      name: storedName || "",
      email: storedEmail || "",
    }));

    if (storedId) {
      fetch(`http://localhost:2809/api/bookings/user/${storedId}`)
        .then((res) => res.json())
        .then((data) => setUserBookings(data.length > 0 ? data : []))
        .catch((err) => {
          console.error("Error fetching user bookings:", err);
          setUserBookings([]);
        });
    } else {
      setUserBookings([]);
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

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

    if (name === "vehicle_brand") {
      setFormData((prev) => ({ ...prev, vehicle_model: "" }));
      fetch(`http://localhost:2809/api/vehicles/brand/${value}`)
        .then((res) => res.json())
        .then((data) => {
          const uniqueModels = [...new Set(data.map((v) => v.model))];
          setModels(uniqueModels);
        })
        .catch((err) => console.error(err));
    }
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:2809/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Booking Submitted!",
          text: "✅ Your booking has been successfully registered.",
          timer: 2000,
          showConfirmButton: false,
        });

        // Refresh booking list
        fetch(`http://localhost:2809/api/bookings/user/${formData.customer}`)
          .then((res) => res.json())
          .then((data) => setUserBookings(data.length > 0 ? data : []));

        // Reset form
        setFormData({
          customer: localStorage.getItem("ID") || "",
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
        Swal.fire({
          icon: "error",
          title: "Booking Failed",
          text: data.message || "❌ Something went wrong.",
        });
      }
    } catch (error) {
      console.error("Booking error:", error);
      Swal.fire({
        icon: "warning",
        title: "Network Error",
        text: "⚠️ Unable to submit booking. Try again later.",
      });
    }
  };

  return (
    <div className="vehicle-form-container">
      <h2>Register Vehicle & Book Service</h2>
      <form onSubmit={handleSubmit}>
        {/* Customer ID */}
        <div>
          <label>Customer ID</label>
          <input type="text" value={formData.customer} readOnly />
        </div>

        {/* Name */}
        <div>
          <label>Full Name</label>
          <input type="text" value={formData.name} readOnly />
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input type="email" value={formData.email} readOnly />
        </div>

        {/* Vehicle Type */}
        <div>
          <label>Type</label>
          <select
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
          <label>Brand</label>
          <select
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
          <label>Model</label>
          <select
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

        {/* Vehicle Number */}
        <div>
          <label>Vehicle Number</label>
          <input
            type="text"
            name="vehicle_number"
            value={formData.vehicle_number}
            onChange={handleChange}
            placeholder="Enter Registration Number"
            required
          />
        </div>

        {/* Service */}
        <div>
          <label>Service</label>
          <select
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

      {/* Display User Bookings */}
      <div className="booking-list">
        <h3>Your Bookings</h3>
        {userBookings === null ? (
          <p>Loading...</p>
        ) : userBookings.length === 0 ? (
          <p>N/A</p>
        ) : (
          <ul>
            {userBookings.map((b, i) => (
              <li key={i}>
                <strong>{b.vehicle_type}</strong> - {b.vehicle_brand}{" "}
                {b.vehicle_model} ({b.vehicle_number}) → {b.service} |{" "}
                <span style={{ color: "green" }}>{b.status || "Pending"}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
