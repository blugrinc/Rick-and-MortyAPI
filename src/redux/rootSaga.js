import { all, fork } from "redux-saga/effects";
import homePageSaga from "../app/pages/HomePage/store/homePage.saga";

function* rootSaga() {
  yield all([fork(homePageSaga)]);
}

export default rootSaga;
