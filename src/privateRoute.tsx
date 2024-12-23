import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    //Replace with later
    // const token = localStorage.getItem('token');
    const token = localStorage.getItem('email');

    return token ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
