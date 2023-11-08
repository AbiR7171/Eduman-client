
import React, { useContext, useEffect, useState } from 'react';
import useUsers from '../../Hooks/useUsers';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../API/AuthProvider';


const Enrolled = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([])
    const [courses, setCourses] = useState([])
    const [refresh, setRefresh] = useState(true)
    const [user] = useUsers()
    const {handleCartLoad} = useContext(AuthContext)
    useEffect(() => {
      fetch(`http://localhost:5000/myenrolled/${user.email}`)
          .then(res => res.json())
          .then(data => { setEnrolledCourses(data) })
  },[user?.email])
  useEffect(()=>{
    fetch("http://localhost:5000/allCourses")
    .then(res => res.json())
    .then(data => setCourses(data))
  },[user?.email])
  let items = []
  courses?.forEach((item)=>{
    const final = enrolledCourses.find(e =>(e.id === item._id))
    if(final){
      items.push(item)
    }
  })
  console.log(items)
  

if(items.length == 0){
    return(
      <div className='flex justify-center items-center mt-[35vh] text-6xl font-mono mb-[50vh]'>No course available</div>
    )
}
    return (
        <div className='grid grid-cols-3 justify-center w-10/12 mx-auto gap-y-6 my-10'>
            {
                items?.map((course,i)=>(
                    <div key={i} className='bg-white w-[350px]   rounded-2xl relative shadow-lg shadow-slate-600 pb-5'>
                    <div className='sayem'>
                        <div>
                            <img src={course.image} alt="" className='w-full rounded-2xl h-48' />
                        </div>
                        <div className='pl-8 pr-8'>
                            <button className='bg-green-500 w-auto px-2 rounded-md mt-2 text-white font-semibold'>{course.category}</button>
                            <p className='text-xl font-serif '>{course.title}</p>
                            <p className='text-blue-600 font-semibold text-xl pt-2'>${course.price}</p>
                            <div className='flex gap-5 my-5'>
                            <img src={course.instructorimg} alt=""  className='rounded-full w-10 h-10' />
                            <p>{course.instructorName}</p>
                            </div>
                            <hr />
                            
                            <div className='flex justify-between items-center'>
                                <div className='text-slate-400'>
                                    <p>Enrolled</p>
                                </div>
                                <div className='h-8 w-[1px] bg-slate-200'></div>
                                <div>
                                    <Link to={`../details/${course._id}`}><button className='text-blue-500'>View Details {'->'}</button></Link>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    </div>
                ))
            }
            
        </div>
    );
};

export default Enrolled;
