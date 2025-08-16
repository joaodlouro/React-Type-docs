import { PostCtx } from "@/contexts/PostCtx";
import { useContext } from "react";


export const Footer = () =>{


const postCtx = useContext(PostCtx)
     
return(


    <footer>
        Total POSTS: {postCtx?.posts.length}

    </ footer>


);
};