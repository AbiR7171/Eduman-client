import React from 'react';
import { Icon } from '@iconify/react';
import choose from './../../../assets/Images/choose.png'

const Choose = () => {
    return (
        <div className='grid grid-cols-2 mt-32 w-11/12 mx-auto'>
            <div className='w-2/3 relative'>
                <h1 className='text-[33px]'>Why Students Choose Us for Gain Their Knowledge</h1>
                <p className='mt-5 mb-5'>Helping employees gain skills and providing career development often take a back seat to business priorities but workplace better right now. Seventy percent of workers think that.</p>
                <div className='flex gap-3'>
                <Icon className='text-3xl' icon="solar:check-circle-bold-duotone" /><span className='text-md'>Free for physically handcraft</span>
                </div>
                <div className='flex gap-3'>
                <Icon className='text-3xl' icon="solar:check-circle-bold-duotone" /><span className='text-md' >Easy to enroll courses</span>
                </div>
                <div className='flex gap-3'>
                <Icon className='text-3xl' icon="solar:check-circle-bold-duotone" /><span className='text-md' >Course certificate for particular course</span>
                </div>
                <div className='border w-32 h-10 bg-blue-500 text-white mt-4 text-center'>
                    <button className='text-center my-auto'>More about us</button>
                </div>
                
                
            </div>
            <div className='relative'>
                <div className='bg-blue-800 w-32 h-32 rounded-2xl absolute top-18 left-60' >

                </div>
                <div className='bg-yellow-400 w-32 h-32 rounded-2xl absolute left-[-145px] top-28'></div>
                <img src={choose} alt="" />
            </div>
        </div>
    );
};

export default Choose;