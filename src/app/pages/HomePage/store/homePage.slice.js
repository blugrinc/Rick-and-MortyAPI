/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const homePageSlice = createSlice({
  name: "homePageSlice",
  initialState,
  reducers: {
    getHomePageData: () => {},
  },
});

export const { getHomePageData } = homePageSlice.actions;

export default homePageSlice.reducer;
