import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";



export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
const users = localStorage.getItem("mail")
const [currentUser, setCurrentUser] = useState([])
const [loading, setLoading] = useState(false)
const [isCart, setIsCart] = useState(true)
const [isMove, setIsMove] = useState(true)
// const [axiosSecure] = useAxiosSecure()


// const {data:user=[]}=useQuery({
//     queryKey:["email", email],
//     queryFn: async()=>{
//      setLoader(false)
//           const res = await axiosSecure.get(`/currentUsers/${email}`);
//           setLoader(true)
//           setCurrentUser(res.data)
//           return res.data
//     }
// })
    
//    const res = async  axiosSecure.get(`/currentUsers/${users}`);
        
//                             setLoading(true)
//                             setCurrentUser(res.data)
//                             setLoading(false)
                                               


    const handleCartLoad = () =>{
       return setIsCart(!isCart)
    } 
    const handleLoginChange = () =>{
       return setIsMove(!isMove)
    } 
    
    

    const authInfo ={
        currentUser,
        loading,
        handleCartLoad,
        isCart,
        handleLoginChange,
        isMove
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;