import React, { useEffect, useState } from 'react';
import useUsers from '../../Hooks/useUsers';
import CourseEdit from './CourseEdit';
import { Link } from 'react-router-dom';

const CourseList = () => {
    const [instructor, setInstructor] = useState([])
  const [refresh, setRefresh] = useState(true);
  const [user] = useUsers()
  useEffect(()=>{
    fetch(`https://eduman-server-silk.vercel.app/myCourse/${user.email}`)
    .then(res => res.json())
    .then(data => setInstructor(data))
  },[user.email])
  console.log(instructor)
  const handleRemove = () =>{

  }
    return (
        <div>
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
  <th>price</th>
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
    {singleInstructor.price}$
    <br/>
    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
  </td>
  <th className='grid'>
    <Link to={`/instructor/modal/${singleInstructor._id}`}  >Edit</Link>
  </th>
</tr>
  ))
}




</tbody>
</table>
</div>
  </div>
        </div>
    );
};

export default CourseList;