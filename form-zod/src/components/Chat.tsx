import { useUser } from "@/contexts/UsersCtx";
import { NameInput } from "./NameInput";

export const Chat = () => {

const UserCtx = useUser()

    if  (!UserCtx) return null;
    if (!UserCtx.user) return  <NameInput />



    return(
        <div className="border border-white/30 rounded-md">Chat</div>
    )
}