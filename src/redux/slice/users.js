import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersAction = createAsyncThunk("users/getAll", async () => {
  const res = await axios.get("http://localhost:3001/Users/");
  return res.data;
});
export const usersPostAction = createAsyncThunk("users/post", async (user) => {
  axios
    .post("http://localhost:3001/Users/", user)
    .then(() => {})
    .catch((error) => {
      console.log("Error adding user: ", error);
    });
});
const usersSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  extraReducers: (builder) => {
    builder.addCase(usersAction.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(usersAction.rejected, (state, action) => {
      state.users = "NoData";
    });
    builder.addCase(usersPostAction.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(usersPostAction.rejected, (state, action) => {
      console.log("Error adding user: ", action.error);
    });
  },
});

export default usersSlice.reducer;
