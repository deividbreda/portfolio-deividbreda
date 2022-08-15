import { createContext, ReactNode, useContext, useState } from "react";

interface LoginProviderProps {
    children: ReactNode,
}

interface LoginContextProps {
    modalLogin: boolean,
    handleOpenModalLogin: () => void,
    handleCloseModalLogin: () => void,
}

const LoginContext = createContext({} as LoginContextProps)

export function LoginProvider({ children }: LoginProviderProps){
    const [ modalLogin, setModalLogin ] = useState(false);

    function handleOpenModalLogin() {
        setModalLogin(true)
    }

    function handleCloseModalLogin() {
        setModalLogin(false)
    }

    return (
        <LoginContext.Provider value={{ modalLogin, handleOpenModalLogin, handleCloseModalLogin }}>
            {children}
        </LoginContext.Provider>
    );
}

export function useLogin(){
    const context = useContext(LoginContext);

    return context;
}