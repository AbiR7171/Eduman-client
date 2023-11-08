import React, { useState } from 'react';
import AllCourses from './courses/AllCourses';
import Business from './courses/Business';
import DataScience from './courses/DataScience';
import LifeStyle from './courses/LifeStyle';
import WebDev from './courses/WebDev';

const Courses = () => {
    const [route, setRoute] = useState('All')
    return (
        <div className='bg-slate-200 py-20'>
            <div className='flex justify-around mb-14'>
                <div>
                    <h1 className='text-4xl font-serif font-semibold'>Discover <br />Worlds Best Courses</h1>
                </div>
                <div>
                    <ul className='flex gap-10 font-mono'>
                        <li onClick={()=>setRoute('All')} className={`${route == 'All' && 'text-blue-700'} cursor-pointer`}>All</li>
                        <li onClick={()=>setRoute('Business')} className={`${route == 'Business' && 'text-blue-700'} cursor-pointer`}>Business</li>
                        <li onClick={()=>setRoute('Data Science')} className={`${route == 'Data Science' && 'text-blue-700'} cursor-pointer`}>Data Science</li>
                        <li onClick={()=>setRoute('Life Style')} className={`${route == 'Life Style' && 'text-blue-700'} cursor-pointer`}>Life Style</li>
                        <li onClick={()=>setRoute('web Develoment')} className={`${route == 'web Develoment' && 'text-blue-700'} cursor-pointer`}>web Develoment</li>
                    </ul>
                </div>
            </div>
            <div>
                {
                    route == "All" && <AllCourses></AllCourses>
                }
                {
                    route == "Business" && <Business route={route}></Business>
                }
                {
                    route == "Data Science" && <DataScience route={route}></DataScience>
                }
                {
                    route == "Life Style" && <LifeStyle route={route}></LifeStyle>
                }
                {
                    route == "web Develoment" && <WebDev route={route}></WebDev>
                }
            </div>
        </div>
    );
};

export default Courses;