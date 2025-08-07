"use client"

import {Item} from "@/types/item" //sempre lembre de importar o tipo Item 
import { useState } from 'react';


const Page = () => {
  const [list, setList] = useState<Item[]>([]);

  const addNewItem = (text: string) => {
    setList([...list, {
      id: list.length,
      text,
      done: false
    }]); 
  };

  const editItem = (id: number, newText: string) => {
  setList(
    list.map(t => {
      if (t.id === id) t.text = newText;
      return t;
    })
  );
};


  const toggleItem = (id: number) => {
    setList(
      list.map(t => {
        if (t.id === id) t.done = !t.done;
        return t;
      })
    );
  };

  const removeItem = (id: number) => {
    setList(list.filter(t => t.id !== id));
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      
    </div>
  );
};

export default Page;
