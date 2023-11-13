import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AppliedInstructor = () => {
  const [instructor, setInstructor] = useState([])
  const [refresh, setRefresh] = useState(true);
  const navigate = useNavigate()
  useEffect(()=>{
    fetch("https://eduman-server-silk.vercel.app/requestInstructor")
    .then(res => res.json())
    .then(data => setInstructor(data))
  },[refresh])
  const handleApproved =(email,img) =>{
    const currentRole = {
      role: "instructor",
      image: img
    }
    fetch(`https://eduman-server-silk.vercel.app/instructorReq/${email}`,{
                method : 'PUT',
                headers:{
                    "content-type" : "application/json",
                },
                body: JSON.stringify(currentRole),
            })
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data)
                navigate("/admin")
                setRefresh(!refresh)
            })
            .then((error =>{
                console.log(error);
            }))
            fetch(`https://eduman-server-silk.vercel.app/delete/${email}`,{
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
                  title: 'the instructor approved',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
          })
          .then((error =>{
              console.log(error);
          }))
  }
  const handleDelete =(email) =>{
    fetch(`https://eduman-server-silk.vercel.app/delete/${email}`,{
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
                  title: 'instructor request removed',
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
  if(instructor.length == 0){
    return(
      <div className='flex justify-center items-center mt-[35vh] text-6xl font-mono'>instructor request empty</div>
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
        <th>Name</th>
        <th>Category</th>
        <th>Email</th>
        <th>Date </th>
        <th>Time </th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        instructor?.map((singleInstructor, i)=>(
          <tr key={i}>
        <th>
          <label>
            {i+1}
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={singleInstructor.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
        <div>
              <div className="font-bold">{singleInstructor.name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
        </td>
        
        <td>
          {singleInstructor.category}
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>
          {singleInstructor.email}
        </td>
        <td>{new Date(singleInstructor?.time).getDate()}/{new Date(singleInstructor?.time).getMonth()+1}/{new Date(singleInstructor?.time).getFullYear()}</td>
        <td>{new Date(singleInstructor?.time).getHours() > 12 ?  new Date(singleInstructor?.time).getHours() - 12 :  new Date(singleInstructor?.time).getHours() }:{new Date(singleInstructor?.time).getMinutes() <10 && "0"}{new Date(singleInstructor?.time).getMinutes()} {new Date(singleInstructor?.time).getHours() > 12 ?  "PM" : "AM" }</td>
        <td></td>
        <th className='grid'>
          <button className="btn btn-ghost btn-xs" onClick={()=>handleApproved(singleInstructor.email, singleInstructor.image)}>approved</button>
          <button className="btn btn-ghost btn-xs" onClick={()=>handleDelete(singleInstructor.email)}>Decline</button>
        </th>
      </tr>
        ))
      }
      
     
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AppliedInstructor;