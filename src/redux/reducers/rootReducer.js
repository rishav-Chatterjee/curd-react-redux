import { combineReducers } from "redux";
import { expenseReducer } from "./expenses";
import { userReducer } from "./users";

const rootReducer = combineReducers({
  expenses: expenseReducer,
  usersallList: userReducer,
});

export default rootReducer;
