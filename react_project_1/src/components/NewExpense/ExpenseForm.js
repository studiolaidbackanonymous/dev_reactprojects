import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //alternative approach

  // const [userInput, setEnteredInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  //handlre functions
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setEnteredInput({ ...userInput, enteredTitle: event.target.value });
    // setEnteredInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChnageHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setEnteredInput({ ...userInput, enteredAmount: event.target.value });
    // setEnteredInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setEnteredInput({ ...userInput, enteredDate: event.target.value });
    // setEnteredInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      anount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChnageHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
