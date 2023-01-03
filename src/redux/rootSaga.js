import { all, fork } from "redux-saga/effects";
import homePageSaga from "../app/pages/HomePage/store/homePage.saga";
import characterSaga from "../app/pages/CharactersPage/store/characterPage.saga";

function* rootSaga() {
  yield all([fork(homePageSaga), fork(characterSaga)]);
}

export default rootSaga;
