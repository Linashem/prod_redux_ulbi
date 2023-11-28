import React from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";

function App() {
  const { count } = useAppSelector((state) => state.userReducer);
  const { increment } = userSlice.actions;

  const dispatch = useAppDispatch();

  return (
    <div style={{display:'flex'}}>
      <h1 className="App">COUNT {count}</h1>
      <button onClick={()=>dispatch(increment(10))}>+</button>
    </div>
  );
}

export default App;
