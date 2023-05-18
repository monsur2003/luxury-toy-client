import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <div className="bg-[#101010] text-primary">
      <React.StrictMode>
         <App />
      </React.StrictMode>
      ,
   </div>
);
