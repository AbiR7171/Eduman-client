import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";


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
          path:"/signIn",
          element:<SignIn/>
         },
         {
          path:"/signUp",
          element:<SignUp/>
         }
      ]
    },
  ]);


  export default router;