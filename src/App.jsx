import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseChart from "./components/ExpenseChart";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      amount: 234,
      category: "Education",
      date: "2025-01-10",
    },
    {
      id: 2,
      amount: 150,
      category: "Food",
      date: "2025-01-12",
    },
    {
      id: 3,
      amount: 80,
      category: "Transport",
      date: "2025-01-13",
    },
  ]);

  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Date.now(), // Simple ID generation
      amount: parseFloat(expense.amount),
    };
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div>
      <Navbar />
      <div className="container max-w-3xl flex flex-col gap-10 my-20 mx-auto">
        <div className="mb-10">
          <h1 className="text-5xl text-center font-extrabold ">
            Expense Tracker
          </h1>
          <p className="text-lg opacity-50 font-semibold  mt-1 text-center">
            Track your expenses easily
          </p>
        </div>
        <div className="flex gap-2 justify-between items-stretch">
          <Hero totalExpenses={totalExpenses} />
          <div className="flex-1 h-auto">
            <div className="h-full">
              <ExpenseChart expenses={expenses} />
            </div>
          </div>
        </div>
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      </div>
    </div>
  );
}

export default App;
