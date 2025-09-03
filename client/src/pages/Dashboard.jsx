import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const capitalize = (name) =>
    name ? name.charAt(0).toUpperCase() + name.slice(1) : "";

  useEffect(() => {
    const storedId = localStorage.getItem("ID");
    const storedUser = localStorage.getItem("user");
    const storedUserName = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedPhone = localStorage.getItem("phone");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      parsedUser.name = capitalize(parsedUser.name);
      setUser(parsedUser);
    } else {
      setUser({
        name: capitalize(storedUserName) || "Customer",
        email: storedEmail || "N/A",
        phone: storedPhone || "N/A",
      });
    }

    if (storedId) {
      fetch(`http://localhost:2809/api/bookings/user/${storedId}`)
        .then((res) => res.json())
        .then((data) => setBookings(data))
        .catch((err) => console.error("Error fetching bookings:", err));

      fetch(`http://localhost:2809/api/vehicles/user/${storedId}`)
        .then((res) => res.json())
        .then((data) => setVehicles(data))
        .catch((err) => console.error("Error fetching vehicles:", err));
    }
  }, []);

  // Logout with SweetAlert confirmation
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("phone");
        localStorage.removeItem("ID");

        setUser(null);
        Swal.fire("Logged Out!", "You have been logged out.", "success");
        navigate("/login");
      }
    });
  };

  // SweetAlert for Add Vehicle
  const handleAddVehicle = () => {
    Swal.fire({
      title: "Add Vehicle",
      text: "Redirecting you to Add Vehicle page...",
      icon: "info",
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      navigate("/add-vehicle"); // change route if you have a vehicle form page
    });
  };

  // SweetAlert for Edit Profile
  const handleEditProfile = () => {
    Swal.fire({
      title: "Edit Profile",
      text: "Redirecting you to Profile Edit page...",
      icon: "info",
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      navigate("/edit-profile"); // update with your actual edit route
    });
  };

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <h2 className="welcome">
          Welcome, <span>{user?.name || "Customer"}</span> 👋
        </h2>

        <div className="dashboard-grid">
          {/* Profile Card */}
          <div className="dashboard-card">
            <h3>Your Profile</h3>
            <p>
              <strong>Id:</strong> {localStorage.getItem("ID") || "N/A"}
            </p>
            <p>
              <strong>Name:</strong> {user?.name || "N/A"}
            </p>
            <p>
              <strong>Email:</strong> {user?.email || "N/A"}
            </p>
            <p>
              <strong>Phone:</strong> {user?.phone || "N/A"}
            </p>
            <button className="btn edit-btn" onClick={handleEditProfile}>
              ✏️ Edit Profile
            </button>
          </div>

          {/* Vehicles Card */}
          <div className="dashboard-card">
            <h3>Your Vehicles</h3>
            {vehicles.length > 0 ? (
              <ul>
                {vehicles.map((v, i) => (
                  <li key={i}>
                    {v.brand} {v.model} ({v.vehicle_number || v.plateNumber})
                  </li>
                ))}
              </ul>
            ) : (
              <p>No vehicles added.</p>
            )}
            <button className="btn add-btn" onClick={handleAddVehicle}>
              ➕ Add Vehicle
            </button>
          </div>

          {/* Bookings Card */}
          <div className="dashboard-card">
            <h3>Service Bookings</h3>
            {bookings.length > 0 ? (
              <ul>
                {bookings.map((b, i) => (
                  <li key={i}>
                    {b.vehicle_brand} {b.vehicle_model} → {b.service} -{" "}
                    <span
                      className={`status ${
                        b.status === "Pending"
                          ? "pending"
                          : b.status === "In Progress"
                          ? "progress"
                          : "completed"
                      }`}
                    >
                      {b.status || "Pending"}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No bookings found.</p>
            )}
            <button
              className="btn book-btn"
              onClick={() => navigate("/booking-form")}
            >
              📅 Book a Service
            </button>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="dashboard-nav">
        <button className="btn logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Dashboard;
