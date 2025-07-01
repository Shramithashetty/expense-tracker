import React from "react";

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount > 0 ? "plus" : "minus"}
          >
            {transaction.text} <span>₹{transaction.amount.toFixed(2)}</span>
            <button className="delete-btn" onClick={() => onDelete(transaction.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
