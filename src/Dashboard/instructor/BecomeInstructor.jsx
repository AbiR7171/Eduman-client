import React, { useState } from 'react';
import { imgUpload } from '../../API/imgbb';
import useUsers from '../../Hooks/useUsers';
import Swal from 'sweetalert2';
import { TbFidgetSpinner } from "react-icons/tb";

const BecomeInstructor = () => {
    const [user] = useUsers();
    const [imageName, setImageName] = useState('Upload image')
    const [err, setErr] = useState('')
    const [loader, setLoader] = useState(true)
    const handleForm = event =>{
        setLoader(false)
        setErr('')
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.files[0];
        const description = form.description.value;
        const email = form.email.value;
        const category = form.category.value;
        if(form && name && image && description && email && category){
            imgUpload(image).then(data =>{
                const imgLink = data.data.display_url;
                const instructorData = {
                    name : name,
                    description : description,
                    image : imgLink,
                    email : email,
                    category : category,
                    time : new Date(),
                }
                fetch("https://eduman-server-silk.vercel.app/appliedInstructor",{
                    method : 'POST',
                    headers:{
                        "content-type" : "application/json",
                    },
                    body: JSON.stringify(instructorData),
                })
                .then((res)=> res.json())
                .then((data)=>{
                    if(data.acknowledged){
                        Swal.fire({
                          position: 'top-end',
                          icon: 'success',
                          title: 'request sent',
                          showConfirmButton: false,
                          timer: 1500
                        })
                        form.reset()
                      }
                      setLoader(true)
                })
                .then((error =>{
                    setLoader(true)
                }))
                console.log(instructorData);
            })
        }
        else{
            setErr('All Field is required')
            setLoader(true)
        }
        
    }
    const handleImageChange = image =>{
        setImageName(image.name);
    }
    return (
        <div className='w-96 mx-auto my-24 shadow-lg shadow-slate-400 rounded-lg py-5 px-5'>
            <h1 className='text-center  text-3xl font-serif mb-5'>Apply for become a instructor</h1>
            <form action="" onSubmit={()=>handleForm(event)} className='grid gap-5'>
                <input type="text"  name='email' defaultValue={user.email} className='hidden' />
                <div className='grid gap-1'>
                <input type="text" name="name" placeholder='Enter your name' className='w-80 outline-none bg-transparent' />
                <div className='w-80 h-1 bg-slate-400'></div>
                </div>
                <div className='grid gap-1 '>
                <input type="text" name="category" placeholder='Enter your service category' className='w-80 outline-none bg-transparent' />
                <div className='w-80 h-1 bg-slate-400'></div>
                </div>
                <div className='gap-1 grid'>
                <input type="text" name='description' placeholder='Enter a description about your skill' className='w-80 outline-none bg-transparent'/>
                <div className='w-80 h-1 bg-slate-400'></div>
                </div>
                <label className='border-4 border-dashed px-2 py-2 border-blue-700 grid gap-2 justify-center text-center'>
                    <span>Upload yuor photo</span>
                    <input
                      onChange={(event)=>handleImageChange(event.target.files[0])}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                      
                    />
                    <div className='bg-blue-700 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                      {imageName} 
                    </div>
                  </label>
                  {
                    err && <p className='text-red-500'>{err}</p>
                  }
                {
                    !loader ?   <button className='bg-blue-700 w-24 text-red-500 py-2 text-center rounded-md mx-auto'><TbFidgetSpinner className='mx-auto animate-spin'/></button> : <input type="submit" name="" id="" className='bg-blue-700 w-24 rounded-md py-1 mx-auto text-white cursor-pointer' />
                }
                
                
            </form>
        </div>
    );
};

export default BecomeInstructor;