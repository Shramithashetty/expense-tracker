import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState(() => {
    try {
      const savedTransactions = localStorage.getItem("transactions");
      return savedTransactions ? JSON.parse(savedTransactions) : [];
    } catch (error) {
      console.error("Error parsing transactions from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };


  const amounts = transactions.map((t) => t.amount || 0);
  const total = amounts.reduce((acc, item) => acc + item, 0);

  return (
    <div className="App">
      <Header />
      <Balance total={total} /> {/* ✅ Pass total here */}
      <IncomeExpense transactions={transactions} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      <AddTransaction onAdd={addTransaction} />
    </div>
  );
}

export default App;