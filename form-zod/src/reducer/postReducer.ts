import { Post } from "@/types/Post";

type AddAction = {
  type: "add";
  payload: {
    title: string;
    body: string;
  };
};

type RemoveAction = {
  type: "remove";
  payload: {
    id: number;
  };
};


type PostActions = AddAction | RemoveAction;

export const postReducer = (posts: Post[], action: PostActions): Post[] => {
  switch (action.type) {
    case "add":
      return [
        ...posts,
        {
          id: posts.length,
          title: action.payload.title,
          body: action.payload.body,
        }
      ];

    case "remove":
      return posts.filter(p => p.id !== action.payload.id);

    default:
      return posts;
  }
};
