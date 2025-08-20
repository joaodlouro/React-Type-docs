
import { Children, ReactNode } from "react"


type Props = {
children: ReactNode;
}

export const Container = ({children}: Props) => {



return(

<div
  className="w-full h-screen bg-white text-black dark:bg-black dark:text-white">  

  
<div className="container mx-auto">
{children}
</div>

</div>
)

}


//usando o tailwind, mas está quebrado! olhar as versões !!
// para evitar essas dores de cabeça use a versão sem fazer a mudança diretamente usando o tailwind