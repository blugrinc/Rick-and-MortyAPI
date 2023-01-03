/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const homePageSlice = createSlice({
  name: "homePageSlice",
  initialState,
  reducers: {
    getHomePageData: () => {
      console.log("HOME: SLICE");
    },
  },
});

export const { getHomePageData } = homePageSlice.actions;

export default homePageSlice.reducer;
