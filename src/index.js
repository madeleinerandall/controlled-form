import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Form from "./Form";
import Sidebar from "./Sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div id="app">
      <Sidebar />
      <Form />
    </div>
  </React.StrictMode>
);
