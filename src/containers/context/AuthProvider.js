import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [auth, setAuth] = useState({});
    const [emailAuth, setEmailAuth] = useState({});
    const [uData, setUData] = useState({});
    const [uFocus, setUFocus] = useState('');

    return(
        <AuthContext.Provider value = {{auth, setAuth, emailAuth, setEmailAuth, uData, setUData, uFocus, setUFocus}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;