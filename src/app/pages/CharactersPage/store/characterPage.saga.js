import { all, takeLatest, call, select, put } from "redux-saga/effects";
import {
  fetchAllCharacters,
  fetchSingleCharacter,
  fetchWrapper,
} from "../../../apis/fetchData";

import {
  startFetchingCharacters,
  setCharacters,
  setLength,
  setLoading,
} from "./characterPage.slice";
import { selectName, selectPage } from "./characterPage.selector";
import { isEmpty } from "lodash";

function* getAllCharacters() {
  try {
    yield put(setLoading(true));
    const page = yield select(selectPage);
    const response = yield call(fetchAllCharacters, page);

    if (!isEmpty(response)) {
      const { info, results } = response;
      yield put(setLength(info?.pages));
      yield put(setCharacters(results));
      yield put(setLoading(false));
    }
  } catch (error) {
    console.log("getAllCharacters ERROR" + error);
    yield put(setLoading(false));
  }
}

function* getTest() {
  try {
    yield put(setLoading(true));
    const page = yield select(selectPage);
    const endpoint = `/character/?page=${page}`;
    const response = yield call(fetchWrapper, endpoint);
    console.log(response);

    if (!isEmpty(response)) {
      const { info, results } = response;
      yield put(setLength(info?.pages));
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
  yield all([takeLatest(startFetchingCharacters, getTest)]);
}
