import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { DiOpensource } from "react-icons/di";
import { DiGhostSmall } from "react-icons/di";
import { BiLogoDiscourse } from "react-icons/bi";
import useAdminSecure from "../../API/useAdminSecure";

const Admin = () => {
    const location = useLocation();
    const currentPathname = location.pathname;
    console.log(currentPathname);
    const [isAdmin, loader] = useAdminSecure()
    console.log(isAdmin)
    return (
        <>
        <h1 className='text-center text-4xl font-serif font-semibold text-blue-700 mt-2'>Admin Dashboard</h1>
        <div className='grid grid-cols-10'>
            <div className='col-span-2 bg-blue-700 rounded-lg h-[100vh] mt-10'>
                <div className='grid gap-5  text-white mt-10 justify-center items-center text-center'>
                    <NavLink  to={"/admin"} className={`${currentPathname == '/admin' && 'text-red-500'} text-center flex gap-2 items-center`} ><DiOpensource className='text-2xl text-white'/>Applied Instructor</NavLink>
                    <hr className='w-44'/>
                    <NavLink to={"/admin/appliedClass"} className={({isActive})=>(isActive?  "text-red-500 flex gap-2 items-center": "flex gap-2 items-center")}><BiLogoDiscourse className='text-2xl text-white'/>Applied Courses</NavLink>
                    <hr className='w-44'/>
                    <NavLink to={"/admin/instructorslist"} className={({isActive})=>(isActive ? "text-red-500 flex gap-2 items-center" :"flex gap-2 items-center" )}><DiGhostSmall className='text-2xl text-white'/>instructors list</NavLink>
                    
                </div>
            </div>
            <div className='col-span-8 mt-14'>
                <Outlet></Outlet>
            </div>
        </div>
        </>
    );
};

export default Admin;