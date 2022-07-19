import { combineReducers } from "redux";
import { expenseReducer } from "./expenses";
import { userReducer } from "./users";

const rootReducer = combineReducers({
  expenses: expenseReducer,
  users: userReducer,
});

export default rootReducer;
