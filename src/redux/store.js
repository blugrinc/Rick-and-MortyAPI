import { configureStore } from "@reduxjs/toolkit";

import exampleSaga from "./rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {},
  applyMiddleware: () => [sagaMiddleware],
});

sagaMiddleware.run(exampleSaga);
