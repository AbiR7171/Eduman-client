import React from 'react';
import img from './../../../assets/Images/viewDetails/features/edu.png'

const Education = () => {
    return (
        <div className='grid grid-cols-2 w-2/3 mx-auto mt-40'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1 className='text-3xl my-5'>Transform Your Life Through Education</h1>
                <p className='text-lg my-2'>Helping employees gain skills and providing career development often take a back seat to business priorities but workplace.</p>
                <div className='border border-spacing-3 p-3 rounded-xl bg-white w-52 hover:bg-blue-700 hover:text-white text-black text-xl'>
                <button>Watch how to start</button>
                </div>
            </div>
        </div>
    );
};

export default Education;