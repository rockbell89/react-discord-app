import { createSlice } from "@reduxjs/toolkit";

type InitialChannelState = {
  channelId: string | null;
  channelName: string | null;
};

const initialState: InitialChannelState = {
  channelId: null,
  channelName: null,
};

export const channelSlice = createSlice({
  name: "channel",
  initialState: initialState,
  reducers: {
    setChannel: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannel } = channelSlice.actions;
export default channelSlice.reducer;
