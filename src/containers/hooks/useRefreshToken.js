import axios from "../../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {

    const { setAuth } = useAuth();
    const {auth} = useAuth();

    const accessToken = auth?.accessToken;
    const refreshToken = auth?.refreshToken;
    const uemail = auth?.uemail;
    console.log("UseRefreshToken input auth data");
    console.log(uemail);
    console.log(auth?.status);
    console.log(accessToken);
    console.log(refreshToken);
    console.log("UseRefreshToken input auth data END");
    

    const refresh = async () => {
        const response = await axios.post('/refresh-token',
            JSON.stringify({
                accessToken: accessToken,
                refreshToken: refreshToken
            }),
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return { ...prev, 
                uemail: uemail,
                status: response.status,
                accessToken: response.data.accessToken, 
                refreshToken: response.data.refreshToken }
        });
        return (response.data.accessToken);
    }
    return refresh;
};

export default useRefreshToken;