import React from "react";
import ExpensesList from "../../components/expensesList";
import Topfold from "../../components/topfold";
import "./home.css";
const Home = () => {
  return (
    <div className="m-5">
      <Topfold />
      <ExpensesList />
    </div>
  );
};

export default Home;
