/* eslint-disable react/prop-types */
import { useState } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

export default function ExpenseChart() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const data = [
    { name: "Food", students: 400 },
    { name: "Transport", students: 700 },
    { name: "Utilities", students: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          data={data}
          dataKey="students"
          outerRadius={80}
          onMouseEnter={onPieEnter}
          style={{ cursor: "pointer", outline: "none" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-slate-100 text-black p-2 rounded shadow text-sm">
      <p className="font-semibold">{label}</p>
      <p>{`${payload[0].name}: ${payload[0].value}`}</p>
    </div>
  );
};
