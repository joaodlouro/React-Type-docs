import { createContext, ReactNode, useReducer } from "react";
import { Message } from "@/types/Message";
import { ChatReducer } from "@/reducer/ChatReducer";

type ChatCtx ={
    chat: Message[];
    addMessage: (user: string, text: string) => void;

}

export const ChatCtx = createContext<ChatCtx | null>(null);

export const ChatProvider = ({children}: {children: ReactNode}) => {

    const [chat, dispatch] = useReducer(ChatReducer, []);
    const addMessage = (user: string, text: string) => {
        dispatch({type: 'add', payload: {user, text}});
    };




    return(
        <ChatCtx.Provider value={{chat, addMessage}}>{children}</ChatCtx.Provider>
    )
}

