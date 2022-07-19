import {
  GET_USERS_START,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from "../actionTypes/users";

//GET USERS
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

//CREATE USER
export const createUsersStart = (user) => {
  console.log(user, "action");
  return {
    type: CREATE_USER_START,
    payload: user,
  };
};

export const createUserSuccess = () => {
  //console.log(users, "getusers");
  return {
    type: CREATE_USER_SUCCESS,
  };
};

export const createUserFailed = (error) => {
  //console.log(data);
  return {
    type: CREATE_USER_FAILED,
    payload: error,
  };
};

//DELETE USER
export const deleteUsersStart = (userId) => {
  //console.log(user, "action");
  return {
    type: DELETE_USER_START,
    payload: userId,
  };
};

export const deleteUserSuccess = (userId) => {
  //console.log(users, "getusers");
  return {
    type: DELETE_USER_SUCCESS,
    payload: userId,
  };
};

export const deleteUserFailed = (error) => {
  //console.log(data);
  return {
    type: DELETE_USER_FAILED,
    payload: error,
  };
};
