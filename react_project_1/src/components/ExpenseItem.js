import "./ExpenseItem.css";

function ExpenseItem() {
  //dynamic variables
  const expenseDate = "2022, 10, 11";
  const expenseTitle = "Car Insurance";
  const expenseAmount = 10000;

  return (
    <div className="expense-item ">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">{expenseAmount}</div>
    </div>
  );
}

export default ExpenseItem;
