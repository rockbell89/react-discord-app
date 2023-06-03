import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import channelSlice from "./channelSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    channel: channelSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
