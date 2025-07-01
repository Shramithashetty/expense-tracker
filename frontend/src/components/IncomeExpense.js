import React from "react";

const IncomeExpense = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount || 0);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => acc + item, 0) || 0; 

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => acc + item, 0) || 0; 

  console.log("Income:", income, "Expense:", expense);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">₹{Number(income).toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">₹{Number(Math.abs(expense)).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
