import React from "react";

import ExponseForm from "./ExpenseForm";

import "./NewExpense.css";

export default function NewExpense(props) {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
  };

  return (
    <div className="new-expense">
      <ExponseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}
