import {  Outlet } from "react-router-dom";

const UserModeAuth = () =>{
    return(
        <Outlet />
        //  auth?.status == 200
        //      ? <Outlet/>
        //      :<Navigate to="/login" atate={{ from: location}} replace />
    );
}

export default UserModeAuth;