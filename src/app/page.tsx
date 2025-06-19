"use client"
//use states 
import "./globals.css"

const Page = () => {
let count = 0;

const handleClickButton = () => {
  count++; 


}

return(

<div className="w-screen h-screen flex flex-col justify-center items-center text-3xl" >
<p>{count}</p>
 <button onClick={handleClickButton} className="bg-red-500 p-4">+1</button>

</div>
);
}
export default Page;