import { configureStore } from "@reduxjs/toolkit";

//IMPORT PER MIDDLEWARE DI SAGA
import createSagaMiddleware from "redux-saga";
//ROOT CONTENTENTE TUTTI I SAGA E I REDUCER RAGGRUPPATI
import rootSaga from "./rootSaga";
import createRootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: createRootReducer(),
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
