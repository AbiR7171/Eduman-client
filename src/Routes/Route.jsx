import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Instructor from "../Dashboard/instructor/Instructor";
import Admin from "../Dashboard/admin/Admin";
import Instructorslist from "../Dashboard/admin/Instructorslist";
import AppliedInstructor from "../Dashboard/admin/AppliedInstructor";
import AppliedClass from "../Dashboard/admin/AppliedClass";
import BecomeInstructor from "../Dashboard/instructor/BecomeInstructor";
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
            path: "/instructor",
            element:<Instructor/>
         },
         {
          path: "/becomeInstructor",
          element:<BecomeInstructor/>
         },
         {
          path:"/signIn",
          element:<SignIn/>
         },
         {
          path:"/signUp",
          element:<SignUp/>
         },
         {
            path: "/admin",
            element:<Admin/>,
            children:[
              {
                path:"/admin",
                element: <AppliedInstructor/>
              },
              {
                path:"/admin/appliedClass",
                element: <AppliedClass/>
              },
              {
                path:"/admin/instructorslist",
                element: <Instructorslist/>
              },
            ]
         }
      ]
    },
  ]);


  export default router;