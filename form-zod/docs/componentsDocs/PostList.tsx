import { PostCtx } from "@/contexts/PostCtx"
import { useContext } from "react"

export const PostList = () => {

    const postCtx = useContext (PostCtx);

    const handleRemoveButton = (id: number) =>{
      postCtx?.removePost(id);
    }


    
    return (
  <div>
    {postCtx?.posts.map(item => (
    <div key={item.id} className="p-3 border-b border-gray-500">
    <div className="text-xl font-bold mb-2">{item.title}</div>
    <div className="text-sm">{item.body}</div>  
    <button onClick={()=> handleRemoveButton(item.id)}> [remover] </button>
    </div>
    ))}
  </div>
);

}