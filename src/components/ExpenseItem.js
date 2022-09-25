import React from "react";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>september 24th 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$34.97</div>
      </div>
    </div>
  );
};

export default ExpenseItem;