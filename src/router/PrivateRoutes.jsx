import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const localToken = localStorage.getItem('token');
    return(
        localToken ? <Outlet/> : <Navigate to="/login" />
    )
}

export default PrivateRoutes