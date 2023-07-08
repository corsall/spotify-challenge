import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isPlaying: false,
  activeSong: {},
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong(state, action) {
      state.activeSong = action.payload.song;
    },

    playPause(state, action) {
      state.isPlaying = action.payload;
    },
  }
})

export const { setActiveSong, playPause} = playerSlice.actions;
export default playerSlice.reducer;