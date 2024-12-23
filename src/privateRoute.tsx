import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    //Replace for debug
    // const token = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    return token ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
