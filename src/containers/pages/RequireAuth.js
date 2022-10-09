import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () =>{
    const { auth } = useAuth();
    const location = useLocation();

    return(
        <Outlet />
        // auth?.user
        //     ? <Outlet/>
        //     :<Navigate to="/login" atate={{ from: location}} replace />
    );
}

export default RequireAuth;