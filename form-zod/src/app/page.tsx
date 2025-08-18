
"use client"

import { Container } from "@/components/Container";
import { ThemeProvider } from "@/contexts/ThemeCtx";
import React from "react";

const Page = () => {

return(

<ThemeProvider>
  <Container>

     <header className="py-5">
      <h1 className='text-3lx'>
        Titulo da página
      </h1>
     </header>
     <section>
      <p className="my-5">conteudo aqui lol!</p>
     </section>

  </Container>

</ThemeProvider>
)
};

export default Page;