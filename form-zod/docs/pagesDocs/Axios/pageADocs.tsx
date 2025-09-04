
"use client"
import  {api} from "@/Utils/Api"

import axios from 'axios'


// const hadleGetPosts = async () =>{

// const response = await api.get('/photos');         //mesma coisa, apenas muda os tipos de requisições



// }

const hadleAddPosts= async()=>{
const response = await api.post('/posts',{                //usando axios importanto, dessa forma reduz o codigo, ul em um local somente

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