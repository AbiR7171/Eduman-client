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
import AdminPrivate from "../protectedRoute/AdminPrivate";
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
                element:<InstructorPrivate><Instructor></Instructor></InstructorPrivate>
              },
              {
                path:"/instructor/editCurse",
                element:<InstructorPrivate><CourseList/></InstructorPrivate>
              },
              {
                path:"/instructor/modal/:id",
                element:<InstructorPrivate><CourseEdit/></InstructorPrivate>,
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
             element:<AdminPrivate><Admin/></AdminPrivate>,
            children:[
              {
                path:"/admin",
                element: <AdminPrivate><AppliedInstructor/></AdminPrivate>
              },
              {
                path:"/admin/appliedClass",
                element: <AdminPrivate><AppliedClass/></AdminPrivate>
              },
              {
                path:"/admin/instructorslist",
                element: <AdminPrivate><Instructorslist/></AdminPrivate>
              },
            ]
         }
      ]
    },
  ]);


  export default router;