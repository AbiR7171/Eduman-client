import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Instructorslist = () => {
  const [instructor, setInstructor] = useState([])
  const [refresh, setRefresh] = useState(true);
  useEffect(()=>{
    fetch("https://eduman-server-silk.vercel.app/allInstructor")
    .then(res => res.json())
    .then(data => setInstructor(data))
  },[refresh])
  const handleApproved =(email,img) =>{
    
    const currentRole = {
      role: "user",
    }
    console.log(currentRole)
    fetch(`https://eduman-server-silk.vercel.app/instructorReq/${email}`,{
                method : 'PUT',
                headers:{
                    "content-type" : "application/json",
                },
                body: JSON.stringify(currentRole),
            })
            .then((res)=> res.json())
            .then((data)=>{
                if(data.acknowledged){
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'This user remove from instructors',
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
      <div className='flex justify-center items-center mt-[35vh] text-6xl font-mono'>Instructor not available</div>
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
  <th>Emali</th>
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
    {singleInstructor.email}
    <br/>
    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
  </td>
  <th className='grid'>
    <button className="btn btn-ghost btn-xs" onClick={()=>handleApproved(singleInstructor.email, singleInstructor.image)}>remove instructor</button>
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

export default Instructorslist;