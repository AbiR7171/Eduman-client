import React from 'react';
import countOne from './../../assets/Images/viewDetails/features/count-1.png'
import countTwo from './../../assets/Images/viewDetails/features/count-2.png'
import countThree from './../../assets/Images/viewDetails/features/count-3.png'
import countFour from './../../assets/Images/viewDetails/features/count-4.png'

const Counts = () => {
    return (
        <div className='bg-blue-800 py-16 grid grid-cols-4 text-center'>
            <div>
                <img className='mx-auto' src={countOne} alt="" />
                <p className='text-4xl my-5 text-white'>20030</p>
                <p className='text-xl text-white'>Students Enrolled</p>
            </div>
            <div>
                <img className='mx-auto'  src={countTwo} alt="" />
                <p className='text-4xl my-5'>33333</p>
                <p className='text-xl text-white'>Class Completed</p>
            </div>
            <div>
                <img className='mx-auto'  src={countThree} alt="" />
                <p className='text-4xl my-5 text-white'>9765</p>
                <p className='text-xl text-white'>Skills Enrolled</p>
            </div>
            <div>
                <img className='mx-auto'  src={countFour} alt="" />
                <p className='text-4xl my-5 text-white'>34221</p>
                <p className='text-xl text-white'>Technical Coursers</p>
            </div>
        </div>
    );
};

export default Counts;