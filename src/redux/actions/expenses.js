import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  QUERY_EXPENSE,
} from "../actionTypes/expenses";

export const addExpense = (data) => {
  //console.log(data);
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

export const queryExpense = (query) => {
  //console.log(query);
  return {
    type: QUERY_EXPENSE,
    query: query,
  };
};
