import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { AuthProvider } from './context/AuthContext.jsx';
import React from 'react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

