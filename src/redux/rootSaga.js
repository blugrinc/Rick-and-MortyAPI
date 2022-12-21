import { all, fork } from "redux-saga/effects";
import "regenerator-runtime/runtime";

function* rootSaga() {
  yield all([
    fork("exampleSaga"),
    //inserire tutti i saga
  ]);
}

export default rootSaga;
