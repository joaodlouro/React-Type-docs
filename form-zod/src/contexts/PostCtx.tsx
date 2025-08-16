import { createContext, ReactNode, useState } from "react";
import {Post} from "@/types/Post"


type PostCtxType ={

    posts: Post[];
}


export const PostCtx = createContext <PostCtxType | null>(null)

export const PostProvider = ({children}: {children: ReactNode}) =>{

const [posts, setPosts] = useState <Post []> ([]);

return(

<PostCtx.Provider value={{ posts }}>{children}</PostCtx.Provider>
);


};