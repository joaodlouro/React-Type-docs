"use client";

import { useEffect, useState } from "react";
import { User } from "../types/User";



const Page = () => {

  const [users, setUsers] = useState<User[]>([]);
 
  useEffect(() => {
    console.log("etapa1");
    console.log("etapa2");
     fetch ("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())  
      .then(json => {
        console.log("etapa3");
        setUsers(json);
   
      })
      .catch (()=>{
        console.log("Erro ao buscar dados"); // retorna o erro, e não segue executando o próximo then
      })

      .finally(() => {
        console.log("terminou com erro ou sem erro!"); //quase nunca se usa, bom uso para impedir repetições
      });

      console.log("etapa4"); 

  }, []);

return (

  <div className="container flex-center mx-auto">
    <h1 className="text-3xl">Lista</h1>

    {users.length <= 0 && "carregando..."}
    {users.length > 0 &&

    <ul> 
    {users.map(item => (
      <li key={item.id}>{item.name}
      ({item.address.city})</li>))
    }
    </ul>
}

  </div>
)
}

export default Page;