import { all, takeLatest, call, select, put } from "redux-saga/effects";
import { fetchWrapper } from "../../../apis/fetchData";

import {
  startFetchingCharacters,
  startFetchingSearch,
  setCharacters,
  getAllPage,
  setLoading,
} from "./characterPage.slice";
import { selectSearchedName, selectPage } from "./characterPage.selector";
import { isEmpty } from "lodash";

function* handleCharactersLoad() {
  try {
    yield put(setLoading(true));
    const page = yield select(selectPage);
    const endpoint = `character/?page=${page}`;
    const response = yield call(fetchWrapper, endpoint);

    if (!isEmpty(response)) {
      const { info, results } = response;
      yield put(getAllPage(info?.pages));
      yield put(setCharacters(results));
      yield put(setLoading(false));
    }
  } catch (error) {
    console.log("getTest" + error);
    yield put(setLoading(false));
  }
}

function* handleSearchCharacters() {
  try {
    yield put(setLoading(true));
    const page = yield select(selectPage);
    const name = yield select(selectSearchedName);

    const endpoint = `character/?page=${page}&name=${name}`;
    const response = yield call(fetchWrapper, endpoint);
    console.log("SECONDO SAGA", response);

    if (!isEmpty(response)) {
      const { info, results } = response;
      yield put(getAllPage(info?.pages));
      yield put(setCharacters(results));
      yield put(setLoading(false));
    }
  } catch (error) {
    console.log("getTest" + error);
    yield put(setLoading(false));
  }
}

//WATCHER SAGAS
export default function* characterSaga() {
  yield all([
    takeLatest(startFetchingCharacters, handleCharactersLoad),
    takeLatest(startFetchingSearch, handleSearchCharacters),
  ]);
}
