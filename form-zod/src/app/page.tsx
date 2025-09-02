
"use client"

import axios from 'axios'

const hadleAddPosts= async()=>{
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {       //para axios. post 
                                                                                          // poderias ser PUT ou DELETE tbm
    title: 'post title',
    body: 'corpo',
    userId: 10,
  });

   if (response.data.id){
    console.log('Post adicionado com sucesso');     //verifica se o post foi adicionado, basico
   } else {
    console.log('Erro ao adicionar post');
   }
  }




const Page = () => {

  return(

<div className="container mx-auto p-4">
<button onClick={hadleAddPosts} className="">
  post aqui
  </button>
  </div>
  )


}



export default Page