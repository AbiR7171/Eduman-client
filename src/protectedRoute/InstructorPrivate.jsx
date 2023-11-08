import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useInstructorSecure from "../API/useInstructorSecure";


const InstructorPrivate = ({children}) => {
    const user = localStorage.getItem('edumanUser')
    const [isInstructor, loader] = useInstructorSecure(); 
    console.log(isInstructor)
    const location = useLocation();
    if(!loader){
        return <div className="w-1/12 mx-auto pt-60"><span className="loading loading-dots loading-lg  md:w-44"></span></div>
    }
    if(user && isInstructor){
        return children
    }
    return (
        <Navigate to="/" state={{from: location}} replace></Navigate>
    );
};

export default InstructorPrivate;