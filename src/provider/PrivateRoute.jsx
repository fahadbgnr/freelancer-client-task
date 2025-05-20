import React, { use } from 'react';
import Loder from '../pages/Loder';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);


    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <Loder></Loder>;
    }

    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} replace={true} to='/loginPage'></Navigate>


};

export default PrivateRoute;