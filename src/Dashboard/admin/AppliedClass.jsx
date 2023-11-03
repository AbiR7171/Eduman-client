import React, { useEffect, useState } from 'react';

const AppliedClass = () => {
  const [courseData, setCourseData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/requestCourses")
    .then(res => res.json())
    .then(data => setCourseData(data))
  },[])
    return (
        <div>
             <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            #
          </label>
        </th>
        <th>picture</th>
        <th>Instructor</th>
        <th>Title</th>
        <th>Time</th>
        <th>Price</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
        {
          courseData?.map((course, i) =>(
            <tr key={i}>
        <th>
          <label>
            {i +1}
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={course.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
        <div>
              <div className="font-bold">{course.instructorName}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
        </td>
        
        <td>
          {course.title}
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>{course.date}</td>
        <td>
            {course. price}
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">View Detalils</button>
          
        </th>
        <th className='grid'>
          <button className="btn btn-ghost btn-xs">approved</button>
          <button className="btn btn-ghost btn-xs">Decline</button>
        </th>
      </tr>
          ))
        }
        
     
      
      
    </tbody>
    {/* foot */}
   
    
  </table>
</div>
        </div>
    );
};

export default AppliedClass;