import React from 'react';
import './Banner.css'
import { LiaGreaterThanSolid } from 'react-icons/lia';
import ShareBanner from '../../../../Shared/ShareBanner';

const Banner = () => {
    return (
        // <div className='banner text-black py-32 ps-7'>
        //     <h1 className='text-5xl  '>Become an Instructor</h1>
        //    <div className='flex '>
        //     <p>Home</p>
        //     <LiaGreaterThanSolid className=' pt-2'></LiaGreaterThanSolid>
        //     <p>Become an Instructor</p>
        //    </div>
        // </div>
        <ShareBanner  title={"Become an Instructor"} path={"Home"} ></ShareBanner>
    );
};

export default Banner;