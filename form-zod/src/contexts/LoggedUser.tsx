import { ReactNode, createContext, useState } from "react";

type ContextType = {
  name: string;
  setName: (n: string) => void;
};

export const LogggedUserContext = createContext<ContextType | null>(null); 

export const LoggedUserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("name");

  return (
    <LogggedUserContext.Provider value={{ name, setName }}>
      {children}
    </LogggedUserContext.Provider>
  );
};
