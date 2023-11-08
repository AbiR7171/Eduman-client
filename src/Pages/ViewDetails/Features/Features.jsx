import React from 'react';
import featuresOne from './../../../assets/Images/viewDetails/features/features-1.png'
import featuresTwo from './../../../assets/Images/viewDetails/features/features-2.png'
import featuresThree from './../../../assets/Images/viewDetails/features/features-3.png'

const Features = () => {
    return (
        <div className='grid grid-cols-3 gap-5 h-[200px] my-20 text-left w-10/12 mx-auto'>
            <div>
                <img className='mx-auto hover:scale-110 my-3 hover:bottom-7' src={featuresOne} alt="" />
                <h1 className='text-2xl text-center my-4 fw-bold '>Expand Yourself</h1>
                <p className='fw-bolder'>Expand your professional network, build your expertise, and earn money on each paid enrollment and find the university</p>
            </div>
            <div>
                <img className='mx-auto hover:scale-110 my-3 hover:bottom-7'  src={featuresTwo} alt="" />
                <h1 className='text-2xl text-center my-4 fw-bold '>Expand Yourself</h1>
                <p>Publish the course you want, in the way you want, and always have of control your own content. If you are passionate</p>
            </div>
            <div>
                <img className='mx-auto hover:scale-110 my-3 hover:bottom-7'  src={featuresThree} alt="" />
                <h1 className='text-2xl text-center my-4 fw-bold '>Earn Money</h1>
                <p>Earn money from Law is a career-oriented course after your 12th or graduation. We have jotted some of the instructors.</p>
            </div>
        </div>
    );
};

export default Features;