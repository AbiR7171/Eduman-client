import React, { useState } from 'react';
import instructorImg from '../../../public/instructor.jpg';
import { imgUpload } from '../../API/imgbb';
import useUsers from '../../Hooks/useUsers';

const Instructor = () => {
    const [requirement, setRequirement] = useState(['']);
    const [curriculum, setCurriculum] = useState(['']);
    const [topic, setTopic] = useState(['']);
    const [imageName, setImageName] = useState('image-name')
    const [user] = useUsers();
    console.log(user);
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
        const lessons = form.lessons.value;
        const instructorimg = form.instructorimg.value;
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
                instructorName : `${instructorName1} ${instructorName2}`,
                instructorEmail : instructorEmail,
                instructorimg : instructorimg,
                category : category,
                price : price,
                language : language,
                level : level,
                lessons : lessons,
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
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'the instructor approved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .then((error =>{
                console.log(error);
            }))
        })
    }
    
    return (
        <div className='flex gap-40 justify-center mt-10'>
          <div className='mt-16'>
            <img src={instructorImg} alt="" className='w-96' />
          </div>
          <div>
            <form action="" onSubmit={()=>handleForm(event)} className='flex flex-col gap-5'>
            <div className='grid justify-center items-center  '>
            <input type="text" name='name' className='bg-transparent  rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter course name'/>
            <div className='w-96 h-1 bg-slate-400'></div>
            </div>    
            <div className='grid justify-center items-center '>
            <input type="text" name='title' className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter course title'/> 
            <div className='w-96 h-1 bg-slate-400'></div>
            </div>   
            <div className='grid justify-center items-center '>
            <input type="text" name='category' className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter course category'/> 
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
                      required
                    />
                    <div className='bg-blue-700 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500 w-40 text-center '>
                      Upload Image 
                    </div>
                    <div className='font-semibold font-serif'>
                    {imageName} 
                    </div>
                  </label>
            <div className='grid justify-center items-center border-2 h-40 border-blue-700'>
            <textarea type="text" cols="10" rows="6" name='description' className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter course description'></textarea>
            {/* <div className='w-96 h-1 bg-slate-400'></div> */}
            </div>   
            
            <div className='grid justify-center items-center  '>
            <input type="text" name='lessons' className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter lessons'/>
            <div className='w-96 h-1 bg-slate-400'></div>
            </div>
            <div className='grid justify-center items-center  '>
            <input type="url" name='video' className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter introduction video link'/>
            <div className='w-96 h-1 bg-slate-400'></div>
            </div>
            <div className='grid justify-center items-center '>
            <input type="number" name='price' className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter course price'/>
            <div className='w-96 h-1 bg-slate-400'></div>
            </div>
            <div className='grid justify-center items-center '>
            <input type="text" name='language' className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter course language'/>
            <div className='w-96 h-1 bg-slate-400'></div>
            </div>
            <div className='grid justify-center items-center '>
            <input type="text" name='level' className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='Enter course level'/>
            <div className='w-96 h-1 bg-slate-400'></div>
            </div>
            <div className='grid justify-center items-center gap-2 '>
                
            {
                requirement.map((data,i)=>{
                    return(
                        <div key={i} className='flex'>
                            <div>
                            <input value={data} type="text" onChange={e=>handleChanges(e,i)} className='bg-transparent rounded-md py-2 pl-2 w-96 outline-none' placeholder='enter requiremnet'/>
                            <div className='w-96 h-1 bg-slate-400'></div>
                            </div>
                            {
                                requirement.length != 1 &&<button onClick={()=>handleDelete(i)} className='bg-red-500 rounded-full w-10 h-10  text-white'>X</button>
                            }
                        </div>
                    )
                }
            )}   
            <div className='bg-blue-700 w-40 mx-auto mt-3 rounded-xl text-white text-center py-2 cursor-pointer' onClick={()=>handleAdd()}>+Add Requirement</div>
            </div>
            <div className='grid justify-center items-center gap-2 '>
            {
                curriculum.map((data,i)=>{
                    return(
                        <div key={i} className='flex'>
                           <div>
                           <input value={data} type="text" onChange={e=>handleChanges2(e,i)} className='bg-transparent outline-none rounded-md py-2 pl-2 w-96' placeholder='enter curriculum'/>
                           <div className='w-96 h-1 bg-slate-400'></div>
                           </div>
                            {
                                curriculum.length != 1 && <button onClick={()=>handleDelete2(i)} className='bg-red-500 rounded-full w-10 h-10  text-white'>X</button>
                            }
                        </div>
                    )
                }
            )}   
            <div className='bg-blue-700 w-40 mx-auto mt-3 rounded-xl text-white text-center py-2 cursor-pointer' onClick={()=>handleAdd2()}>+Add curriculum</div>
            </div>
            <div className='grid justify-center items-center gap-2 '>
           
            {
                topic.map((data,i)=>{
                    return(
                        <div key={i} className='flex' >
                            <div>
                            <input value={data} type="text" onChange={e=>handleChanges3(e,i)} className='bg-transparent outline-none rounded-md py-2 pl-2 w-96' placeholder='enter Learning topic'/>
                            <div className='w-96 h-1 bg-slate-400'></div>
                            </div>
                            {
                                topic.length != 1 && <button onClick={()=>handleDelete3(i)} className='bg-red-500 rounded-full w-10 h-10  text-white'>X</button>
                            }
                        </div>
                    )
                }
            )}   
            <input type="text" name="instructorName1" defaultValue={user.FirstName} id="" className='hidden' />
            <input type="text" name="instructorName2" defaultValue={user.LastName} id="" className='hidden' />
            <input type="text" name="instructorEmail" id="" defaultValue={user.email} className='hidden' />
            <input type="text" name="instructorimg" id="" defaultValue={user.image} className='hidden' />
            <div className='bg-blue-700 w-40 mx-auto mt-3 rounded-xl text-white text-center py-2 cursor-pointer' onClick={()=>handleAdd3()}>+Add Topic</div>
            </div>
             <hr className='h-10s'/>
                <input type="submit" name="" id="" className='bg-blue-700 rounded-md w-40 mx-auto py-2 mb-10 cursor-pointer text-white'/>
            </form>  
          </div>  
          
        </div>
    );
};

export default Instructor;


