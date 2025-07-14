/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

export default function ExpenseChart({ expenses }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  // Process expenses data for the chart
  const chartData = useMemo(() => {
    const categoryTotals = expenses.reduce((acc, expense) => {
      const category = expense.category;
      acc[category] = (acc[category] || 0) + expense.amount;
      return acc;
    }, {});

    return Object.entries(categoryTotals).map(([name, amount]) => ({
      name,
      amount: parseFloat(amount.toFixed(2)),
    }));
  }, [expenses]);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7c7c",
  ];

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  if (chartData.length === 0) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-gray-500">No data to display</p>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          data={chartData}
          dataKey="amount"
          outerRadius={80}
          onMouseEnter={onPieEnter}
          style={{ cursor: "pointer", outline: "none" }}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;

  const data = payload[0].payload;

  return (
    <div className="bg-slate-100 text-black p-2 rounded shadow text-sm">
      <p className="font-semibold">{data.name}</p>
      <p>{`Amount: $${data.amount}`}</p>
    </div>
  );
};

ExpenseChart.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};
