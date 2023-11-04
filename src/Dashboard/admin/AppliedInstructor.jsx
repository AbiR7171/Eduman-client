import React, { useEffect, useState } from 'react';

const AppliedInstructor = () => {
  const [instructor, setInstructor] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/requestInstructor")
    .then(res => res.json())
    .then(data => setInstructor(data))
  },[])
  console.log(instructor)
  const handleApproved =(email) =>{
    
    const currentRole = {
      role: "instructor",
    }
    fetch(`http://localhost:5000/instructorReq/${email}`,{
                method : 'PUT',
                headers:{
                    "content-type" : "application/json",
                },
                body: JSON.stringify(currentRole),
            })
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data)
            })
            .then((error =>{
                console.log(error);
            }))
  }
  const handleDelete =(email) =>{
    fetch(`http://localhost:5000/delete/${email}`,{
                method : 'DELETE',
                headers:{
                  "content-type" : "application/json",
              },
                
            })
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data)
            })
            .then((error =>{
                console.log(error);
            }))
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
        <td>{singleInstructor.time}</td>
        <th className='grid'>
          <button className="btn btn-ghost btn-xs" onClick={()=>handleApproved(singleInstructor.email)}>approved</button>
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