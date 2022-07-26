import { takeEvery, takeLatest, fork, all } from "redux-saga/effects";
import {
  onLoadUsersStartAsync,
  onCreateUsersStartAsync,
  onDeleteUsersStartAsync,
} from "./usersSaga";

import {
  GET_USERS_START,
  CREATE_USER_START,
  DELETE_USER_START,
} from "../actionTypes/users";

export default function* rootSaga() {
  yield takeEvery(GET_USERS_START, onLoadUsersStartAsync);
  yield takeLatest(CREATE_USER_START, onCreateUsersStartAsync);
  yield takeLatest(DELETE_USER_START, onDeleteUsersStartAsync);
  /*   yield all([...userSagas]); */
}
