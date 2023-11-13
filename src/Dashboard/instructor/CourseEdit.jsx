import React, { useEffect, useState } from 'react';
import useUsers from '../../Hooks/useUsers';
import { useLoaderData, useParams } from 'react-router-dom';
import { imgUpload } from '../../API/imgbb';
import Swal from 'sweetalert2';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";


const CourseEdit = () => {
    
    
    const [course, setCourse] = useState([])
    const [topic, setTopic] = useState();
    const [requirement, setRequirement] = useState();
    const [refresh, setRefresh] = useState(true);
    const [curriculum, setCurriculum] = useState();
    const [link, setLink] = useState();
    const [imageName, setImageName] = useState('image-name')
    const [user] = useUsers();
    const {id}  = useParams();
    

    console.log(course)
    useEffect(()=>{
        fetch(`http://localhost:5000/singleCourse/${id}`)
        .then(res => res.json())
        .then(data => {setCourse(data)})
      },[id, refresh])
    useEffect(()=>{
        setTopic(course.learnTopic)
    },[course])
    useEffect(()=>{
        setRequirement(course.requirement)
    },[course])
    useEffect(()=>{
        setCurriculum(course.curriculum)
    },[course])
    // requirement  function start
    const handleAdd = () =>{
        const inp = [...requirement,[]]
        setRequirement(inp)
    }
    const handleChanges = (onchangeValue,i) =>{
        const inputRequirementData = [...requirement]
        inputRequirementData[i]=onchangeValue.target.value
        setRequirement(inputRequirementData);
    }
    const handleDelete =(i)=>{
        const deleteRequirementInput= [...requirement]
        deleteRequirementInput.splice(i,1)
        setRequirement(deleteRequirementInput)
    }
    // requirement  function end
    // curriculum  function start
    const handleAdd2 = () =>{
        const inp = [...curriculum,[]]
        setCurriculum(inp)
    }
    const handleChanges2 = (onchangeValue,i) =>{
        const inputCurriculumData = [...curriculum]
        inputCurriculumData[i]=onchangeValue.target.value
        setCurriculum(inputCurriculumData);
    }
    const handleDelete2 =(i)=>{
        const deleteCurriculumInput= [...curriculum]
        deleteCurriculumInput.splice(i,1)
        setCurriculum(deleteCurriculumInput)
    }
    // curriculum  function end
    const handleAdd3 = () =>{
        const inp = [...topic,[]]
        setTopic(inp)
    }
    const handleChanges3 = (onchangeValue,i) =>{
        const inputTopicData = [...topic]
        inputTopicData[i]=onchangeValue.target.value
        setTopic(inputTopicData);
    }
    const handleDelete3 =(i)=>{
        const deleteTopicInput= [...topic]
        deleteTopicInput.splice(i,1)
        setTopic(deleteTopicInput)
    }
    // curriculum  function end
    // form value
    const handleImageChange = image =>{
        setImageName(image.name)
    }
    const handleForm = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const title = form.title.value;
        const description = form.description.value;
        const video = form.video.value;
        const instructorName1 = form.instructorName1.value;
        const instructorName2 = form.instructorName2.value;
        const instructorEmail = form.instructorEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const language = form.language.value;
        const level = form.level.value;
        const instructorimg = form.instructorimg.value;
        const image = form.image.files[0];
            if(image){
                imgUpload(image).then(data =>{
                    const imgLink = data.data.display_url;
                    setLink(imgLink)
                    console.log(instructorData)
                })
            }
        const instructorData = {
            name : name,
            title : title,
            description : description,
            video : video,
            image : link?link:course.image,
            requirement : requirement,
            curriculum : curriculum,
            learnTopic : topic,
            instructorName : `${instructorName1} ${instructorName2}`,
            instructorEmail : instructorEmail,
            instructorimg : instructorimg,
            category : category,
            price : price,
            language : language,
            level : level,
            date : new Date()
        }
        fetch(`http://localhost:5000/courseEdit/${id}`,{
            method : 'PUT',
            headers:{
                "content-type" : "application/json",
            },
            body: JSON.stringify(instructorData),
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
        })
        .then((error =>{
            console.log(error);
            if(!error){
                Swal.fire({
                    title: "Update successfull",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                setRefresh(!false)
            }
        }))
    }
  
    return (
        <div className='flex gap-40 justify-center mt-10'>
        <div>
          <form action="" onSubmit={()=>handleForm(event)} className='flex flex-col gap-5'>
          <div className='grid justify-center items-center  '>
          <input type="text" name='name' defaultValue={course.name} className='bg-transparent  rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter course name'/>
          <div className='w-96 h-1 bg-slate-400'></div>
          </div>    
          <div className='grid justify-center items-center '>
          <input type="text" name='title' defaultValue={course.title} className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter course title'/> 
          <div className='w-96 h-1 bg-slate-400'></div>
          </div>   
          <div className='grid justify-center items-center '>
          <input type="text" name='category' defaultValue={course.category} className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter course category'/> 
          <div className='w-96 h-1 bg-slate-400'></div>
          </div>   
          <span>Course thumbnail</span>
          <label className='border-4 border-dashed px-2 py-2 border-blue-700 grid justify-center text-center'>
                  
                  <input
                    onChange={(event)=>handleImageChange(event.target.files[0])}
                    className='text-sm cursor-pointer w-36 hidden'
                    type='file'
                    name='image'
                    id='image'
                    accept='image/*'
                    hidden
                    
                  />
                  <div className='bg-blue-700 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500 w-40 text-center '>
                    Upload Image 
                  </div>
                  <div className='font-semibold font-serif'>
                  {imageName} 
                  </div>
                </label>
          <div className='grid justify-center items-center border-2 h-40 border-blue-700'>
          <textarea type="text" cols="10" rows="6" defaultValue={course.description} name='description' className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter course description'></textarea>
          {/* <div className='w-96 h-1 bg-slate-400'></div> */}
          </div>   
          
          <div className='grid justify-center items-center  '>
          <input type="text" name='lessons' defaultValue={course.lessons} className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter lessons'/>
          <div className='w-96 h-1 bg-slate-400'></div>
          </div>
          <div className='grid justify-center items-center  '>
          <input type="url" name='video' defaultValue={course.video} className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter introduction video link'/>
          <div className='w-96 h-1 bg-slate-400'></div>
          </div>
          <div className='grid justify-center items-center '>
          <input type="number" name='price' defaultValue={course.price} className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter course price'/>
          <div className='w-96 h-1 bg-slate-400'></div>
          </div>
          <div className='grid justify-center items-center '>
          <input type="text" name='language' defaultValue={course.language} className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter course language'/>
          <div className='w-96 h-1 bg-slate-400'></div>
          </div>
          <div className='grid justify-center items-center '>
          <input type="text" name='level' defaultValue={course.level} className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter course level'/>
          <div className='w-96 h-1 bg-slate-400'></div>
          </div>
          <div className='grid justify-center items-center gap-2 '>
              
          {
              requirement?.map((data,i)=>{
                  return(
                      <div key={i} className='flex'>
                          <div>
                          <input value={data} type="text" onChange={e=>handleChanges(e,i)} className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='enter requiremnet'/>
                          <div className='w-96 h-1 bg-slate-400'></div>
                          </div>
                          {
                              requirement.length != 1 &&<button onClick={()=>handleDelete(i)} className='text-3xl mt-3 text-red-500'><AiOutlineCloseCircle/></button>
                          }
                      </div>
                  )
              }
          )}   
          <div className='bg-blue-700 w-44 mx-auto mt-3 rounded-xl text-white text-center py-2 cursor-pointer flex gap-2 items-center pl-2' onClick={()=>handleAdd()}><GrAddCircle/>Add Requirement</div>
          </div>
          <div className='grid justify-center items-center gap-2 '>
          {
              curriculum?.map((data,i)=>{
                  return(
                      <div key={i} className='flex'>
                         <div>
                         <input value={data} type="text" onChange={e=>handleChanges2(e,i)} className='bg-transparent outline-none rounded-md py-2 pl-2 w-96' placeholder='enter curriculum'/>
                         <div className='w-96 h-1 bg-slate-400'></div>
                         </div>
                          {
                              curriculum.length != 1 && <button onClick={()=>handleDelete2(i)} className='text-3xl mt-3 text-red-500 '><AiOutlineCloseCircle/></button>
                          }
                      </div>
                  )
              }
          )}   
          <div className='bg-blue-700 w-44 mx-auto mt-3 rounded-xl text-white text-center py-2 cursor-pointer flex gap-2 items-center pl-2' onClick={()=>handleAdd2()}><GrAddCircle/>Add curriculum</div>
          </div>
          <div className='grid justify-center items-center gap-2 '>
         
          {
              topic?.map((data,i)=>{
                  return(
                      <div key={i} className='flex' >
                          <div>
                          <input value={data}  type="text" onChange={e=>handleChanges3(e,i)} className='bg-transparent outline-none rounded-md py-2 pl-2 w-96' placeholder='enter Learning topic'/>
                          <div className='w-96 h-1 bg-slate-400'></div>
                          </div>
                          {
                              topic.length != 1 && <button onClick={()=>handleDelete3(i)} className='text-red-500 text-3xl mt-3'><AiOutlineCloseCircle/></button>
                          }
                      </div>
                  )
              }
          )}   
          <input type="text" name="instructorName1" defaultValue={user.FirstName} id="" className='hidden' />
          <input type="text" name="instructorName2" defaultValue={user.LastName} id="" className='hidden' />
          <input type="text" name="instructorEmail" id="" defaultValue={user.email} className='hidden' />
          <input type="text" name="instructorimg" id="" defaultValue={user.image} className='hidden' />
          <div className='bg-blue-700 w-44 mx-auto mt-3 rounded-xl text-white text-center py-2 cursor-pointer flex gap-2 items-center pl-2' onClick={()=>handleAdd3()}><GrAddCircle className='text-white '/>Add Topic</div>
          </div>
           <hr className='h-10s'/>
              <input type="submit" name="" id="" className='bg-blue-700 rounded-md w-40 mx-auto py-2 mb-10 cursor-pointer text-white'/>
          </form>  
        </div>  
        
      </div>
    );
};

export default CourseEdit;