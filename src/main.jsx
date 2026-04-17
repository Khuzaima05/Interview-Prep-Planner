import React from "react";
import ReactDOM from "react-dom/client";
import AppWithFirebase from "./AppWithFirebase";
import { AuthProvider } from "./AuthProvider";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AppWithFirebase />
    </AuthProvider>
  </React.StrictMode>
);
