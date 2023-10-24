import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectedYearHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSelectedYear={selectedYearHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
