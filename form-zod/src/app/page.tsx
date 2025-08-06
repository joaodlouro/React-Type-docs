"use client";
import { useEffect } from "react";

const Page = () => {
  
  useEffect(() => {
   
    console.log("Page component mounted");
  }, []);

  return (
    <div>
       aqui teste
    </div>
  );
}

export default Page;