import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
function ExpenseItem({ expenses }) {
  return (
    <div className="expenses">
      {expenses.length > 0 &&
        expenses.map((item, index) => {
          return (
            <div className="expense-item" key={item.id}>
              <ExpenseDate date={item.date} />
              <div className="expense-item__description">
                <h2>{item.title}</h2>
                <div className="expense-item__price"> ${item.amount}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ExpenseItem;
