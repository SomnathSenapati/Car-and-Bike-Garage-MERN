import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, posts: 0, comments: 0 });

  useEffect(() => {
    // Fetch statistics from the server
    fetch("/api/stats")
      .then((response) => response.json())
      .then((data) => setStats(data))
      .catch((error) => console.error("Error fetching stats:", error));
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </header>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h2>{stats.users}</h2>
          <p>Users</p>
        </div>
        <div className="stat-card">
          <h2>{stats.posts}</h2>
          <p>Posts</p>
        </div>
        <div className="stat-card">
          <h2>{stats.comments}</h2>
          <p>Comments</p>
        </div>
      </div>
      <div className="dashboard-actions">
        <button className="action-btn">Manage Users</button>
        <button className="action-btn">Manage Posts</button>
        <button className="action-btn">Manage Comments</button>
      </div>
    </div>
  );
};

export default Dashboard;
