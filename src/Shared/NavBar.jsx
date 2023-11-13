import React, { useContext, useEffect, useState } from 'react';
import logoImage from "../assets/Images/2210_w018_n002_1385a_p30_1385.jpg"
import { Icon } from '@iconify/react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useInstructorSecure from '../API/useInstructorSecure';
import useAdminSecure from '../API/useAdminSecure';
import useUsers from '../Hooks/useUsers';
import { AuthContext } from '../API/AuthProvider';


const NavBar = () => {
  const [user] = useUsers()
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)

  const [isInstructor, loader] = useInstructorSecure();
  const [IsAdmin] = useAdminSecure();
  const { isCart } = useContext(AuthContext)
  const [enrolledCourses, setEnrolledCourses] = useState([])
  const [courses, setCourses] = useState([])
  const loginUser = localStorage.getItem("edumanUser")
  useEffect(() => {
    fetch(`https://eduman-server-silk.vercel.app/cart/${user.email}`)
      .then(res => res.json())
      .then(data => { setEnrolledCourses(data) })
  }, [user?.email, isCart, loginUser])
  useEffect(() => {
    fetch("https://eduman-server-silk.vercel.app/allCourses")
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
  let seam = []
  courses?.forEach((item) => {
    const final = enrolledCourses.find(e => (e.id === item._id))
    if (final) {
      console.log(item)
      seam.push(item)
    }
  })

  const handleLogOut = () => {
    localStorage.removeItem('edumanUser');
    localStorage.removeItem('access-token');
    navigate("/")
    window.location.reload()
    
  }

  return (
    <div className="navbar bg-base-100  ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="flex gap-2 items-center">
          <img src={logoImage} className='w-20' alt="" />
          <p className='font-serif text-2xl font-bold'>Eduman</p>

        </a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 flex items-center space-x-3">
          <li tabIndex={0}>
            <div className="dropdown">
              <NavLink to={"/"}>Home</NavLink>
            </div>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Courses</summary>
              <ul className="p-1 w-24">
                <li><a>Course pricing</a></li>
                <li><a>Courses</a></li>
              </ul>
            </details>
          </li>
          <li tabIndex={0} className='dropdown dropdown-end'>
            <details>
              <summary tabIndex={0} className=" m-1">Instructors</summary>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to={"/becomeInstructor"}>Become Instructors</Link></li>

              </ul>
            </details>
          </li>
          
          {
            isInstructor && <li><NavLink to={"/instructor"} className={({ isActive }) => (isActive && "text-red-500")}>Dashboard-instructor</NavLink></li>
          }

          {
            IsAdmin && <li><Link to={"/admin"}>Dashboard-admin</Link></li>
          }
          
            <li> <Link to={"/enrolled"}>Enrolled-classes</Link></li>
          

          
        </ul>
      </div>
      <div className="navbar-end space-x-3 me-2">
        <Link to={"/cart"} className="indicator cursor-pointer"> <span className="indicator-item badge badge-secondary">{seam?.length}</span> <Icon icon="mdi:cart" className='text-3xl ' /></Link>
        {
          !loginUser ? <Link to={"/signUp"}><button className="btn btn-primary">SignUp</button></Link> : <Link to={"/signUp"}><button className="btn btn-primary" onClick={() => handleLogOut()}>logout</button></Link>
        }
        <p><Icon icon="tdesign:menu-fold" onClick={() => setMenu(!menu)} /></p>

      </div>
    </div>
  );
};

export default NavBar;