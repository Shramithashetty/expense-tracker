import React from "react";

const Balance = ({ total = 0 }) => {  
  console.log("Total balance received in Balance.js:", total); 

  return (
    <div className="balance-container">
      <h3>Your Balance</h3>
      <h2>₹{Number(total).toFixed(2)}</h2> 
    </div>
  );
};

export default Balance;
