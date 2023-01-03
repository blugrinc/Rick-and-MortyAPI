import { all, takeLatest } from "redux-saga/effects";
import { getHomePageData } from "./homePage.slice";

function* getUser() {
  console.log("HOME: SAGA");
}

//WATCHER SAGAS
export default function* homePageSaga() {
  yield all([
    takeLatest(getHomePageData, getUser),
    /*  takeLatest(getPagination, fetchPagination), */
  ]);
  //ultima occorrenza di getUser
}
