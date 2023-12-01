import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { fetchUsers } from "./store/reducers/ActionCreators";
import { PostContainer } from "./components/PostContainer";

function App() {
  const dispatch = useAppDispatch();
  const { users, error, isLoading } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
    {/* <div>
      {isLoading&&<div>Loading...</div>}
      {error&& <div>{error}</div> }
      {users.map((u) => (
        <h1>{u.name}</h1>
      ))}
    </div> */}
    <PostContainer/>
    </>
  );
}

export default App;
