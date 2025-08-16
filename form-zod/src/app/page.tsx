"use client"

import {Header} from "@/components/Header"
import {  CountProvider } from "@/contexts/CountContext";
import { LoggedUserProvider } from "@/contexts/LoggedUser";




const Page = () => {



  return(
    <div className="container mx-auto">    

        <LoggedUserProvider>
          <Header />
        </LoggedUserProvider>
     
    </div>
  );
};

export default Page;


