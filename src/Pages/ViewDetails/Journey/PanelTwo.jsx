import React from 'react';
import panelImg from './../../../assets/Images/viewDetails/features/tab-2.png'

const PanelTwo = () => {
    return (
        <div className='grid grid-cols-2 w-10/12 mx-auto'>
            <div className='w-[400px] my-10'> 
                 <div>
                    <p className='text-xl my-3'>01. Do a short list</p>
                    <p className=''>Helping employees gain skills and providing development often take a back seat to business priorities workplace. We offer fresh courses on emerging topics.</p>
                </div>
                <div>
                    <p className='text-xl my-3'>02. How we help you</p>
                    <p>Learn Programming Languages to have a strong emphasis on functional programming. You can study any of the courses present below and get the complete.</p>
                </div>
            </div>
            <div>
                <img className='my-10' src={panelImg} alt="" />
            </div>
        </div>
    );
};

export default PanelTwo;