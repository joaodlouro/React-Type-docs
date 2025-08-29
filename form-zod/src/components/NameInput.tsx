import { useState } from "react";
import { useUser } from "@/contexts/UsersCtx";
import { KeyboardEvent } from "react";



export const NameInput = () => {
    const UserCtx = useUser();
    const [NameInput, setName] = useState('');

   const handleKeyUpAction = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === 'Enter') {
    const normalized = NameInput.trim().toLowerCase();
    
    if (normalized !== '' && normalized !== 'bot') {
      UserCtx?.setUser(NameInput.trim()); 
    }
  }
}



  return (
    <div className="mt-14">
        <p>Qual seu nome?</p>
        <div className="flex gap-3 item-center text-lg">
            <input type="text" className="flex-1 border border-white/30 rounded-md px-4 py-3 text-white bg-white/10 outline-none"
            value={NameInput}
            onChange={e => setName(e.target.value)}
            onKeyUp={handleKeyUpAction}
            />
            
    </div>
    </div>
  );
} 