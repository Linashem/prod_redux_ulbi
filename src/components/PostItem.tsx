import React, { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

export const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const removeHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const updateHandler = (event: React.MouseEvent) => {
    const title = prompt() || "";
    update({ ...post, title });
  };

  return (
    <div onClick={updateHandler}>
      <div>
        {post.id}- {post.title} <button onClick={removeHandler}>delete</button>
      </div>
    </div>
  );
};
