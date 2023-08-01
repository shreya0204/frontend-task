import { createContext, useContext, useState } from "react";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [userDetails, setUserDetails] = useState({
        username: "",
        password: ""
    })

    const [userRegisterDetails, setUserRegisterDetails] = useState(null)

    const login = (username, password) => {
        setUserDetails({ username: username, password: password })
        // console.log("user is", userDetails);
    }

    const register = (userDetails) => {
        setUserRegisterDetails(userDetails)
    }


    return (
        <AuthContext.Provider value={{ userDetails, login, register }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}