import {
  call,
  put,
  takeEvery,
  takeLatest,
  take,
  all,
  delay,
  fork,
} from "redux-saga/effects";
import {
  GET_USERS_START,
  CREATE_USER_START,
  DELETE_USER_START,
} from "../actionTypes/users";
import {
  loadUserSuccess,
  loadUserFailed,
  createUserSuccess,
  createUserFailed,
  deleteUserSuccess,
  deleteUserFailed,
} from "../actions/users";
import { loadUsersApi, createUsersApi, deleteUsersApi } from "../api/userapi";

//*****WORKERS*****
//GET USERS
export function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    //console.log(response);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUserSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUserFailed(error.response.data));
  }
}

//CREATE USERS
export function* onCreateUsersStartAsync(payload) {
  console.log(payload.payload, "payload");
  try {
    const response = yield call(createUsersApi, payload.payload);
    console.log(response.data, "response");
    if (response.status === 200) {
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserFailed(error.response.data));
  }
}

//DELETE USERS
export function* onDeleteUsersStartAsync(userId) {
  console.log(userId, "userId");
  try {
    const response = yield call(deleteUsersApi, userId.payload);
    //console.log(response);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteUserSuccess(userId.payload));
    }
  } catch (error) {
    yield put(deleteUserFailed(error.response.data));
  }
}

//*******WATCHERS*******
export function* onLoadUsers() {
  yield takeEvery(GET_USERS_START, onLoadUsersStartAsync);
}
export function* onCreateUsers() {
  yield takeLatest(CREATE_USER_START, onCreateUsersStartAsync);
}
export function* onDeleteUsers() {
  yield takeLatest(DELETE_USER_START, onDeleteUsersStartAsync);
}

//all sagas are written in fork for parallel working of sagas without any block
const userSagas = [fork(onLoadUsers), fork(onCreateUsers), fork(onDeleteUsers)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
