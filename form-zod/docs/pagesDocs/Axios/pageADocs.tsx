"use client"

import axios from 'axios'
import React from 'react'

const Page = () => {

  const handleGetPosts = async () => {
  
    const RequestParams = {
      postId:1,
      sort:'desc'                              //mantandando detalhes da url monta a url com parametros
    }



    const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
      params: RequestParams
      
    })
    console.log(response.data)
    }


  return (
    <div> 
      <button onClick={handleGetPosts} >aqui clicar</button>
      
    </div>
  )
}

export default Page