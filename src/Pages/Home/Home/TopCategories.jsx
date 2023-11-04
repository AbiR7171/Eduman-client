import React from 'react';
import { Icon } from '@iconify/react';
import useUsers from '../../../Hooks/useUsers';

const TopCategories = () => { 

      const[user]=useUsers();
      console.log(user);
    return (
        <div>
            <p className='text-center text-2xl font-serif'>Explore <br /> Our Top Categories</p>

            <div className='grid grid-cols-3 gap-4 px-32 mt-10 mb-20'> {/*Parent*/}
                 
                  <div className='flex items-center gap-5  hover:shadow-2xl hover:bg-white border p-3 rounded'>
                  <Icon icon="fa-solid:file-code" className='text-5xl text-blue-700' />

                  <div >
                       <p className="text-2xl text-black">Development</p>
                       <p className='text-gray-500'>Take Your journey with this course</p>
                  </div>
                      
                       
                  </div>

                  <div className='flex items-center gap-5  hover:shadow-2xl hover:bg-white border p-3 rounded '>
                  <Icon icon="bxs:shopping-bags" className='text-5xl text-blue-700' />

                  <div >
                       <p className="text-2xl text-black">Business</p>
                       <p className='text-gray-500'>Take Your journey with this course</p>
                  </div>
                      
                       
                  </div>

                  <div className='flex items-center gap-5  hover:shadow-2xl hover:bg-white border p-3 rounded '>
                  <Icon icon="majesticons:data-plus" className='text-5xl text-blue-700' />

                  <div >
                       <p className="text-2xl text-black">Data Science</p>
                       <p className='text-gray-500'>Discover the data science</p>
                  </div>
                      
                       
                  </div>

                  <div className='flex items-center gap-5  hover:shadow-2xl hover:bg-white border p-3 rounded '>
                  <Icon icon="carbon:white-paper" className='text-5xl text-blue-700' />

                  <div >
                       <p className="text-2xl text-black">Marketing</p>
                       <p className='text-gray-500'>Take Up your self in the next level</p>
                  </div>
                      
                       
                  </div>

                  <div className='flex items-center gap-5  hover:shadow-2xl hover:bg-white border p-3 rounded'>
                  <Icon icon="streamline:travel-hotel-pool-ladder-2-pool-stairs-swim-swimming-water-ladder" className='text-5xl text-blue-700' />

                  <div >
                       <p className="text-2xl text-black">Life Styles</p>
                       <p className='text-gray-500'>Improved your life style course</p>
                  </div>
                      
                       
                  </div>

                  <div className='flex items-center gap-5  hover:shadow-2xl hover:bg-white border p-3 rounded'>
                  <Icon  icon="material-symbols:add-a-photo-rounded" className='text-5xl text-blue-700' />

                  <div >
                       <p className="text-2xl text-black">Photography</p>
                       <p className='text-gray-500'>Become the great Photographer</p>
                  </div>
                      
                       
                  </div>

                  <div className='flex items-center gap-5  hover:shadow-2xl hover:bg-white border p-3 rounded'>
                  <Icon  icon="mdi:art" className='text-5xl text-blue-700' />

                  <div >
                       <p className="text-2xl text-black">Art and Design</p>
                       <p className='text-gray-500'>Grow your design skills</p>
                  </div>
                      
                       
                  </div>

                  <div className='flex items-center gap-5  hover:shadow-2xl hover:bg-white border p-3 rounded '>
                  <Icon icon="healthicons:hospitalized-outline"  className='text-5xl text-blue-700' />

                  <div >
                       <p className="text-2xl text-black">Health and Fitness</p>
                       <p className='text-gray-500'>Enjoy the health life with fitness</p>
                  </div>
                      
                       
                  </div>


                  <div className='flex items-center gap-5 hover:shadow-2xl hover:bg-white shadow-xl border p-3 rounded '>
                  <Icon icon="emojione-monotone:guitar"  className='text-5xl text-blue-700' />

                  <div >
                       <p className="text-2xl text-black">Music</p>
                       <p className='text-gray-500'>Improve your self with Music</p>
                  </div>
                      
                       
                  </div>

            </div>
            
        </div>
    );
};

export default TopCategories;