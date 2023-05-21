import React, { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../pages/Home/Home/Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext); //    const location = useLocation();

   if (loading) {
      return (
         <>
            <div className="flex   text-center items-center justify-center">
               <span class="loader">L &nbsp; ading</span>
            </div>
         </>
      );
   }

   if (user) {
      return children;
   }

   return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
