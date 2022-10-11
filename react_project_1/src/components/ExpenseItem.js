import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item ">
      <div>Date</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
      </div>
      <div className="expense-item__price">Rs 10,000</div>
    </div>
  );
}

export default ExpenseItem;
