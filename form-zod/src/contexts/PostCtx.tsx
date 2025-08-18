import { createContext, ReactNode, useReducer } from "react";
import {Post} from "@/types/Post"
import { postReducer } from "@/reducer/postReducer";


type PostCtxType ={

    posts: Post[];
    addPost: (title: string, body: string) => void;
}


export const PostCtx = createContext <PostCtxType | null>(null)

export const PostProvider = ({children}: {children: ReactNode}) =>{


    const [posts, dispatch] = useReducer (postReducer, [])   //agora com reducer

    const addPost = (title: string, body: string) =>{
        
        dispatch({type: 'add', payload: {title, body} })


//setPosts([...posts, {id: posts.length, title, body}])  //add

}

return(

<PostCtx.Provider value={{ posts, addPost }}>{children}</PostCtx.Provider>
);


};