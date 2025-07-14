import React from "react";

export default function ExpenseForm() {
  return (
    <div className=" p-4 rounded-md bg-gray-100">
      <h1 className="text-xl font-semibold">Add Expense</h1>
      <form className="flex flex-col gap-4">
        <div className="flex gap-2 mt-4">
          <div className="flex text-xs flex-col gap-2 w-full">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              placeholder="Amount"
              className="border border-black/10 p-2 text-sm rounded-md w-full"
            />
          </div>
          <div className="flex text-xs flex-col gap-2 w-full">
            <label htmlFor="category">Category</label>
            <input
              id="category"
              type="text"
              placeholder="Select Category"
              className="border border-black/10 p-2 text-sm rounded-md w-full"
            />
          </div>
        </div>

        <div className="flex text-xs flex-col gap-2 w-full">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            placeholder="Description"
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
