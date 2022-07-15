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
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
  GET_USERS_START,
} from "../actionTypes/users";
import { loadUserSuccess, loadUserFailed } from "../actions/users";
import { loadUsersApi } from "../api/userapi";

//workers
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

//watchers
export function* onLoadUsers() {
  yield takeEvery(GET_USERS_START, onLoadUsersStartAsync);
}

//all sagas are written in fork for parallel working of sagas without any block
const userSagas = [fork(onLoadUsers)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
