import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = (props) => {
    console.log(props.loggedIn)
    return (

        props.loggedIn ? props.children : <Navigate to="/sign-in" replace />
    )
};

export default ProtectedRouteElement;