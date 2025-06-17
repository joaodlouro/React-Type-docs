"use client" // convertendo cpmponente   // e     <button  onClick={function click) e possivel criar a função dentro de button. 
        


import "./globals.css";


const Page = () => {
  function handleClick () {
    alert("Aquiiii!")      
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button  onClick={function click(){
        alert ("function on 2");
      }}  className="p-3 bg-blue-700 text-white rounded-md">
        clique aqui
      </button>
    </div>
  );
};

export default Page;
