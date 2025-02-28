import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(...registerables);

const Charts = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();  // Destroy the previous chart instance
            }
        };
    }, []);

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Dataset 1',
                data: data,
                borderColor: 'blue',
                fill: false,
            },
        ],
    };

    return <Line ref={chartRef} data={chartData} />;
};

export default Charts;
