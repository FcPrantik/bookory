import React from 'react';
import useAuth from '../../hooks/useAuth';
import {Navigate, Outlet, useLocation} from "react-router-dom";

const PrivateOutlet = () => {
    const {user} = useAuth();
    return user.email ? <Outlet/> : <Navigate to="/login" />;
};

export default PrivateOutlet;