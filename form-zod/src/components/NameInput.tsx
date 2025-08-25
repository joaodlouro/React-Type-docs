import { useState } from "react";


export const NameInput = () => {
    const [NameInput, setName] = useState('')
  return (
    <div className="mt-14">
        <p>Qual seu nome?</p>
        <div className="flex gap-3 item-center text-lg">
            <input type="text" className="flex-1 border border-white/30 rounded-md px-4 py-3 text-white bg-white/10 outline-none"
            value={NameInput}
            onChange={e => setName(e.target.value)}
            />
            
    </div>
    </div>
  );
}