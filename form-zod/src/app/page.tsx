"use client"

import { Square } from '@/components/Square';

import { useState} from "react";

const Page = () => {
  const [show, setShow] = useState(false);

  return (

      <div className="flex flex-col justify-center items-center min-h-screen">
      <button className="bg-red-600 p-5 mb-5" onClick={() => setShow (!show)}>Mostrar/Ocultar</button> 
      {show && <Square />}

    </div>

  )

}

export default Page