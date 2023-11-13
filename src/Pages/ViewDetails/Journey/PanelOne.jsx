import React from 'react';
import panelImg from './../../../assets/Images/viewDetails/features/tab-1.png'

const PanelOne = () => {
    return (
        <div className='grid grid-cols-2 w-10/12 mx-auto'>
            <div className='w-[400px] my-10'> 
                 <div>
                    <p className='text-xl my-3'>01. Record your video</p>
                    <p className=''>Helping employees gain skills and providing development often take a back seat to business priorities workplace. We offer fresh courses on emerging topics.</p>
                </div>
                <div>
                    <p className='text-xl my-3'>02. Record your video</p>
                    <p>Learn Programming Languages to have a strong emphasis on functional programming. You can study any of the courses present below and get the complete.</p>
                </div>
            </div>
            <div>
                <img className='my-10' src={panelImg} alt="" />
            </div>
        </div>
    );
};

export default PanelOne;