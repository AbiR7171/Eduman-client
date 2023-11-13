import React from 'react';
import useUsers from '../Hooks/useUsers';
import { Navigate, useLocation } from 'react-router-dom';

const UserPrivate = ({children}) => {
    const [user] = useUsers()
    const currentUser = localStorage.getItem('edumanUser')
    const location = useLocation();
    if(currentUser && user){
        return children
    }
    return (
        <Navigate to="/signin" state={{from: location}} replace></Navigate>
    );
};

export default UserPrivate;