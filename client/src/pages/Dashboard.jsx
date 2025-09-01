import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [vehicles, setVehicles] = useState([]); // fetched vehicles
  const [bookings, setBookings] = useState([]); // fetched bookings
  const navigate = useNavigate();

  // Capitalize first letter of name
  const capitalize = (name) =>
    name ? name.charAt(0).toUpperCase() + name.slice(1) : "";

  // Fetch user info and bookings/vehicles
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

    // Fetch bookings for this user
    if (storedId) {
      fetch(`http://localhost:2809/api/bookings/user/${storedId}`)
        .then((res) => res.json())
        .then((data) => setBookings(data))
        .catch((err) => console.error("Error fetching bookings:", err));

      // Fetch vehicles for this user (if API exists)
      fetch(`http://localhost:2809/api/vehicles/user/${storedId}`)
        .then((res) => res.json())
        .then((data) => setVehicles(data))
        .catch((err) => console.error("Error fetching vehicles:", err));
    }
  }, []);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("ID");

    setUser(null);
    navigate("/login");
  };

  return (
    <div className="dashboard">
      {/* Dashboard Content */}
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
            <button className="btn edit-btn">✏️ Edit Profile</button>
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
            <button className="btn add-btn">➕ Add Vehicle</button>
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

      {/* Styles */}
      <style jsx>{`
        .dashboard {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          padding: 20px;
        }
        .dashboard-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 15px 25px;
          background: white;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        .welcome {
          margin-bottom: 25px;
          font-size: 24px;
          font-weight: 600;
          color: #333;
        }
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .dashboard-card {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease-in-out;
        }
        .dashboard-card:hover {
          transform: translateY(-3px);
        }
        .btn {
          display: inline-block;
          margin-top: 12px;
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
          border: none;
        }
        .edit-btn {
          background: #ffc107;
          color: #fff;
        }
        .edit-btn:hover {
          background: #e0a800;
        }
        .add-btn {
          background: #17a2b8;
          color: #fff;
        }
        .add-btn:hover {
          background: #138496;
        }
        .book-btn {
          background: #28a745;
          color: #fff;
        }
        .book-btn:hover {
          background: #218838;
        }
        .logout-btn {
          background: #dc3545;
          color: #fff;
          padding: 8px 16px;
          font-size: 14px;
        }
        .logout-btn:hover {
          background: #c82333;
        }
        .status.pending {
          color: #ffc107;
          font-weight: bold;
        }
        .status.progress {
          color: #17a2b8;
          font-weight: bold;
        }
        .status.completed {
          color: #28a745;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
