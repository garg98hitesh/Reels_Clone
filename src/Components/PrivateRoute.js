import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function PrivateRoute({ children }) {
    const { user } = useContext(AuthContext)

    console.log("rendered privateRoute");
    console.log("user ", user)
    return (
        user ? children : <Navigate to="/login"></Navigate>
    )
}

export default PrivateRoute