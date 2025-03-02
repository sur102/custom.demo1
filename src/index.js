import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import AreaProvider from "./components/context/AreaContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AreaProvider>
      <App />
    </AreaProvider>
  </React.StrictMode>
);
