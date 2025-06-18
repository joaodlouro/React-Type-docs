"use client";
//separando os alerts 
import { CustomButton } from "./components/CustomButton";
import "./globals.css";


const Page = () => {

  const handleButtton1 = ()=> alert('aqui 1')
    const handleButtton2 = ()=> alert('aqui 2')
      const handleButtton3 = ()=> alert('aqui 3')



  return (
    <div className="w-screen h-screen flex justify-center items-center gap-4">
      <CustomButton label="aqui1"  onClick={handleButtton1}/>
            <CustomButton label="aqui2" onClick={handleButtton2}/>
                  <CustomButton label="aqui3" onClick={handleButtton3}/>

    </div>
  );
};

export default Page;
