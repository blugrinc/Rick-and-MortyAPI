import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import homePageSlice from "../app/pages/HomePage/store/homePage.slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: combineReducers({
    homePageSlice,
  }),
  middleware: () => sagaMiddleware,
});

sagaMiddleware.run(rootSaga);
