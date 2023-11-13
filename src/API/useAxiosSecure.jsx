import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://eduman-server-silk.vercel.app/',
})

const useAxiosSecure = () =>{
    const navigate = useNavigate()
    const logOut = localStorage.getItem("edumanUser")
    useEffect(()=>{
        axiosSecure.interceptors.request.use(config =>{
            const token = `Bearer ${localStorage.getItem('access-token')}`
            if(token){
                config.headers.Authorization = token;
            }
            return config
        })
        axiosSecure.interceptors.response.use(response =>response, async(error)=>{
            if((error.response && error.response.status === '401') || (error.response.status === '403')){
                 localStorage.removeItem('edumanUser')
                navigate('/login')
            }
            return Promise.reject(error)
        })
    },[logOut, navigate])

    return [axiosSecure]
}

export default useAxiosSecure;