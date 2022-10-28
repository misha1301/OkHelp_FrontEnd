import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const EmailAuth = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(from);

    const {emailAuth} = useAuth();
    console.log("EmailVer from EmailAuth :");
    console.log(emailAuth);

    return (
        // <Outlet/>
        emailAuth?.uemail
            ? <Outlet />
            : <Navigate to={from} state={{ from: location }} replace />
    );
}

export default EmailAuth;