"use client"

import axios from "axios"

const Page = () => {
  const controller = new AbortController(); //isso e uma recurso do fetch api

  const HandleStartRequest = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        signal: controller.signal        //associando ao controlador
      });
    } catch (error) {
      console.log('ERROR');
    }
  } 

  const HandleCancelRequest = () => {
    controller.abort();       //lidando com o controller abort quando 
  } 

  return (
    <div className="container mx-auto flex gap-5"> 
      <button onClick={HandleStartRequest}> mandar </button>
      <button onClick={HandleCancelRequest}> Tirar</button>
    </div>
  )

} 

export default Page;
