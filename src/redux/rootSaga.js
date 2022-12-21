import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";

function* exampleSaga() {
  console.log("Example saga reached");
}

export default exampleSaga;
