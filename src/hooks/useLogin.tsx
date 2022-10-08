import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface LoginProviderProps {
    children: ReactNode
}

interface LoginContextProps {
    getUser: (info: string) => void,
    user: string,
    logoutUser: () => void
}

const LoginContext = createContext({} as LoginContextProps)

export function LoginProvider({ children }: LoginProviderProps) {
    const [user, setUser] = useState('')

    function getUser(info: string) {
        const username = info
        setCookie(undefined, 'user.name', username, {
            maxAge: 60 * 60 * 60,
            path: '/',
        })
        setUser(username)
    }

    function logoutUser(){
        destroyCookie(null, 'user.name')
        setUser('')
    }

    useEffect(() => {
        const { 'user.name': username } = parseCookies();

        if(username) {
            setUser(username)
        }
    }, [])

    return (
        <LoginContext.Provider value={{  getUser, user, logoutUser }}>
            {children}
        </LoginContext.Provider>
    )
}

export function useLogin() {
    const context = useContext(LoginContext);

    return context;
} 