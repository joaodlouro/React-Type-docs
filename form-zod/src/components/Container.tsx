import { Children, ReactNode } from "react"


type Props = {
children: ReactNode;
}

export const Container = ({children}: Props) => {


return(

<div
className={''}>

{children}

</div>



)



}