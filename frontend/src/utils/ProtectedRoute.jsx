import React, { Suspense } from 'react'
import { Navigate,Outlet } from 'react-router'
const protectedRoute = ({children,user,redirect='/login'}) => {
    if(!user){
        return <Navigate to={redirect} />
    }
    return children ? children : <Suspense fallback='loading...'> <Outlet /></Suspense>
}

export default protectedRoute