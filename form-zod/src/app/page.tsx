"use client"

import {Header} from "@/components/Header"
import { CountContext, ValorCountInitial } from "@/contexts/CountContext";
import React from "react";


const Page = () => {

  return(
    <div className="container mx-auto">
      <CountContext.Provider value={ValorCountInitial}>
    <Header />
    </CountContext.Provider>
    </div>
  );
};

export default Page;