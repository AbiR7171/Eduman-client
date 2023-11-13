import React, { useEffect, useState } from 'react';
import ShareBanner from '../../Shared/ShareBanner';
import formImage from "../../assets/Images/formImage.png"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import AuthProvider from '../../API/AuthProvider';

const SignIn = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState()
  const [err2, setErr2] = useState()
  const from = location.state?.from?.pathname || '/';
  const handleForm = e => {
    setErr('')
    setErr2('')
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    localStorage.setItem('mail', email)
    axios.get(`https://eduman-server-silk.vercel.app/login/${email}`)
      .then(res => {
        if (res.data.length > 0) {
          const passConfirmation = res?.data?.find(i => i.password === password)
          const confirmation = res?.data.find(i => i.email === email)
          if (!passConfirmation) {
            setErr('password wrong')
          }


          if (confirmation && passConfirmation) {
            localStorage.removeItem("edumanUser")
            localStorage.setItem("edumanUser", email)
            window.location.reload()
            navigate(from, { replace: true })
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
              title: 'Login in successfully'
            })
          }
        } else {
          setErr2('user or password wrong');
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
            title: 'user not found'
          })
        }
      })
  }
  return (
    <div>
      <ShareBanner title={"sign in"} path={"sign in"} />

      <div className='grid grid-cols-2  items-center justify-center gap-6 px-32 '>

        <div className='bg-gray-100 p-4 flex justify-center items-center rounded' >
          <img src={formImage} className='h-[470px]' alt="" />
        </div>


        <div className=" p-4 rounded-md mb-6 w-full">
          <form onSubmit={handleForm} className='px-10'>


            <h1 className='text-center mb-5 text-4xl font-serif font-semibold'>LOGIN</h1>
            {
              err2 && <p className='text-center text-red-500 mb-5'>{err2}</p>
            }

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
              err && <p className='text-red-500 mb-5'>{err}</p>
            }
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-4 w-full rounded-md  focus:outline-none focus:ring hover:bg-yellow-600"
              >
                Login
              </button>
            </div>

            <p className='mt-3 text-center text-gray-500'> New at Eduman ? Please <Link to="/signup">Sign up</Link></p>
          </form>
        </div>





      </div>


    </div>
  );
};

export default SignIn;