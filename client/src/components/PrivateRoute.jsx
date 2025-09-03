import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token");
  const location = useLocation();

  if (!isAuthenticated) {
    // Show a friendly alert when redirecting
    Swal.fire({
      icon: "warning",
      title: "Unauthorized Access 🚫",
      text: "Please login to continue.",
      confirmButtonColor: "#1976d2",
    });

    return (
      <Navigate
        to="/login"
        state={{
          message: "Please login to access this page",
          from: location.pathname,
        }}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;
