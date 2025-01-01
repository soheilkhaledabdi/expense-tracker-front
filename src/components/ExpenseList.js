import React from "react";

function ExpenseList({ expenses }) {
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <p className="note-user-not-login">Note: If you are not logged in, data will not be saved and will be removed upon refresh.</p>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <>
          <ul>
            {expenses.map((expense) => (
              <li key={expense.id}>
                <span>{expense.name}</span>
                <span>${expense.amount}</span>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default ExpenseList;
