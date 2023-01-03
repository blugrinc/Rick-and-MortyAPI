import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  page: 1,
  length: null,
  result: [],
  isLoading: false,
};

export const charactersSlice = createSlice({
  name: "charactersSlice",
  initialState,

  reducers: {
    startFetchingCharacters: () => {},

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setCharacters: (state, action) => {
      state.result = action.payload;
    },

    setLength: (state, action) => {
      state.length = action.payload;
    },
  },
});

export const { startFetchingCharacters, setCharacters, setLength, setLoading } =
  charactersSlice.actions;

export default charactersSlice.reducer;
