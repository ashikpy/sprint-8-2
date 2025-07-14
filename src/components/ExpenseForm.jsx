import { useState } from "react";
import PropTypes from "prop-types";

export default function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.amount || !formData.category || !formData.date) {
      alert("Please fill in all fields");
      return;
    }

    if (parseFloat(formData.amount) <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    // If the date hasn't been changed by the user, set it to today's date
    const finalFormData = {
      ...formData,
      date: formData.date || new Date().toISOString().split("T")[0],
    };

    // Add expense
    onAddExpense(finalFormData);

    // Reset form
    setFormData({
      amount: "",
      category: "",
      date: new Date().toISOString().split("T")[0], // Set default date to today
    });
  };

  return (
    <div className=" p-4 rounded-md bg-gray-100">
      <h1 className="text-xl font-semibold">Add Expense</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-2 mt-4">
          <div className="flex text-xs flex-col gap-2 w-full">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              name="amount"
              type="number"
              step="0.01"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className="border border-black/10 p-2 text-sm rounded-md w-full"
            />
          </div>
          <div className="flex text-xs flex-col gap-2 w-full">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border border-black/10 p-2 text-sm rounded-md w-full"
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Utilities">Utilities</option>
              <option value="Shopping">Shopping</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex text-xs flex-col gap-2 w-full">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date || new Date().toISOString().split("T")[0]}
            onChange={handleChange}
            className="border border-black/10 p-2 text-sm rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white p-2 rounded-md  text-sm font-semibold"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

ExpenseForm.propTypes = {
  onAddExpense: PropTypes.func.isRequired,
};
