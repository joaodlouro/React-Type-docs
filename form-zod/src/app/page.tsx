"use client";

import { useEffect } from "react";



const Page = () => {
 
  useEffect(() => {
     fetch ("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())  
      .then(json => {
        console.log(json[0]);
      }) 

  }, []);

return (

  <div className="container flex-center mx-auto">
    <h1 className="text-3xl">Lista</h1>
  </div>
)
}

export default Page;