import { createSlice } from "@reduxjs/toolkit";
import { Channel } from "../utils";

const initialState: { channel: Channel | null } = {
  channel: null,
};

export const channelSlice = createSlice({
  name: "channel",
  initialState: initialState,
  reducers: {
    setChannel: (state, action) => {
      state.channel = action.payload;
    },
  },
});

export const { setChannel } = channelSlice.actions;
export default channelSlice.reducer;
