import React, { useState } from 'react';
import image from "../../assets/Images/entrepreneurs-meeting-office.jpg"
import formImage from "../../assets/Images/formImage.png"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import ShareBanner from '../../Shared/ShareBanner';
import { TbFidgetSpinner } from "react-icons/tb";

const SignUp = () => {
  const [loader, setLoader] = useState(true)
  const [err, setErr] = useState('')
  const navigate = useNavigate()


  const handleForm = e => {
    setErr('')
    setLoader(false)

    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phoneNumber = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;
    if (firstName && lastName && phoneNumber && email && password) {
      axios.post('https://eduman-server-silk.vercel.app/users', {
        FirstName: firstName,
        LastName: lastName,
        Phone: phoneNumber,
        email,
        password
      })
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            localStorage.setItem("edumanUser", email)
            form.reset()
            setLoader(true)
            navigate('/')
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'success',
              title: 'Sign up  successfully'
            })
          } else {
            setLoader(true)
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'error',
              title: `${res.data}`
            })
          }
        })
    }
    else {
      setErr('please fill of all field')
      setLoader(true)
    }

  }
  return (
    <div className='mb-20'>


      <ShareBanner title={"Sign up"} path={"sign up"} />


      <div className='grid grid-cols-2  items-center justify-center gap-6 px-32 '>

        <div className='bg-gray-100 p-4 flex justify-center items-center rounded' >
          <img src={formImage} className='h-[470px]' alt="" />
        </div>


        <div className=" p-4 rounded-md mb-6 w-full">
          <form onSubmit={handleForm} className='px-10'>
            <div className="mb-4">

              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full p-4 rounded-md focus:outline-none   bg-gray-100"
                placeholder='Enter Your First Name'
              />
            </div>
            <div className="mb-4">

              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full p-4 rounded-md focus:outline-none bg-gray-100 "
                placeholder='Enter Your Last Name'
              />
            </div>

            <div className="mb-4">

              <input
                type="text"

                name="phone"
                className="w-full p-4 rounded-md focus:outline-none bg-gray-100"
                placeholder='Enter Your Phone Number'
              />
            </div>
            <div className="mb-4">

              <input
                type="email"

                name="email"
                className="w-full p-4 rounded-md focus:outline-none bg-gray-100"
                placeholder='Enter Your Email'
              />
            </div>
            <div className="mb-4">

              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-4 rounded-md focus:outline-none bg-gray-100"
                placeholder='Enter Password'
              />
            </div>
            {
              err && <p className='text-red-500'>Please fill all input</p>
            }
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-4  rounded-md  focus:outline-none focus:ring hover:bg-yellow-600"
              >
                {
                  !loader ? <TbFidgetSpinner className='animate-spin text-center' /> : 'Sign Up'
                }

              </button>
            </div>

            <p className='mt-3 text-center text-gray-500'> Already Have an account ? Please <Link to="/signin">Login</Link></p>
          </form>
        </div>





      </div>



    </div>
  );
};

export default SignUp;