import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   function getErrorMessage(error: unknown) {
//     if (error instanceof Error) return error.message;
//     return String(error);
//   }
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(userSlice.actions.usersFetchingError(getErrorMessage(e)));
//   }
// };

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch {
      return thunkApi.rejectWithValue("не удалось загрузить пользователей");
    }
  }
);
