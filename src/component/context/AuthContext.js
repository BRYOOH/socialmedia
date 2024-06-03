import { createContext, useEffect, useState } from "react";

export const AuthContext= createContext();

export const AuthContextProvider= ({children}) =>{

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login= () =>{
        //CONNECT TO DB
        setCurrentUser(true);
    };

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]);

    return(
        <AuthContext.Provider value={{login, currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};  