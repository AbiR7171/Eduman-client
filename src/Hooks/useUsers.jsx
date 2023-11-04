import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useUsers = () => {

    const email = localStorage.getItem("edumanUser");
    console.log(email);
     
      const {data:user=[]}=useQuery({
           queryKey:["email", email],
           queryFn: async()=>{
                 
                 const res = await axios.get(`http://localhost:5000/currentUser/${email}`);
                 return res.data
           }
      })

      return [user]
};

export default useUsers;