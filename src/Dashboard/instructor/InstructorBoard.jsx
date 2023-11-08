import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const Admin = () => {
    const location = useLocation();
    const currentPathname = location.pathname;
    console.log(currentPathname);
    return (
        <>
        <h1 className='text-center text-4xl font-serif font-semibold text-blue-700 mt-2'>Instructor Dashboard</h1>
        <div className='grid grid-cols-10'>
            <div className='col-span-2 bg-blue-700 rounded-lg h-[100vh] mt-10'>
                <div className='grid gap-5  text-white mt-10 justify-center items-center text-center'>
                    <NavLink  to={"/instructor"} className={`${currentPathname == '/instructor' && 'text-red-500'} text-center flex gap-2 items-center `} > <BsFillFileEarmarkPostFill className='text-white text-xl'/>Post course</NavLink>
                    <hr className='w-44'/>
                    <NavLink to={"/instructor/editCurse"} className={({isActive})=>(isActive ? "text-red-500 flex gap-2 items-center": "flex gap-2 items-center")}> <FiEdit className='text-white text-xl'/>Edit course</NavLink>
                    <hr className='w-44'/>
                    
                    
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