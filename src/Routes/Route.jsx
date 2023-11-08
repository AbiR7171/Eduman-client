import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Instructor from "../Dashboard/instructor/Instructor";
import InstructorBoard from "../Dashboard/instructor/InstructorBoard";
import Admin from "../Dashboard/admin/Admin";
import Instructorslist from "../Dashboard/admin/Instructorslist";
import AppliedInstructor from "../Dashboard/admin/AppliedInstructor";
import AppliedClass from "../Dashboard/admin/AppliedClass";
import BecomeInstructor from "../Dashboard/instructor/BecomeInstructor";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import InstructorPrivate from "../protectedRoute/InstructorPrivate";
import AdminPrivate from "../protectedRoute/InstructorPrivate";
import CourseList from "../Dashboard/instructor/CourseList";
import CourseEdit from "../Dashboard/instructor/CourseEdit";
import Details from "../Pages/Home/details";
import Cart from "../Dashboard/student/Cart";
import Enrolled from "../Dashboard/student/Enrolled";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      children:[
         {
            path:"/",
            element:<Home/>,
            
         },
         {
          path: '/details/:id',
          element: <Details/>
        },
        {
          path: '/cart',
          element: <Cart/>
        },
        {
          path: '/enrolled',
          element: <Enrolled/>
        },
         {
            path: "/instructor",
            element:<InstructorPrivate><InstructorBoard></InstructorBoard></InstructorPrivate>,
            children:[
              {
                path:"/instructor",
                element:<Instructor></Instructor>
              },
              {
                path:"/instructor/editCurse",
                element:<CourseList/>
              },
              {
                path:"/instructor/modal/:id",
                element:<CourseEdit/>,
              }
            ]
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
            // element:<AdminPrivate><Admin/></AdminPrivate>,
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