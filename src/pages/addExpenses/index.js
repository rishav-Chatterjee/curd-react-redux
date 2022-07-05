import React from "react";
import AddExpenseForm from "../../components/addExpenseForm";
import Topfold from "../../components/topfold";

const AddExpenses = () => {
  return (
    <div className="m-5">
      <Topfold />
      <AddExpenseForm />
    </div>
  );
};

export default AddExpenses;
