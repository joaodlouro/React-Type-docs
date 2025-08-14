import { useContext } from "react";
import { OnlineUsers } from "./OnlineUsers";
import { CountContext } from "@/contexts/CountContext";

export const Header= () => {

  const countCtx = useContext(CountContext);

  return(
    
   <header>
    <h1 className="text-3xl">titulo aqui!({countCtx?.onlineCount})</h1>
    <OnlineUsers />
   </header>
  );
};



