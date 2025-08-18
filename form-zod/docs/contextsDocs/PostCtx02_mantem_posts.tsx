import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { Post } from "@/types/Post";
import { postReducer } from "@/reducer/postReducer";



const STORAGE_KEY = 'postCtxContent';

type PostCtxType = {
    posts: Post[];
    addPost: (title: string, body: string) => void;
    removePost: (id: number) => void;
    
};

export const PostCtx = createContext<PostCtxType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
    const [posts, dispatch] = useReducer(postReducer, JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]' ));   //agora com reducer
      //local para reducer

    useEffect(() => {      
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));          // lembrar transforma em string com o JSON. vai ternor [], esperando add

    }, [posts]);


    const addPost = (title: string, body: string) => {
        dispatch({ type: 'add', payload: { title, body } }); 
    };

    const removePost = (id: number) => {
        dispatch({ type: 'remove', payload: { id } });
    };

    //setPosts([...posts, {id: posts.length, title, body}])  //add

    return (
        <PostCtx.Provider value={{ posts, addPost, removePost }}>
            {children}
        </PostCtx.Provider>
    );
};

