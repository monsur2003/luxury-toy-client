import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/Home/Home/Login/Login";
import Register from "../pages/Home/Home/Register/Register";
import AddToy from "../pages/Home/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";
import Blogs from "../pages/Blogs/Blogs";
import MyToy from "../pages/MyToy/MyToy";
import UpdateToy from "../pages/MyToy/UpdateToy/UpdateToy";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";

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
         {
            path: "/addtoy",
            element: <AddToy></AddToy>,
         },
         {
            path: "/alltoy",
            element: <AllToy></AllToy>,
         },
         {
            path: "/blogs",
            element: <Blogs></Blogs>,
         },
         {
            path: "/mytoy",
            element: <MyToy />,
         },
         {
            path: "toys/:id",
            element: <UpdateToy></UpdateToy>,

            loader: ({ params }) =>
               fetch(`http://localhost:5000/toys/${params.id}`),
         },
         {
            path: "/view/:id",
            element: (
               <PrivateRoute>
                  <ViewDetails></ViewDetails>,
               </PrivateRoute>
            ),
            loader: ({ params }) =>
               fetch(`http://localhost:5000/toys/${params.id}`),
         },
      ],
   },
]);

export default router;
