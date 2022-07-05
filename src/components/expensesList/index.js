import React from "react";
import ExpenseCard from "../expenseCard";

const ExpensesList = () => {
  const list = [
    {
      title: "Make a purchase",
      logo: "dssfds",
      createdAt: Date.now(),
      amount: 1234,
    },
    {
      title: "Make a purchase2",
      logo: "fdgdfg",
      createdAt: Date.now(),
      amount: 651465,
    },
  ];
  return (
    <div>
      {list.length ? (
        list.map((item) => <ExpenseCard item={item} />)
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
};

export default ExpensesList;
