import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import SignupModal from "./components/SignupModal";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const [currentPage, setCurrentPage] = useState("home");

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <Menu changePage={changePage} openLoginModal={openLoginModal} /> {}
      
      {}
      {currentPage === "home" && (
        <>
          <AddExpenseForm onAddExpense={addExpense} />
          <ExpenseList expenses={expenses} />
        </>
      )}
      
      {currentPage === "about" && (
        <div className="about-box">
          <h2>About Us</h2>
          <p>Here is some information about our website and its features.</p>
        </div>
      )}
      
      <SignupModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </div>
  );
}

export default App;
