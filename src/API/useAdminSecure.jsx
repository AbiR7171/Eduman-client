import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";




const useInstructorSecure = () => {
    const [loader, setLoader] = useState(true)
    const [isAdmin, setIsAdmin] = useState()
    const currentUser = localStorage.getItem("edumanUser")
    
    
    useEffect(()=>{
        fetch(`https://eduman-server-silk.vercel.app/user/admin/${currentUser}`)
        .then(res => res.json())
        .then(data => { 
            console.log(data);
            setLoader(false)
            setIsAdmin(data.admin)
             setLoader(true)})
      },[])

    // const {data: isInstructor, isLoading: isAdminLoading} = useQuery({
    //     queryKey:['isInstructor', currentUser],
        
    //     queryFn: async () =>{
            
    //         const res = await axios.get(`https://eduman-server-silk.vercel.app/user/instructor/${currentUser}`);
    //             return (res.data.admin, setLoader(true));
    //     }
        
    // })
    return [isAdmin, loader];
    
};

export default useInstructorSecure;