"use client";

import { useState, useEffect } from 'react';

 const Page = () => {
  const [name, setName] = useState('joaozonho123');
  const [age, setAge] = useState(50);


  useEffect(() => {
    console.log ('rodando :p');

  }, [age]);

  return (
    <div className="">

      <p>nome aqui e {name} e eu tenho {age} receba</p>
       <hr/>
       <button className= "btn p-3 btn-primary border-color bg-red-500" onClick={() => setName('joaozonho123')}> mudar  </button>
       <button className= "btn p-3 btn-primary border-color bg-red-500" onClick={() => setName('Pedro')}> mudar  </button>
       <button className= "btn p-3 btn-primary  bg-red-500" onClick={() => setAge(50)}> mudar idade </button>
        <button className= "btn p-3 btn-primary  bg-red-500" onClick={() => setAge(25)}> mudar idade </button>

    </div>
  );
}

export default Page;
