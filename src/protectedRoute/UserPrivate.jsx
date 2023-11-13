import React from 'react';
import useUsers from '../Hooks/useUsers';
import { useLocation } from 'react-router-dom';

const UserPrivate = ({children}) => {
    const [user] = useUsers()
    const currentUser = localStorage.getItem('edumanUser')
    const location = useLocation();
    if(currentUser && user){
        return children
    }
    return (
        <Navigate to="/" state={{from: location}} replace></Navigate>
    );
};

export default UserPrivate;