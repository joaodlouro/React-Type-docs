"use client" // convertendo cpmponente   // e     <button  onClick={function click) e possivel criar a função dentro de button.  <button  onClick={() => alert("Function on")} outro jeito 
        


import "./globals.css";


const Page = () => {

  const handleClick = () => {
    alert("function on");
  }


  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button  onClick={handleClick}  className="p-3 bg-blue-700 text-white rounded-md">
        clique aqui
      </button>
    </div>
  );
};

export default Page;
