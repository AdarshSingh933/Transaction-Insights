import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartComponent = ({ data }) => {
  const formattedData = Object.keys(data).map((key) => ({
    range: key,
    count: data[key]
  }));

  const formatXAxis = (tickItem) => {
    const parts = tickItem.split('-');
    if (parts.length === 2) {
      return `${parts[0]}-${parts[1]}`;
    }
    return tickItem;
  };

  return (
    <BarChart width={600} height={300} data={formattedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="range" tickFormatter={formatXAxis} />
      <YAxis tickFormatter={(tick) => tick.toFixed(0)} domain={[0, 'auto']} allowDecimals={false} />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
