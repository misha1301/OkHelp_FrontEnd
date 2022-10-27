import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const EmailAuth = () => {
    const location = useLocation();

    const {emailAuth} = useAuth();
    console.log("EmailVer from EmailAuth :");
    console.log(emailAuth);

    return (
        // <Outlet/>
        emailAuth?.uemail
            ? <Outlet />
            : <Navigate to="/registration" atate={{ from: location }} replace />
    );
}

export default EmailAuth;