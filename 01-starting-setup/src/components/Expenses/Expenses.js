import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = React.useState("2020");

  const saveExpansesFilterHandler = (enteredExpansesFilter) => {
    setFilteredYear(enteredExpansesFilter);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveExpansesFilter={saveExpansesFilterHandler}
        />
        <ExpenseItem
          title={props.itens[0].title}
          amount={props.itens[0].amount}
          date={props.itens[0].date}
        />
        <ExpenseItem
          title={props.itens[1].title}
          amount={props.itens[1].amount}
          date={props.itens[1].date}
        />{" "}
        <ExpenseItem
          title={props.itens[2].title}
          amount={props.itens[2].amount}
          date={props.itens[2].date}
        />{" "}
        <ExpenseItem
          title={props.itens[2].title}
          amount={props.itens[2].amount}
          date={props.itens[2].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
