import {createContext} from "react"

type CountContextType = {
    onlineCount: number;
    setOnlineCount: (n: number) => void;



}


export const CountContext = createContext <CountContextType | null> (null);