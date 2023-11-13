import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";




const useAdminSecure = () => {
    const [loader, setLoader] = useState(true)
    const currentUser = localStorage.getItem("edumanUser")
    const [axiosSecure] = useAxiosSecure()
    
    
        //  const fetching =  async() => {
        //   const res = await  fetch(`http://localhost:5000/user/instructor/${currentUser}`)
        // const result = await res.json();
        //    setIsAdmin(result.admin)
        // }
        
        
      
      

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey:['isAdmin', currentUser],
        
        queryFn: async () =>{
            setLoader(false)
            const res = await axiosSecure.get(`https://eduman-server-silk.vercel.app/user/admin/${currentUser}`);
            setLoader(true)
                return (res.data.admin);
        }
        
    })
    return [isAdmin, isAdminLoading, loader];
    
};

export default useAdminSecure;