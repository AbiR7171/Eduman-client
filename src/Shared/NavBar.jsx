import React, { useContext } from 'react';
import logoImage from "../assets/Images/2210_w018_n002_1385a_p30_1385.jpg"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


const NavBar = () => {
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
          <ul className="menu menu-horizontal px-1 space-x-3">
            <li tabIndex={0}>
              <details>
                <summary>Home</summary>
                <ul className="p-1 w-24">
                  <li><a>Home 1</a></li>
                  <li><a>Home 2</a></li>
                  <li><a>Home 3</a></li>
                </ul>
              </details>
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
            <li tabIndex={0}>
              <details>
                <summary>Instructors</summary>
                <ul className="p-1 w-24">
                  <li><Link to={"/becomeInstructor"}>Become Instructors</Link></li>
              
                </ul>
              </details>
            </li>
            <li><a>Events</a></li>
            <li><Link to={"/instructor"}>Dashboard-instructor</Link></li>
            <li><Link to={"/admin"}>Dashboard-admin</Link></li>
            <li tabIndex={0}>
              <details>
                <summary>Pages</summary>
                <ul className="p-1 w-24">
                  <li><a>Blog</a></li>
                  <li><a>About</a></li>
                  <li><a>Checkout</a></li>
                  <li><a>Contact</a></li>
                  <li><a>FAQ</a></li>
                  <li><a>Register</a></li>
                  <li><a>Subscription</a></li>
              
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-3 me-2">
          <a ><Icon icon="mdi:cart" className='text-3xl' /></a>
          <Link><button className="btn btn-primary">SignUp</button></Link>
          <p><Icon icon="tdesign:menu-fold" /></p>
        </div>
      </div>
    );
};

export default NavBar;