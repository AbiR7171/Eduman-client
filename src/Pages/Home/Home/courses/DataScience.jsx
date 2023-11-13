import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../../../Hooks/useUsers';
import { AuthContext } from '../../../../API/AuthProvider';
import { AiOutlineShoppingCart } from "react-icons/ai";

const DataScience = ({route}) => {
    const [courses, setCourses] = useState([])
    const [hover, setHover] = useState(true)
    const [items, setItems] = useState()
    const [hoverID, setHoverId] = useState('')
    const {handleCartLoad} = useContext(AuthContext)
    const [user] = useUsers()
    useEffect(()=>{
        fetch(`https://eduman-server-silk.vercel.app/course/filter/${route}`)
        .then(res => res.json())
        .then(data => setCourses(data))
      },[route])
      if(courses.length == 0){
        return(
          <div className='flex justify-center items-center mt-[35vh] text-6xl font-mono'>No course available</div>
        )
    }
    const handleHover = (id)=>{
        setHover(!hover)
        setHoverId(id)
      }
      const handleOut = (id)=>{
        setHover(!hover)
        setHoverId('')
      }
      const handleCart = (_id) =>{
        const data = {
            email : user.email,
            id : _id
        }
        Swal.fire({
            title: "Do you want  add to cart this course ?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://eduman-server-silk.vercel.app/addCart`,{
                method : 'POST',
                headers:{
                    "content-type" : "application/json",
                },
                body: JSON.stringify(data),
            })
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data)
                handleCartLoad()
            })
            .then((error =>{
                console.log(error);
            }))
              Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    }
    return (
        <div className='grid grid-cols-3 justify-center w-10/12 mx-auto gap-y-6'>
        {
            courses.map((course,i)=>(
                <div key={i} className='bg-white w-[350px]   rounded-2xl relative'>
                <div className='sayem'  onPointerEnter={()=>handleHover(course._id)} onMouseLeave={()=>handleOut()} >
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
                                28 lessons
                            </div>
                            <div className='h-8 w-[1px] bg-slate-200'></div>
                            <div>
                                <Link to={`details/${course._id}`}><button className='text-blue-500'>View Details {'->'}</button></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`${hoverID != course._id && 'hidden'} duration-100 text-center w-[330px] h-96 left-2 rounded-lg absolute top-0 bg-white `}>
                        <button className='bg-green-500 px-5 py-1 rounded-lg mt-5 mb-5'>{course?.category}</button>
                        <p className='text-left pl-3 text-2xl font-serif'>{course.title}</p>
                        <p className='text-left pl-3 '>Level: <span className='text-blue-500'>{course.level}</span></p>
                        <p className=' pl-3 text-justify pr-3'> {course.description}</p>
                        <div className='flex justify-around'>
                        <div>
                                    <Link to={`details/${course._id}`}><button className='px-4 py-2 mt-2 text-white font-semibold bg-blue-500 hover:bg-yellow-400 hover:text-black'>View Details </button></Link>
                                </div>
                            <button onClick={()=>handleCart(course._id)} className='border border-slate-500 px-4'><AiOutlineShoppingCart/></button>

                        </div>
                    </div>
                </div>
                </div>
            ))
        }
    </div>
    );
};

export default DataScience;