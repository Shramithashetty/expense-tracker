import React from "react";

const Transaction = ({ transaction,onDelete }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span>
      <button onClick={() => onDelete(transaction.id)}>X</button>
    </li>
  );
};

export default Transaction;
