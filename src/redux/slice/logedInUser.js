import { createSlice } from "@reduxjs/toolkit";

const logedInUser = createSlice({
  name: "logedInUser",
  initialState: { logedInUser: null },
  reducers: {
    setLogedInUser: (state, action) => {
      state.logedInUser = action.payload;
    },
  },
});
export const { setLogedInUser } = logedInUser.actions;
export default logedInUser.reducer;
