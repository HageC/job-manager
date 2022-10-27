import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import React from "react";

const ChartStats = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />

        <Bar dataKey="count" fill="#00F" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartStats;
