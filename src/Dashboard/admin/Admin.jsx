import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div className='grid grid-cols-10'>
            <div className='col-span-2 bg-teal-300 h-96'>
                <div className='grid gap-5'>
                    <Link to={"/admin"}>Applied Instructor</Link>
                    <Link to={"/admin/appliedClass"}>Applied Courses</Link>
                    <Link to={"/admin/instructorslist"}>instructors list</Link>
                </div>
            </div>
            <div className='col-span-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Admin;