import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProvider from "./pages/Home/Home/Providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <div className="object-cover bg-fixed bg-center bg-blend-multiply text-primary">
      <React.StrictMode>
         <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
         </AuthProvider>
      </React.StrictMode>
   </div>
);
