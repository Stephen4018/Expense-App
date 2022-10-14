import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return (
    <div>
      {props.expense.length === 0 ? (
        <h2 className="no-expense-text">Found No Expenses</h2>
      ) : (
        props.expense.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title[0].toUpperCase() + item.title.slice(1)}
              amount={"$ " + item.amount}
              date={item.date}
            />
          );
        })
      )}
    </div>
  );
};

export default ExpenseList;

// props.expense is a returned array after the filter function has been completed
