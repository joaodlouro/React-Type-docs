import { PostCtx } from "@/contexts/PostCtx";
import { useContext, useState } from "react";

export const Header = () =>{
   const postCtx = useContext (PostCtx);
   const [titleInput, setTitleInput] = useState('');
   const [bodyInput, setBodyInput] = useState ('');

   const handleAddButton = () =>{
    if (titleInput && bodyInput){
      postCtx?.addPost(titleInput, bodyInput);
      setTitleInput('');
      setBodyInput('');

    }
   }


return(
<header>

<h1 className="text-3xl"> titulo aqui</h1>

<div className="max-w-xl  flex flex-col gap-3 border border-dorred border-gray-400 p-3 my-4">

   <input 
   type="text"
   placeholder="Digite aqui"
   className="border border-gray-300 p-2 text-black text-xl"
   value={titleInput}
   onChange={e => setTitleInput(e.target.value)}
   />

   <textarea 
   placeholder="Digite algo"
   className="h-24 border border-gray-300 p-2 text-black text-xl"
   value={bodyInput}
   onChange={ e => setBodyInput(e.target.value)}

   ></textarea>

   <button 
   className="bg-blue-500 p-3 text-white rounded-md"
   onClick={handleAddButton}
   >
      Adicionar</button>
</div>
</header>


);

};