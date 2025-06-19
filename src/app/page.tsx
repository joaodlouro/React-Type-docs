"use client"
import { useState } from "react";
//use states 
//deixar tipado 
import "./globals.css"

const Page = () => {
  const [count, setCount] = useState(0);

  const handleClickButton = () => {
   
    setCount(count + 1);

}

return(

<div className="w-screen h-screen flex flex-col justify-center items-center text-3xl" >
<p>{count}</p>
 <button onClick={handleClickButton} className="bg-red-500 p-4">+1</button>

</div>
);
}
export default Page;