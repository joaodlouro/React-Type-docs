"use client"

import { ChatProvider } from "@/contexts/ChatCtx";
import { UserProvider } from "@/contexts/UsersCtx";
import { Chat } from "@/components/Chat";


const Page= () => {



  return(
    <div className="container mx-auto mx-auto max-w-lg px2">
      <UserProvider>
        <ChatProvider>
          <h1 className="text-3xl font-bold my-3 text-center">Chat aqui</h1>
          <Chat />
        </ChatProvider>

      </UserProvider>
    </div>
  )
}

export default Page;