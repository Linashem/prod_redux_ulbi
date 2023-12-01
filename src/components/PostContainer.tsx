import React, { useState } from "react";
import { postAPI } from "../services/PostService";
import { PostItem } from "./PostItem";
import { IPost } from "../models/IPost";

export const PostContainer = () => {
  const [limit, setLimit] = useState(100);
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit);
  const [createPost, {}] = postAPI.useCreatePostMutation();

  const handlerCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  return (
    <div>
      <button onClick={handlerCreate}>add post</button>
      {isLoading && <h1>LOADINT...</h1>}
      {error && <h1>ERROR</h1>}

      {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  );
};
