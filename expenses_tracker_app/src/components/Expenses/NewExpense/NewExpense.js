import React, { useState } from "react";

import ExponseForm from "./ExpenseForm";

import "./NewExpense.css";

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExponseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
