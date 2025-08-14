"use client"

import {Header} from "@/components/Header"
import { OnlineUsers } from "@/components/OnlineUsers";
import { CountContext } from "@/contexts/CountContext";
import {useState} from "react";



const Page = () => {

  const [onlineCount, setOnlineCount] = useState(92);

  return(
    <div className="container mx-auto">
      <CountContext.Provider value={{onlineCount, setOnlineCount}}>
    <Header />
    </CountContext.Provider>
    </div>
  );
};

export default Page;