import React from 'react';
import bannerImage from "../../../assets/Images/Left.png"
import animationOne from "../../../assets/Images/shape-01.png"
import animationTwo from "../../../assets/Images/shape-02.png"
import animationTree from "../../../assets/Images/slider-shape-6.png"
import leftSideImage from "../../../assets/Images/shape-04.png"
import leftSideImageTwo from "../../../assets/Images/yGPvj1Kf4TiM79f7xuEn1rDpX01YDEBZghsE5eHD.png"

const Banner = () => {
    return (
      <div className='bg-blue-100 bg-opacity-10'>
                 
             
             <div 
             className='grid grid-cols-2 gap-2 items-center  '
        > 

            <div className='space-y-3 ms-20'>
                 <p className="text-blue-600 font-bold text-2xl">Discover your journey</p>
                 <p className='text-black font-bold text-5xl'>Discover 4500+ <br /> Courses from top Instructors  Around the World</p>
                 <p className='text-gray-500'>Take your learning organization to the next level. to the next level. Who will share their knowledge to people around the world.</p>
                 <button className="btn-primary px-10 py-3">View All Courses</button>
            </div>

            <div className='bannerBg relative'> 


                      <img src={animationOne} className='absolute top-32 left-40 animate-spin  ' alt="" />
                      <img src={animationTwo}  className='absolute right-32 top-32 animate-pulse' alt="" />

                <div className='shadow-lg p-4 w-48 rounded flex flex-col justify-center items-center bg-white 
                 absolute top-56 left-32 
                '>
                       <img src={leftSideImage} alt="" />
                        <p className='text-2xl font-bold text-center'>Top Rated Instructors</p>
                </div> 

                

            


              
              <div className='shadow-xl p-4 rounded w-64 absolute top-80 right-10  bg-white animate-bounce'>
                     <p className='text-gray-400'>More than 21,500+ students <br /> enrolled around the world</p>
                 </div>
                    
            </div>
            
        </div>
      </div>
    );
};

export default Banner;