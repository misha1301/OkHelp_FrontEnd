import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

const USER_DATA_URL = '/api/user/';

const UserData = () => {

    const {setUData} = useAuth();
    const {auth} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const axiosPrivate = useAxiosPrivate();

    const USER_EMAIL = auth?.uemail;

    const getUserData = async () => {
        try {
            const response = await axiosPrivate.get(USER_DATA_URL + USER_EMAIL);
            console.log(response.data);

            const firstName = response?.data?.firstName;
            const lastName = response?.data?.lastName;
            const phoneNumber = response?.data?.phoneNumber;
            const email = response?.data?.email;

            console.log("SetUData...");
            setUData({ firstName, lastName, phoneNumber, email });
            //onsole.log(uData);

        } catch (err) {
            console.error(err);
            navigate('/login', {state: { from: location}, replace: true});
        }
    }
    return getUserData;
}

export default UserData;