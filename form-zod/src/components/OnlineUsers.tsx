import { CountContext } from "@/contexts/CountContext";
import { count } from "console";
import { useContext } from "react";

export const OnlineUsers = () => {
 
    const count = useContext (CountContext)
   
    return(

<p>Online: {count}</p>

    )
}