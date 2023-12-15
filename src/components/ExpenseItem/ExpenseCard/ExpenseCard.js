import React, { useState } from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

export const ExpenseCard = ({ selectedYear, item }) => {
  console.log("CARD", item.date);
  const [title, setTitle] = useState(item.title);

  const handleClick = () => {
    setTitle("Updated!");
  };
  return (
    <div className="expense-item" key={item.id}>
      <ExpenseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{title === "" ? item.title : title}</h2>
        <div className="expense-item__price"> ${item.amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </div>
  );
};
