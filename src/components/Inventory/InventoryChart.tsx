import React, { useEffect, useRef, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import type { ChartJSOrUndefined } from 'react-chartjs-2/dist/types';
import { useAppContext } from '../../contexts/AppContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const InventoryChart: React.FC = () => {
  const { inventory } = useAppContext();
  const chartRef = useRef<ChartJSOrUndefined<"bar", number[], unknown>>(null);
  const [chartData, setChartData] = useState<ChartData<'bar'> | null>(null);

  useEffect(() => {
    if (inventory.length > 0) {
      setChartData({
        labels: inventory.map((item) => item.name),
        datasets: [
          {
            label: 'Inventory Levels',
            data: inventory.map((item) => item.quantity),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
    }
  }, [inventory]);

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Inventory Levels</h2>
      <div style={{ height: '400px' }}>
        {chartData && (
          <Bar 
            data={chartData} 
            options={options} 
            ref={chartRef}
          />
        )}
      </div>
    </div>
  );
};

export default InventoryChart;