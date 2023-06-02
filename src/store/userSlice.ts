import { createSlice } from "@reduxjs/toolkit";
import { User } from "../utils";

const initialState: { user: User | null } = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
