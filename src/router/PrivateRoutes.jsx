import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'

const PrivateRoutes = () => {
    //const contextToken = useContext(AuthContext);
    const localToken = localStorage.getItem('token');
    console.log(localToken);
    return(
        localToken ? <Outlet/> : <Navigate to="/login" />
    )
}

export default PrivateRoutes