import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/Home/Home/Login/Login";
import Register from "../pages/Home/Home/Register/Register";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,

      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/signup",
            element: <Register></Register>,
         },
      ],
   },
]);

export default router;
