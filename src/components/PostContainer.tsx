import React from "react";
import { postAPI } from "../services/PostService";
import { PostItem } from "./PostItem";

export const PostContainer = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(5);

  return (
    <div>
      {isLoading && <h1>LOADINT...</h1>}
      {error&& <h1>ERROR</h1> }

      {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  );
};
