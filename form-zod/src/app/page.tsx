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

 };

 const handleDoneCheckbox = ( id: number) => {
  dispatch({
    type: 'toggleDone',
    payload: {id}
  })
 };

 const handleEdit = (id: number) => {
  const item = list.find(it => it.id === id);
if (!item) return false;
  const newText = window.prompt('Editar Tarefa, item.text');
  if (!newText || newText.trim()=='') return false;

  dispatch({
    type: 'editText',
    payload: { id, newText}
  })
 };
  



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

    <ul className="max-w-2xl mx-auto">
      {list.map(item => (
        <li
         key={item.id}
         className="flex items-center p-3 my-3 border-b border-gray-700"
         > 

         <input 
         type="checkbox"
         className="w-5 h-5 mr-4"
         checked={item.done}
         onClick={() => handleDoneCheckbox(item.id)}
         />
         

         <p className="flex-1 text-lg">{item.text}</p>
         <button onClick={() => handleEdit (item.id)  } className="mx-4  text-white hover:text-gray-500"> Editar </button>
         <button className="mx-4  text-white hover:text-gray-500"> Excluir </button>
         </li>
      ))}
    </ul>
           

   </div>
  );
};

export default Page;
