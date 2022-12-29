import { combineReducers } from "@reduxjs/toolkit";
import { homePageSlice } from "../app/pages/HomePage/store/homePage.slice";

const createRootReducer = () =>
  combineReducers({
    homePageSlice,
    /* inserire sliceReducer */
  });

export default createRootReducer;
