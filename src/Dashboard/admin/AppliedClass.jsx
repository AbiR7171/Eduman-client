import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AppliedClass = () => {
  const [courseData, setCourseData] = useState([])
  const [refresh, setRefresh] = useState(true);
  useEffect(()=>{
    fetch("http://localhost:5000/requestCourses")
    .then(res => res.json())
    .then(data => setCourseData(data))
  },[refresh])
  const handleApproved = (id) =>{
    const approvedData = courseData.filter(e =>e._id == id)
    fetch(`http://localhost:5000/approvedCourse`,{
                method : 'POST',
                headers:{
                    "content-type" : "application/json",
                },
                body: JSON.stringify(approvedData[0]),
            })
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data)
                setRefresh(!refresh)
            })
            .then((error =>{
                console.log(error);
            }))
    fetch(`http://localhost:5000/deleteAppliedCourse/${id}`,{
                method : 'DELETE',
                headers:{
                  "content-type" : "application/json",
              },
                
            })
            .then((res)=> res.json())
            .then((data)=>{
              if(data.deletedCount > 0){
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Course approved',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
            .then((error =>{
                console.log(error);
            }))
  }
  const handleDelete = (id) =>{
    fetch(`http://localhost:5000/deleteAppliedCourse/${id}`,{
                method : 'DELETE',
                headers:{
                  "content-type" : "application/json",
              },
                
            })
            .then((res)=> res.json())
            .then((data)=>{
              if(data.deletedCount > 0){
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'course request removed',
                  showConfirmButton: false,
                  timer: 1500
                })
                setRefresh(!refresh)
              }
            })
            .then((error =>{
                console.log(error);
            }))
  }
  if(courseData.length == 0){
    return(
      <div className='flex justify-center items-center mt-[35vh] text-6xl font-mono'>course request empty</div>
    )
  }
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
        <th>Date</th>
        <th>date</th>
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
        <td>{new Date(course?.date).getDate()}/{new Date(course?.date).getMonth()+1}/{new Date(course?.date).getFullYear()}</td>
        <td>{new Date(course?.date).getHours() > 12 &&  new Date(course?.date).getHours() - 12 }:{new Date(course?.date).getMinutes() <10 && "0"}{new Date(course?.date).getMinutes()} {new Date(course?.date).getHours() > 12 &&  "PM" }</td>
        <td>
            {course.price}
        </td>
        <th>
          <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>View Details</button>
          
        </th>
        <th className='grid gap-2 '>
          <button className="btn btn-ghost btn-xs bg-blue-700 text-white" onClick={()=>handleApproved(course._id)}>approved</button>
          <button className="btn btn-ghost btn-xs bg-blue-700 text-white" onClick={()=>handleDelete(course._id)}>Decline</button>
        </th>
        <tr>
<td>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className='mx-auto w-96'>
    <img src={course.image} alt="" className='w-96' />
    </div>
    <p className='text-3xl mb-2 mt-5 font-serif '>{course?.name}</p>
    <p className='text-2xl font-serif'>{course?.title}</p>
    <p className='my-3 text-justify'>{course?.description}</p>
    <p>Price: {course?.price}$</p>
    <span className='text-xl font-serif font-semibold '>Curriculum</span>
    <p className='grid gap-2'>{course?.curriculum.map((item, i)=>(<p>{item}</p>))}</p>
    <span className='text-xl font-serif font-semibold'>Requirement</span>
    <p className='grid gap-2'>{course?.requirement.map((item, i)=>(<p>{item}</p>))}</p>
    <hr className='my-5'/>
    <div className='flex items-center gap-5'>
      <img src={course.instructorimg} alt="" className='rounded-full w-14 h-14'/>
      <div className='-space-y-2'>
      <p className='text-sm'>Created by</p>
      <p className='text-xl'>{course.instructorName}</p>
      </div>
      
    </div>
  </div>
</dialog>
</td>
</tr>
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