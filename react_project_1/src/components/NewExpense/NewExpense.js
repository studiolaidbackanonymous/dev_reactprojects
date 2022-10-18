import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
      <button> Add Expense</button>
    </div>
  );
};

export default NewExpense;
