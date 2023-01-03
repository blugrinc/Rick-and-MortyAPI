import { combineReducers } from "@reduxjs/toolkit";
import { homePageSlice } from "../app/pages/HomePage/store/homePage.slice";
import { charactersSlice } from "../app/pages/CharactersPage/store/characterPage.slice";

const rootReducer = combineReducers({
  homePageSlice,
  charactersSlice,
});

export default rootReducer;
