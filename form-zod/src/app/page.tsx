"use client";

import { useState, useEffect } from "react";
import React from "react";
import { User } from "@/types/User";



const Page = () => {


  const [LegendInput, setLegendInput] = useState("");
   const fileInputRef = React.useRef<HTMLInputElement | null>(null);

   const handleFileSend = async ()=>{
    if(fileInputRef.current?.files && fileInputRef.current.files.length > 0){
      const fileItem = fileInputRef.current.files[0];
    }else{
        alert("Por favor, selecione um arquivo!");
      }


    }


  return(

  <div className="container mx-auto">
<h1 className="text-3xl mt-5">Upload de imagem</h1>

<div className="max-w-md flex flex-col gap-3 border-dotted border-white p-3 mt-5"> 

<input
ref={fileInputRef}
type="file" />
<input type="text" 
placeholder="Digite aqui" 
className="p-3 bg-white rounded-md text-black"
value={LegendInput}
onChange={(e) => setLegendInput(e.target.value)}
/>
<button
 onClick={handleFileSend}
 className="">Eviar imagem</button>

</div>


  </div>




  )
}

export default Page;