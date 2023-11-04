import React, { useState } from 'react';
import { imgUpload } from '../../API/imgbb';
import useUsers from '../../Hooks/useUsers';

const BecomeInstructor = () => {
    const [user] = useUsers();
    const [imageName, setImageName] = useState('Upload image')
    const handleForm = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.files[0];
        const description = form.description.value;
        const email = form.email.value;
        const category = form.category.value;
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
            fetch("http://localhost:5000/appliedInstructor",{
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
            console.log(instructorData);
        })
        
    }
    const handleImageChange = image =>{
        setImageName(image.name);
    }
    return (
        <div>
            <form action="" onSubmit={()=>handleForm(event)} className='grid gap-5'>
                <input type="text"  name='email' defaultValue={user.email} className='hidden' />
                <input type="text" name="name" placeholder='Enter your name' />
                <input type="text" name="category" placeholder='Enter your service category' />
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
                <input type="text" name='description' placeholder='Enter a description about your skill'/>
                <input type="submit" name="" id="" />
            </form>
        </div>
    );
};

export default BecomeInstructor;