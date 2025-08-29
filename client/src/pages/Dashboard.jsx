const Dashboard = ({ user, vehicles = [], bookings = [] }) => {
  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav>
        <h1>DriveWell</h1>
        <div>
          <button>Logout</button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container">
        <h2>Welcome, {user?.name || "Customer"} 👋</h2>

        <div className="grid">
          {/* Profile Card */}
          <div className="card">
            <h3>Your Profile</h3>
            <p>
              <strong>Name:</strong> {user?.name}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>Phone:</strong> {user?.phone}
            </p>
            <button className="edit-btn">Edit Profile</button>
          </div>

          {/* Vehicles Card */}
          <div className="card">
            <h3>Your Vehicles</h3>
            {vehicles.length > 0 ? (
              <ul>
                {vehicles.map((v, i) => (
                  <li key={i}>
                    {v.model} ({v.plateNumber})
                  </li>
                ))}
              </ul>
            ) : (
              <p>No vehicles added.</p>
            )}
            <button className="add-btn">Add Vehicle</button>
          </div>

          {/* Bookings Card */}
          <div className="card">
            <h3>Service Bookings</h3>
            {bookings.length > 0 ? (
              <ul>
                {bookings.map((b, i) => (
                  <li key={i}>
                    {b.service} - {b.status}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No bookings found.</p>
            )}
            <button className="book-btn">Book a Service</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
