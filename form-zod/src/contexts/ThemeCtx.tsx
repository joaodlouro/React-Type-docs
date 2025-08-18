import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react"

const STORAGE_KEY = 'themeCtxKey'    //trocando entre themas, preto e branco


type ThemeCtx = {

    theme: string;
    setTheme: (newTheme: string) => void;
}


export const ThemeCtx =  createContext<ThemeCtx | null>(null); 

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState(
        localStorage.getItem(STORAGE_KEY) || 'light'
    );

useEffect (() =>{

localStorage.setItem(STORAGE_KEY, theme)

}, [theme]);



return(

    <ThemeCtx.Provider value={{theme, setTheme}}>{children}</ThemeCtx.Provider>
)



}

export const useTheme = () => useContext (ThemeCtx)