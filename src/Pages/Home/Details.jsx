import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bgImage from '../../../public/bg-details.jpg'
import { Icon } from '@iconify/react';
import Swal from 'sweetalert2';
import useUsers from '../../Hooks/useUsers';
import AuthProvider, { AuthContext } from '../../API/AuthProvider';

const Details = () => {
    const { id } = useParams()
    const [course, setCourse] = useState([])
    const [refresh, setRefresh] = useState(true)
    const [user] = useUsers()
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const {handleCartLoad} = useContext(AuthContext);
    // const [seam, setSeam] = useState();
    let isEnrolled = []
    enrolledCourses?.forEach((item)=>{
        const final = course._id == item.id;
        if(final){
            const {id} = item

            isEnrolled.push(id)
            
        }
    })
    useEffect(() => {
        fetch(`https://eduman-server-silk.vercel.app/singleCourse/${id}`)
            .then(res => res.json())
            .then(data => { setCourse(data) })
    }, [id])
    useEffect(() => {
        fetch(`https://eduman-server-silk.vercel.app/existEnrooled/${user.email}`)
            .then(res => res.json())
            .then(data => { setEnrolledCourses(data) })
    }, [user, refresh])
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
    const handleEnroll = (_id) =>{
        const data = {
            email : user.email,
            id : _id
        }
        Swal.fire({
            title: "Do you want to enrolled this course?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "YES",
            denyButtonText: `NO`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://eduman-server-silk.vercel.app/enrolled`,{
                method : 'POST',
                headers:{
                    "content-type" : "application/json",
                },
                body: JSON.stringify(data),
            })
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data)
                
            })
            .then((error =>{
                console.log(error);
            }))
            
                const update = {
                    enroll : course.enroll?course.enroll + 1 : 1
                }
            
            fetch(`https://eduman-server-silk.vercel.app/enrolleUpdate/${id}`,{
                method : 'PUT',
                headers:{
                    "content-type" : "application/json",
                },
                body: JSON.stringify(update),
            })
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data)
                
            })
            .then((error =>{
                console.log(error);
            }))
            setRefresh(!refresh)
              Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    }
    return (
        <div className='h-[1100px]'>
            <div className={`w-full  h-[60vh] image-details bg-[url(../../../public/bg-details.jpg)] bg-cover bg-no-repeat `}>
                <div className='pl-20 pt-20'>
                <h1 className='text-6xl font-semibold text-white font-serif'>Course Details</h1>
                <div className='text-white flex gap-2 font-semibold'>
                <p>Courses</p> <span>{'>'}</span> <p>Course Details</p>
                </div>
                </div>
            </div>
            <div className='flex bg-transparent absolute top-72 gap-5 left-20'>
                <div className=' bg-white pr-5 rounded-lg pl-5'>
                    <h1 className='text-4xl pt-10'>{course.title}</h1>
                    <hr className='mt-10' />
                    <div className='flex gap-14 py-4 '>
                        <img src={course.instructorimg} alt="" className='w-10 h-10 rounded-full' />
                        <div><p>Created by</p> <p className='font-semibold'>{course.instructorName}</p></div>
                        <div className='bg-slate-300 h-14 w-[1px]'></div>
                        <div><p>Total Enrolled</p> <p className='font-semibold'>{course.enroll?course.enroll : '0'}</p></div>
                        <div className='bg-slate-300 h-14 w-[1px]'></div>
                        <div><p>Last Update</p> <p className='font-semibold'>{new Date(course?.date).getDate()}{new Date(course?.date).getMonth() + 1 == 1 && 'January'} {new Date(course?.date).getMonth() + 1 == 2 && 'February'}{new Date(course?.date).getMonth() + 1 == 3 && 'March'}{new Date(course?.date).getMonth() + 1 == 4 && 'April'}{new Date(course?.date).getMonth() + 1 == 5 && 'May'}{new Date(course?.date).getMonth() + 1 == 6 && 'June'}{new Date(course?.date).getMonth() + 1 == 7 && 'July'} {new Date(course?.date).getMonth() + 1 == 8 && 'August'} {new Date(course?.date).getMonth() + 1 == 9 && 'September'}{new Date(course?.date).getMonth() + 1 == 10 && 'October'}{new Date(course?.date).getMonth() + 1 == 11 && 'November'}{new Date(course?.date).getMonth() + 1 == 12 && 'December'} {"  "}{new Date(course?.date).getFullYear()}</p></div>
                        <div className='bg-slate-300 h-14 w-[1px]'></div>
                        <div><p>Category</p> <p className='font-semibold'>{course.category}</p></div>

                    </div>
                    <hr />
                    <div>
                        <h1>Description</h1>
                        <p className='w-[800px] text-justify'>{course.description}</p>
                    </div>
                    <div className='bg-blue-100 w-96 py-4 px-4 rounded-lg mt-5'>
                        <h1 className='py-5 font-serif font-semibold text-2xl'>What you'll learn</h1>
                        <div>
                            <div className=''>
                                {
                                    course?.learnTopic?.map((topic, i) => (
                                        <div key={i}>
                                            {topic}
                                        </div>))
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-serif font-semibold text-2xl mt-5 mb-2'>Requirement</h1>
                        <div>
                            
                                 {
                                    course?.requirement?.map((topic, i) => (
                                        <li key={i}>
                                            {topic}
                                        </li>))
                                }
                            
                        </div>
                    </div>
                    <div>
                        <h1 className='font-serif font-semibold text-2xl mt-5 mb-2'>Curriculum</h1>
                        <div>
                        {
                                    course?.curriculum?.map((topic, i) => (
                                        <li key={i}>
                                            {topic}
                                        </li>))
                                }
                        </div>
                    </div>
                    <div className='bg-blue-50 w-full py-4 px-4 rounded-lg mt-5'>
                        <h1 className='py-5 font-serif font-semibold text-2xl'>Instructor</h1>
                        <div className='flex gap-10'>
                            <img src={course.instructorimg} className='w-14 h-14 rounded-full' alt="" />
                            <div className='grid '>
                                <p className='font-semibold'>{course.instructorName}</p>
                                <p>Instructor</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' bg-white w-80 h-full rounded-lg border border-slate-300'>
                    <iframe
                    className='w-full px-5 py-5'
                        src="https://www.youtube.com/embed/N3Gqzfy2owY"
                        title="YouTube Video"
                        allowFullScreen
                    />
                    <div className='flex justify-around'>
                        <span>${course.price}</span>
                        <button onClick={()=>handleCart(course._id)} className='flex text-slate-500 font-semibold'><Icon icon="mdi:cart" className='text-3xl text-slate-400' />Add to cart</button>
                    </div>
                    <div className='w-72 mx-auto px-2'>
                        <div className='flex justify-between my-2'><p>Level</p><p>{course.level}</p></div>
                        <hr />
                        <div className='flex justify-between my-2'><p>Lectures</p><p>{course.lessons}</p></div>
                        <hr />
                        <div className='flex justify-between my-2'><p>Category</p><p>{course.category}</p></div>
                        <hr />
                        <div className='flex justify-between my-2'><p>Language</p><p>{course.language}</p></div>
                        <hr />
                    </div>
                    <div className='text-center mt-10 mb-5'>
                        {
                            isEnrolled[0] == course._id && <p className='text-blue-500 pb-2'>Already enrolled</p>
                        }
                    <button onClick={()=>handleEnroll(course._id)} disabled={isEnrolled[0] == course._id && 'disabled'} className={`${isEnrolled[0] == course._id ? 'bg-slate-300' : 'bg-blue-500  hover:bg-yellow-600'} py-2 px-2 rounded-lg text-white`}>Start Course</button>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Details;