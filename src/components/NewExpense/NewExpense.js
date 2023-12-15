import React from "react";
import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = ({ expenses, setExpenses }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    return (
      <div className="new-expense">
        <ExpenseForm
          expenses={expenses}
          setExpenses={setExpenses}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      </div>
    );
  };
};
