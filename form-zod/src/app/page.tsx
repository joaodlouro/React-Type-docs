"use client"

import {Item} from "@/types/Item" //sempre lembre de importar o tipo Item 
import { useReducer, useState } from 'react';
import { listReducer } from "@/reducer/listReducer";
import { useEffect } from "react";


const Page = () => {
 const [list, dispatch] = useReducer(listReducer, []);
 const [addField, setAddField] = useState('');

 const handleAdddButton = () => {
 if (addField.trim()=== '') return false;
  
 dispatch ({
  type: 'add', 
  payload: {
    text: addField.trim ()
  }
  
 });

 setAddField ('')  //limpa o campo

 }
  



  return (
   <div className="container mx-auto">
    <h1 className="text-center text-4xl p-5"> Lista de tarefas treino</h1>

    <div className=" max-w-2xl mx-auto  flex rounded-md border border-white-500 p-8 my-4 bg-gray-900">
        <input
         type="text" 
         className=" flex-1 rounded-md border border-gray-50 p-3 bg-transparent text-white m-0.5 outline-none" 
         placeholder="Digite algo"
         value={addField}
         onChange={e => setAddField(e.target.value)}
         />

        <button className="p-5 "
          onClick={handleAdddButton}
          >ADICIONAR 
          </button>

    </div>

    <ul>
      {list.map(item => (
        <li key={item.id}> {item.text}</li>
      ))}
    </ul>
           

   </div>
  );
};

export default Page;
