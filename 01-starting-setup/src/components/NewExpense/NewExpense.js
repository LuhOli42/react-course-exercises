import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [button, setButton] = React.useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setButton(false);
  };

  const startEdittingHandler = () => {
    setButton(true);
  };

  const stopEdittingHandler = () => {
    setButton(false);
  };

  if (button) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEdittingHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button onClick={startEdittingHandler}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;
