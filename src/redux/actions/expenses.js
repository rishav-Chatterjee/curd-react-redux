import { ADD_EXPENSE, DELETE_EXPENSE } from "../actionTypes/expenses";

export const addExpense = (data) => {
  console.log(data);
  return {
    type: ADD_EXPENSE,
    data: data,
  };
};

export const deleteExpense = (data) => {
  return {
    type: DELETE_EXPENSE,
    data: data,
  };
};
