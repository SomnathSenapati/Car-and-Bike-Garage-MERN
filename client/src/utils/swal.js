import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// Global wrapper for alerts
const Alert = {
  success: (title = "Success", text = "") =>
    Swal.fire({
      icon: "success",
      title,
      text,
      confirmButtonColor: "#3085d6",
    }),

  error: (title = "Error", text = "") =>
    Swal.fire({
      icon: "error",
      title,
      text,
      confirmButtonColor: "#d33",
    }),

  warning: (title = "Warning", text = "") =>
    Swal.fire({
      icon: "warning",
      title,
      text,
    }),

  info: (title = "Info", text = "") =>
    Swal.fire({
      icon: "info",
      title,
      text,
    }),

  confirm: (
    title = "Are you sure?",
    text = "You won’t be able to revert this!"
  ) =>
    Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }),
};

export default Alert;
