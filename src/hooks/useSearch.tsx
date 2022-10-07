import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'

interface SearchProviderProps {
    children: ReactNode,
}

interface SearchContextProps {
    pesquisa: string,
    searchResult: (value: string) => void
}

const SearchContext = createContext({} as SearchContextProps)

export function SearchProvider({ children }: SearchProviderProps) {
    const [pesquisa, setPesquisa] = useState('');

    function searchResult(value: string) {
        const lowerPesquisa = value.toLowerCase()
        setCookie(undefined, 'search.value', lowerPesquisa, {
            maxAge: 60 * 60,
            path: '/',
        })
        setPesquisa(lowerPesquisa)
    }

    useEffect(() => {
        const { 'search.value': lowerPesquisa } = parseCookies();

        if(lowerPesquisa) {
            setPesquisa(lowerPesquisa)
        }
    }, [])

    return (
        <SearchContext.Provider value={{ pesquisa, searchResult }}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);

    return context;
}