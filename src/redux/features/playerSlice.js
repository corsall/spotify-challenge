import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isPlaying: false,
  activeSong: {},
  currentSongs: [],
  currentIndex: 0
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong(state, action) {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
    },

    playPause(state, action) {
      state.isPlaying = action.payload;
    },

    changeSong(state, action) {
      if(state.currentSongs[action.payload]?.track){
        state.activeSong = state.currentSongs[action.payload]?.track
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
    }
  }
})

export const { setActiveSong, playPause, changeSong} = playerSlice.actions;
export default playerSlice.reducer;