import {
  GET_USERS_START,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
} from "../actionTypes/users";

export const getusersStart = () => {
  //console.log(data);
  return {
    type: GET_USERS_START,
  };
};

export const loadUserSuccess = (users) => {
  //console.log(users, "getusers");
  return {
    type: LOAD_USER_SUCCESS,
    payload: users,
  };
};

export const loadUserFailed = (error) => {
  //console.log(data);
  return {
    type: LOAD_USER_FAILED,
    payload: error,
  };
};
