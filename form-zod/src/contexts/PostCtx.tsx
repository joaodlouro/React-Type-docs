import { createContext, ReactNode, useReducer } from "react";
import { Post } from "@/types/Post";
import { postReducer } from "@/reducer/postReducer";

type PostCtxType = {
    posts: Post[];
    addPost: (title: string, body: string) => void;
    removePost: (id: number) => void;
};

export const PostCtx = createContext<PostCtxType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
    const [posts, dispatch] = useReducer(postReducer, []);   //agora com reducer

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
