import {
  GET_USERS_START,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
} from "../actionTypes/users";

const initialState = {
  usersList: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        usersList: action.payload,
      };
    }
    case LOAD_USER_FAILED: {
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    }
    default:
      return state;
  }
}; //action is here what tiggers the initialState

export default userReducer;
