import { LoggedUserProvider, LogggedUserContext } from "@/contexts/LoggedUser"
import { useContext } from "react"


export const Header = () => {

const loggedUserCtx= useContext(LogggedUserContext);

const handleLogout= () =>{

   loggedUserCtx?.setName('')
};

return(

 <header>

  <h1 className="text-3xl">
   Titulo da pagina!
  </h1>

  {loggedUserCtx?.name &&

  <>
  <p className="">
    User logado: {loggedUserCtx?.name} 
    </p>
    
    <button className="" 
    onClick={handleLogout}>
       Exit
    </button>
  </>
  }

  {(!loggedUserCtx ||  loggedUserCtx?.name === '') &&
<p> Usser DESLOGADO</p>}

   
 
 </header>

 


);

};
