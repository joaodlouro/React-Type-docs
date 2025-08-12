"use client"

import React from "react";



const Subtitle = ({ label }: {label: string}) => {
    
  return (
   <p>{label}</p>
   );
};


const Title = ({ label }: {label: string}) => {

  return(
  <h1 className="text-4xl font-bold my-4">{label}</h1>
  );
}
                                      //type no iten⬇️!!

const Headers = ({title, subtitle}: {title:string, subtitle: string;} ) =>{

return(

  <h1>
    <Title label={title}/>
    <Subtitle label={subtitle}/>

  </h1>
);

};


const Page = () =>{

  const PageInfo ={
    title:'Titulo',
    subtitle: 'um subtitle né'
  };


  return(
    <div className="container mx-auto">
      <Headers title={PageInfo.title} subtitle={PageInfo.subtitle} />
    </div>

  );
}

export default Page;