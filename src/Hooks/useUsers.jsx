import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../API/useAxiosSecure';
import { AuthContext } from '../API/AuthProvider';

const useUsers = () => {
      const [loader, setLoader] = useState(true)
      const [axiosSecure] = useAxiosSecure()
      const {isMove} = useContext(AuthContext)
console.log(isMove)
    const email = localStorage.getItem("edumanUser");
    
      const {data:user=[]}=useQuery({
           queryKey:["email", email],
           queryFn: async()=>{
            setLoader(false)
                 const res = await axiosSecure.get(`/currentUsers/${email}`);
                 setLoader(true)
                 console.log(res.data)
                 return res.data
           }
      })
      return [user, loader]
};

export default useUsers;