import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = React.useState("2020");

  const saveExpansesFilterHandler = (enteredExpansesFilter) => {
    setFilteredYear(enteredExpansesFilter);
  };
  const filteredExpanses = props.itens.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveExpansesFilter={saveExpansesFilterHandler}
        />
        <ExpensesChart expenses={filteredExpanses} />
        <ExpensesList items={filteredExpanses} />
      </Card>
    </li>
  );
};

export default Expenses;
