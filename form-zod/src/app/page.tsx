"use client"

import {useRef} from "react";
import  axios  from "axios";

const Page = () =>{
  const fileInput = useRef<HTMLInputElement>(null);

   const handleSendFile = async () => {
    if (fileInput.current?.files && fileInput.current.files.length > 0) {
      const file = fileInput.current.files[0];

      const data = new FormData();
      data.append('name', 'Bonieky');
      data.append('file', file);

      const Response =  await axios.post('https://jsonplaceholder.typicode.com/posts', data); //passa o dado direto



  }
}

  return(

<div className="container mx-auto">
  <input
  ref={fileInput}
  type="file"
  />

  <button 
  onClick={handleSendFile}
  className=""> Enviar x coisa </button>








</div>





  )






}


export default Page;