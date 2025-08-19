import { useTheme } from "@/contexts/ThemeCtx";
import { Children, ReactNode } from "react"


type Props = {
children: ReactNode;
}

export const Container = ({children}: Props) => {
    const ThemeCtx = useTheme ();


return(

<div
  className={`w-full h-screen ${
    ThemeCtx?.theme === 'dark' 
      ? 'bg-black text-white' 
      : 'bg-white text-black'
  }`}
>

  
<div className="container mx-auto">
{children}
</div>

</div>



)



}