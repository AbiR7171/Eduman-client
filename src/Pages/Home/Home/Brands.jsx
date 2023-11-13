import React from 'react';
import brand1 from './../../../assets/Images/brands/brand-1.png'
import brand2 from './../../../assets/Images/brands/brand-2.png'
import brand3 from './../../../assets/Images/brands/brand-3.png'
import brand4 from './../../../assets/Images/brands/brand-4.png'
import brand5 from './../../../assets/Images/brands/brand-5.png'

const Brands = () => {
    return (
        <div className='grid grid-cols-5 w-10/12 mx-auto gap-3 mt-10 '>
            <div>
                <img className='m-10' src={brand1} alt="" />
            </div>
            <div>
                <img className='m-10' src={brand2} alt="" />
            </div>
            <div>
                <img className='m-10' src={brand3} alt="" />
            </div>
            <div>
                <img className='m-10' src={brand4} alt="" />
            </div>
            <div>
                <img className='m-10' src={brand5} alt="" />
            </div>
        </div>
    );
};

export default Brands;