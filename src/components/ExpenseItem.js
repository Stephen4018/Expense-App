import React, { useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ title, amount, date }) => {
  const [head, setHead] = useState(title);

  const changeHead = () => {
    setHead(!head);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{head}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={changeHead}>click</button>
    </Card>
  );
};

export default ExpenseItem;
