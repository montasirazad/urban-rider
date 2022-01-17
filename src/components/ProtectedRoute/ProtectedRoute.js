import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';


const ProtectedRoute = ({children, ...rest}) => {
    const [user, setUser] = useContext(UserContext)

    return (
        
        user.email ? children : <Navigate to='/login'/>
         
    );
};

export default ProtectedRoute;