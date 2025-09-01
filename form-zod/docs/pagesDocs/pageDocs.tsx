"use client";

import { useEffect, useState } from "react";
import { User } from "../types/User";



const Page = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    //setLoading(true); 
     fetch ("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())  
      .then(json => {
        setUsers(json);
   
      })
      .catch (()=>{

        console.log("Erro ao buscar dados"); // retorna o erro, e não segue executando o próximo then

      })

      .finally(() => {
    setLoading(false) //quase nunca se usa, bom uso para impedir repetições, quando existe um repetição de código e bom usar o finally!
      });

  }, []);

return (

  <div className="container flex-center mx-auto">
    <h1 className="text-3xl">Lista</h1>

    {loading && "carregando..."}
    {!loading  && users.length > 0 &&

    <ul> 
    {users.map(item => (
      <li key={item.id}>{item.name}
      ({item.address.city})</li>))
    }
    </ul>
}
{!loading && users.length === 0 && <p>Não há usuários!</p>}

  </div>
)
}

export default Page;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Usando Async/Await

// "use client";

// import { useEffect, useState } from "react";
// import { User } from "../types/User";



// const Page = () => {

//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);

//   const geyUsers = async () => {
//     try {
//     setLoading(true);
//   //await espera a resposta para seguir o código força essa espera
  
//   //fetch busca os dados
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const json = await res.json(); //transformar em json 
//   setUsers(json); 
//   setLoading(false);
//     } catch (error) {
//       console.log("Deu erro");
//       setLoading(false);
//     }

//   };
 
//   useEffect(() => {
//     geyUsers();
//     }, []);  //dessa forma fica bem reduzido
     

// return (

//   <div className="container flex-center mx-auto">
//     <h1 className="text-3xl">Lista</h1>

//     {loading && "carregando..."}
//     {!loading  && users.length > 0 &&

//     <ul> 
//     {users.map(item => (
//       <li key={item.id}>{item.name}
//       ({item.address.city})</li>))
//     }
//     </ul>
// }
// {!loading && users.length === 0 && <p>Não há usuários!</p>}

//   </div>
// )
// }

// export default Page;