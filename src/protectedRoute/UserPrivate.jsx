import React from 'react';
import useUsers from '../Hooks/useUsers';

const UserPrivate = ({children}) => {
    const [user] = useUsers()
    const currentUser = localStorage.getItem('edumanUser')
    if(currentUser && user){
        return children
    }
    return (
        <Navigate to="/" state={{from: location}} replace></Navigate>
    );
};

export default UserPrivate;