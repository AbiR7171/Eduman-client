import React from 'react';
import teacher from './../../../assets/Images/feedback/teacher-removebg-preview.png'
import teacher2 from './../../../assets/Images/feedback/teacher2.png'
import { Link } from 'react-router-dom';

const CourseTitle = () => {
    return (
        <div className='grid grid-cols-2 w-10/12 mx-auto mt-10 '>
            <div className='flex p-3'>
                <div>
                    <p className='text-md text-blue-800 fw-bold'>Start from today</p>
                    <h1 className='text-[18px] my-3'>Become an instructor and spread your knowledge</h1>
                    <div className='border border-spacing-2 w-36 text-center bg-blue-700 text-white hover:bg-yellow-500 hover:text-black rounded-lg'>
                       <Link to={'/view_details'}> <button className='p-2'>View Details</button></Link>
                    </div>
                </div>
                <div>
                    <img className='hover:scale-110' src={teacher} alt="" />
                </div>
            </div>
            <div className='flex bg-gray-200 p-3'>
                <div>
                    <p className='text-md text-blue-800 fw-bold'>Discover your gain</p>
                    <h1 className='text-[18px] my-3'>Keep your skilled centers of excellence competitive</h1>
                    <div className='border border-spacing-2 w-40 text-center bg-blue-700 text-white hover:bg-yellow-500 hover:text-black rounded-lg'>
                        <button className='p-2'>Browse courses</button>
                    </div>
                </div>
                <div>
                    <img className='"hover:scale-110 cursor-pointer' src={teacher2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CourseTitle;