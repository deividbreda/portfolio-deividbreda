import { createContext, ReactNode, useContext, useState } from "react";

interface ModalLoginProviderProps {
    children: ReactNode,
}

interface ModalLoginContextProps {
    modalLogin: boolean,
    handleOpenModalLogin: () => void,
    handleCloseModalLogin: () => void,
}

const ModalLoginContext = createContext({} as ModalLoginContextProps)

export function ModalLoginProvider({ children }: ModalLoginProviderProps){
    const [ modalLogin, setModalLogin ] = useState(false);

    function handleOpenModalLogin() {
        setModalLogin(true)
    }

    function handleCloseModalLogin() {
        setModalLogin(false)
    }

    return (
        <ModalLoginContext.Provider value={{ modalLogin, handleOpenModalLogin, handleCloseModalLogin }}>
            {children}
        </ModalLoginContext.Provider>
    );
}

export function useModalLogin(){
    const context = useContext(ModalLoginContext);

    return context;
}