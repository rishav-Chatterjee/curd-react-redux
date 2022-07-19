import {
  GET_USERS_START,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  DELETE_USER_START,
  DELETE_USER_FAILED,
  DELETE_USER_SUCCESS,
} from "../actionTypes/users";

const initialState = {
  usersList: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START:
    case CREATE_USER_START:
    case DELETE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        usersList: action.payload,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        usersList: state.usersList((item) => item.id !== action.payload),
      };
    case LOAD_USER_FAILED:
    case CREATE_USER_FAILED:
    case DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
}; //action is here what tiggers the initialState

export default userReducer;
