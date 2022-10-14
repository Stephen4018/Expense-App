import React, { useState } from "react";
import Card from "./Card";
import ChartOutput from "./ChartExpense/ChartOutput";
import ExpenseFilter from "./Expensefilter";
import ExpenseList from "./ExpenseList";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredExpenses);
  return (
    <Card className="Expenses">
      <ChartOutput expenses={filteredExpenses} />
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList expense={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
