import { createContext } from "react";
import { ReactNode, Message } from "@/types/Message";

type ChatCtx ={
    chat: Message[];
    addMessage: (user: string, text: string) => void;

}

export const ChatCtx = createContext<ChatCtx | null>(null);

export const ChatProvider = ({children}: {children: ReactNode}) => {




    return(
        <ChatCtx.Provider value={}>{children}</ChatCtx.Provider>
    )
}

