import React from "react";
import Expenses from "./components/Expenses";

function App() {
  // “When principles that run against your deepest convictions begin to win the day, then battle is your calling, and peace has become sin; you must, at the price of dearest peace, lay your convictions bare before friend and enemy, with all the fire of your faith.”
  // ― Abraham Kuyper

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  //old style

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "786"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>786</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
