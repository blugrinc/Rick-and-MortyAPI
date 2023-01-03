import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import homePageSlice from "../app/pages/HomePage/store/homePage.slice";
import charactersSlice from "../app/pages/CharactersPage/store/characterPage.slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    home: homePageSlice,
    characters: charactersSlice,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
