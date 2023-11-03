import React from 'react';

const ShareBanner = ({title,  path}) => {
    return (
        <div className='authenticationBg mt-10 mb-10 bg-opacity-50 relative'>
                                  
        <div className=' absolute inset-0 bg-white bg-opacity-10'>
          <div className='p-28'>
            <p className='text-5xl text-white font-serif '>{title}</p>
            <p className='text-2xl text-white mt-2'>Home >  {path}</p>
          </div>
        </div>
</div>
    );
};

export default ShareBanner;