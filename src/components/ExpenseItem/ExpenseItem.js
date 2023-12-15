import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import { useState } from "react";
import { ExpenseCard } from "./ExpenseCard/ExpenseCard";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
function ExpenseItem({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("");

  const filteredExpenses = expenses.filter((item) => {
    return (
      selectedYear === "" || item.date.getFullYear().toString() === selectedYear
    );
    // return item.date.getFullYear().toString() === selectedYear;
  });
  console.log(expenses);
  return (
    <div className="expenses">
      <ExpensesFilter setSelectedYear={setSelectedYear} />
      {selectedYear === "" || selectedYear === "clear"
        ? expenses.length > 0 &&
          expenses.map((item, index) => {
            return <ExpenseCard key={index} item={item} />;
          })
        : filteredExpenses.length > 0 &&
          filteredExpenses.map((item, index) => {
            return <ExpenseCard key={index} item={item} />;
          })}
      {}
    </div>
  );
}

export default ExpenseItem;
