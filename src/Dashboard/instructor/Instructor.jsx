import React, { useState } from 'react';
import instructorImg from '../../../public/instructor.jpg';
import { imgUpload } from '../../API/imgbb';

const Instructor = () => {
    const [requirement, setRequirement] = useState(['']);
    const [curriculum, setCurriculum] = useState(['']);
    const [topic, setTopic] = useState(['']);
    const [imageName, setImageName] = useState('Upload image')
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
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const price = form.price.value;
        const image = form.image.files[0];
        imgUpload(image).then(data =>{
            const imgLink = data.data.display_url;
            const instructorData = {
                name : name,
                title : title,
                description : description,
                video : video,
                image : imgLink,
                requirement : requirement,
                curriculum : curriculum,
                learnTopic : topic,
                instructorName : instructorName,
                instructorEmail : instructorEmail,
                price : price,
                date : new Date()
            }
            fetch("http://localhost:5000/appliedCourses",{
                method : 'POST',
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
            }))
            console.log(instructorData)
        })
    }
    
    return (
        <div className='flex gap-40 justify-center items-center'>
          <div>
            <img src={instructorImg} alt="" className='w-96' />
          </div>
          <div>
            <form action="" onSubmit={()=>handleForm(event)} className='flex flex-col gap-5'>
            <div className='grid justify-center items-center gap-2'>
            <label>Course Name</label>
            <input type="text" name='name' className='bg-slate-100 rounded-md py-2 pl-2 w-96' placeholder='Enter course name'/>
            </div>    
            <div className='grid justify-center items-center gap-2'>
            <label>Course Title</label>
            <input type="text" name='title' className='bg-slate-100 rounded-md py-2 pl-2 w-96' placeholder='Enter course title'/> 
            </div>   
            <label>
                    <span>Course thumbnail</span>
                    <input
                      onChange={(event)=>handleImageChange(event.target.files[0])}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                      required
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                      {imageName} 
                    </div>
                  </label>
            <div className='grid justify-center items-center gap-2'>
            <label>Course Description</label>
            <input type="text" name='description' className='bg-slate-100 rounded-md py-2 pl-2 w-96' placeholder='Enter course description'/>
            </div>    
            <div className='grid justify-center items-center gap-2 '>
            <label>Video URL</label>
            <input type="url" name='video' className='bg-slate-100 rounded-md py-2 pl-2 w-96' placeholder='Enter introduction video link'/>
            </div>
            <div className='grid justify-center items-center gap-2 '>
            <label>Course price</label>
            <input type="number" name='price' className='bg-slate-100 rounded-md py-2 pl-2 w-96' placeholder='Enter course price'/>
            </div>
            <div className='grid justify-center items-center gap-2 '>
                <label > Course Rquirement</label>
            {
                requirement.map((data,i)=>{
                    return(
                        <div key={i} >
                            <input value={data} type="text" onChange={e=>handleChanges(e,i)} className='bg-slate-100 rounded-md py-2 pl-2 w-96' placeholder='enter requiremnet'/>
                            {
                                requirement.length != 1 &&<button onClick={()=>handleDelete(i)}>X</button>
                            }
                        </div>
                    )
                }
            )}   
            <button className='bg-green-400' onClick={()=>handleAdd()}>+Add Requirement</button>
            </div>
            <div className='grid justify-center items-center gap-2 '>
                <label > Curriculum</label>
            {
                curriculum.map((data,i)=>{
                    return(
                        <div key={i} >
                            <input value={data} type="text" onChange={e=>handleChanges2(e,i)} className='bg-slate-100 rounded-md py-2 pl-2 w-96' placeholder='enter curriculum'/>
                            {
                                curriculum.length != 1 && <button onClick={()=>handleDelete2(i)}>X</button>
                            }
                        </div>
                    )
                }
            )}   
            <button className='bg-green-400' onClick={()=>handleAdd2()}>+Add curriculum</button>
            </div>
            <div className='grid justify-center items-center gap-2 '>
                <label > Whats student Learn</label>
            {
                topic.map((data,i)=>{
                    return(
                        <div key={i} >
                            <input value={data} type="text" onChange={e=>handleChanges3(e,i)} className='bg-slate-100 rounded-md py-2 pl-2 w-96' placeholder='enter Learning topic'/>
                            {
                                topic.length != 1 && <button onClick={()=>handleDelete3(i)}>X</button>
                            }
                        </div>
                    )
                }
            )}   
            <input type="text" name="instructorName" defaultValue={"processing"} id="" className='hidden' />
            <input type="text" name="instructorEmail" id="" defaultValue={"proceessing"} className='hidden' />
            <button className='bg-green-400' onClick={()=>handleAdd3()}>+Add Topic</button>
            </div>
             <hr />
                <input type="submit" name="" id="" className='bg-blue-700 rounded-md w-40 mx-auto py-2 mb-10 cursor-pointer text-white'/>
            </form>  
          </div>  
          
        </div>
    );
};

export default Instructor;