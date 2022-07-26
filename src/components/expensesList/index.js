import React from "react";
import { useSelector } from "react-redux";
import ExpenseCard from "../expenseCard";
import { ToastContainer, toast } from "react-toastify";

const ExpensesList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  const filteredList = list.filter((item) =>
    item.title.toLowerCase().includes(query)
  );
  const notifySucess = () => toast.success("Expenses Deleted !");
  //console.log(expenses);
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? (
        filteredList.map((item) => (
          <ExpenseCard item={item} notifySucess={notifySucess} />
        ))
      ) : (
        <div className="d-flex justify-content-center align-items-center p-5">
          No Data
        </div>
      )}
    </div>
  );
};

export default ExpensesList;
