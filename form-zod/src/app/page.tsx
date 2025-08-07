"use client"

import {Item} from "@/types/Item" //sempre lembre de importar o tipo Item 
import { useReducer, useState } from 'react';
import { listReducer } from "@/reducer/listReducer";
import { useEffect } from "react";


const Page = () => {
 const [list, dispatch] = useReducer(listReducer, []);
  

const handleAddClick = () =>{
  dispatch({
    type:'add',
    payload:{
      text: 'novo item'
    }
  })
};


useEffect(() => {
  dispatch({
    type:'remove',
    payload: {id: 2}
  });

  dispatch({
    type:'editText',
    payload: {id: 2, newText: 'receba'}
  });
}, []);




  return (
    <div className="flex h-screen w-full items-center justify-center">
      <button className=" border bg-red-500" onClick={handleAddClick}>ADICIONAR AQUI</button>
      
    </div>
  );
};

export default Page;
