import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchName: "",
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
    startFetchingSearch: (state, action) => {
      state.searchName = action.payload;
    },

    //cloading
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    //Array of characters
    setCharacters: (state, action) => {
      state.result = action.payload;
    },
    //pages
    getAllPage: (state, action) => {
      state.length = action.payload;
    },

    nextPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  startFetchingCharacters,
  startFetchingSearch,
  setLoading,
  setCharacters,
  getAllPage,
  nextPage,
} = charactersSlice.actions;

export default charactersSlice.reducer;
