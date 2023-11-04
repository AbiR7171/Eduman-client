import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
const users = localStorage.getItem("mail")
const [currentUser, setCurrentUser] = useState([])
const [loading, setLoading] = useState(false)


useEffect(()=>{
    
        fetch(`http://localhost:5000/currentUsers/${users}`)
        
                          .then(res => res.json())
                          .then(data => {
                            setLoading(true)
                            setCurrentUser(data)
                            setLoading(false)
                          })                           
},[users])
   console.log(currentUser)

    
    
    

    const authInfo ={
        currentUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;