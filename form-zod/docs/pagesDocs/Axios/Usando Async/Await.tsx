"use client";

import { useEffect, useState } from "react";
import { User } from "../types/User";



const Page = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const geyUsers = async () => {
    setLoading(true);
    try {
  //fetch busca os dados
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json(); //transformar em json 
  setUsers(json); 
    } catch (erro) {
      console.log("Deu erro");
    }
    setLoading(false);

  };
 
  useEffect(() => {
    geyUsers();
    }, []);  //dessa forma fica bem reduzido
     

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






"use client";

import { useEffect, useState } from "react";
import { User } from "../types/User";
import { title } from "process";



const Page = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const geyUsers = async () => {
    setLoading(true);
    try {
  //fetch busca os dados
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json(); //transformar em json 
  setUsers(json); 
    } catch (erro) {
      console.log("Deu erro");
    }
    setLoading(false);

  };
 
  useEffect(() => {
    geyUsers();
    }, []);  //dessa forma fica bem reduzido
     

    const handleAddNewPost = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts"
      , {
        method: "POST",
        headers: {
          "Content-Type" : "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          title: "Post teste",
          body: "body do teste",
          usetId: 99
        })

      }
      );
      const json = await res.json();   //transformar em json
      console.log(json);
      }
    

return (

  <div className="container flex-center mx-auto">
    <button onClick={handleAddNewPost}> Adicionar Nova post</button>
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