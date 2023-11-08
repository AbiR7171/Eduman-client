import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import ViewDetails from "../Pages/ViewDetails/ViewDetails/ViewDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      children:[
         {
            path:"/",
            element:<Home/>
         },
         {
          path:'/view_details',
          element:<ViewDetails></ViewDetails>
         }
      ]
    },
  ]);


  export default router;