/* eslint-disable react/prop-types */
export default function Hero({ totalExpenses }) {
  return (
    <div>
      <div className="bg-gray-100 p-10  rounded-lg">
        <p className=" mb-2 font-semibold opacity-70"> Total Expenses</p>
        <h2 className="text-7xl font-bold">${totalExpenses.toFixed(2)}</h2>
      </div>
    </div>
  );
}
