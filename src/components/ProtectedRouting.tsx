import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import { Navigate } from "react-router-dom";
import type { JSX } from "react";

function ProtectedRoute({children}: {children: JSX.Element}){

    const auth = useSelector((state: AppState) => state.auth);

    if(auth.isAuthenticated){
            return children;
    } else {
            return <Navigate to="/login" />
    }


}

export default ProtectedRoute;