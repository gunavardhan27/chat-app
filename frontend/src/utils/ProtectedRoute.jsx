import React from 'react'
import { Navigate,Outlet } from 'react-router'
const protectedRoute = ({children,user,redirect='/login'}) => {
    if(!user){
        return <Navigate to={redirect} />
    }
    return children ? children : <Outlet /> 
}

export default protectedRoute