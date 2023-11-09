import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";




const useInstructorSecure = () => {
    const [loader, setLoader] = useState(true)
    const currentUser = localStorage.getItem("edumanUser")
    const [axiosSecure] = useAxiosSecure()
    
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/user/instructor/${currentUser}`)
    //     .then(res => res.json())
    //     .then(data => { setLoader(false)
    //         setIsInstructor(data.admin)
    //     setLoader(true)})
    //   },[])
    
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey:['isInstructor', currentUser],
        
        queryFn: async () =>{
            setLoader(false)
            const res = await axiosSecure.get(`http://localhost:5000/user/instructor/${currentUser}`)
                // await setLoader(true)
                return (res.data.admin); 
                // setLoader(true)
        }
        // setLoader(true)
        
    })
    // setLoader(true)
    return [isInstructor,isInstructorLoading, loader];
    
};

export default useInstructorSecure;