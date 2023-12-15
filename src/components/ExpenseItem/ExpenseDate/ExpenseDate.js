import "./ExpenseDate.css";
import React from "react";

function ExpenseDate({ date }) {
  const dateObject = new Date(date);
  console.log("Expense Date", dateObject);
  // const month = date.toLocaleString("en-UK", { month: "long" });
  // const day = date.toLocaleString("en-UK", { day: "2-digit" });
  const year = dateObject.getFullYear().toString();

  return (
    <div className="expense-date">
      {/* <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div> */}
      {/* <div className="expense-date__year">{date.toLocaleString()}</div> */}
    </div>
  );
}

export default ExpenseDate;
