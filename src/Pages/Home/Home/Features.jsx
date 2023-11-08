import React from 'react';
import imageOne from './../../../assets/Images/image-1.png';
import imageTwo from './../../../assets/Images/image-2.png';
import imageThree from './../../../assets/Images/image-3.png';
import './feature.css'

const Features = () => {
    return (
        <div className='  feature'>
            <div className='grid grid-cols-3 w-11/12 mx-auto'>
                <div className='flex gap-3 mt-9'>
                    <img className='h-14 w-10' src={imageOne} alt="" />
                    <h1 className='text-3xl text-white'>Learn with skills over 2,420 courses</h1>
                </div>
                <div className='flex gap-3 mt-9'>
                    <img className='h-14 w-10' src={imageTwo} alt="" />
                    <h1 className='text-3xl text-white'>Earn certificates and degrees</h1>
                </div>
                <div className='flex gap-3 mt-9'>
                    <img className='h-14 w-10' src={imageThree} alt="" />
                    <h1 className='text-3xl text-white'>Learn from anywhere, any time</h1>
                </div>
            </div>
        </div>
    );
};

export default Features;