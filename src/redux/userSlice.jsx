import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      return [];
    },
  },
});
export const { add, remove } = userSlice.actions;
export default userSlice.reducer;
