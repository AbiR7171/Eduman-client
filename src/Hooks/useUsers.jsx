import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useUsers = () => {

    const email = localStorage.getItem("edumanUser");
      const {data:user=[]}=useQuery({
           queryKey:["email", email],
           queryFn: async()=>{
                 
                 const res = await axios.get(`https://eduman-server-silk.vercel.app/currentUsers/${email}`);
                 return res.data
           }
      })
      return [user]
};

export default useUsers;