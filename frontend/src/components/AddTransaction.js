import React, { useState } from "react";

const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) {
      alert("Please enter a text and amount.");
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: parseFloat(amount),
    };

    onAdd(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Text</label>
          <input
            type="text"
            placeholder="Enter transaction description..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Amount (positive = income, negative = expense)</label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
