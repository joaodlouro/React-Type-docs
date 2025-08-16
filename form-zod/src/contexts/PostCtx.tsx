import { createContext, ReactNode, useState } from "react";
import {Post} from "@/types/Post"


type PostCtxType ={

    posts: Post[];
    addPost: (title: string, body: string) => void;
}


export const PostCtx = createContext <PostCtxType | null>(null)

export const PostProvider = ({children}: {children: ReactNode}) =>{

const [posts, setPosts] = useState <Post []> ([]);

const addPost = (title: string, body: string) =>{


setPosts([...posts, {id: posts.length, title, body}])  //add

}

return(

<PostCtx.Provider value={{ posts, addPost }}>{children}</PostCtx.Provider>
);


};