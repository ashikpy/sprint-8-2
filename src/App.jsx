import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseChart from "./components/ExpenseChart";
import ExpenseList from "./components/ExpenseList";

function App() {
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
          <Hero />
          <div className="flex-1 h-auto">
            <div className="h-full">
              <ExpenseChart />
            </div>
          </div>
        </div>
        <ExpenseForm />
        <ExpenseList />
        {/*
         */}
      </div>
    </div>
  );
}

export default App;
