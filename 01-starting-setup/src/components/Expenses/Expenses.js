import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
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
  );
};

export default Expenses;
