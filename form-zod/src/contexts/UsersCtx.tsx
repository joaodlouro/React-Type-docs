import { createContext, ReactNode, useState, useContext } from "react";

type UserCtx = {
  user: string;
  setUser: (newUser: string) => void;
};

export const UserCtx = createContext<UserCtx | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState('');

  return (
    <UserCtx.Provider value={{ user, setUser }}>
      {children}
    </UserCtx.Provider>
  );
};

export const useUser = () => useContext(UserCtx);
