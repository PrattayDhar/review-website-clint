import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';


const PrivateRoute = ({ children }) => {
 const location = useLocation();
   const { User,loading } = useContext(AuthContext);

   if(loading){
    return(<p>Loading</p>)
   }
    
    if (User) {
        return children;
    }
    else { return <Navigate to={'/getstarted'} state={{ from: location }} replace></Navigate> }

};

export default PrivateRoute;