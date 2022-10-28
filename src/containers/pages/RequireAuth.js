import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () =>{
    const { auth } = useAuth();
    const location = useLocation();

    console.log("status from RequireAuth :");
    console.log(auth?.status);

    return(
        <Outlet />
        //  auth?.status == 200
        //      ? <Outlet/>
        //      :<Navigate to="/login" state={{ from: location}} replace />
    );
}

export default RequireAuth;