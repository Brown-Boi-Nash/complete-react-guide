import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const addYearFilter = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.data.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })


  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeYearFilter={addYearFilter}
      />
      <ExpensesList expenses = {filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
