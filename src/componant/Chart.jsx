import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Chart() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Sales ($)',
            data: [3000, 4000, 2000, 5000, 7000, 6000],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
    
      // Options configuration
      const options = {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          tooltip: { enabled: true },
        },
        scales: {
          x: { beginAtZero: true },
          y: { beginAtZero: true },
        },
      };
    
      return <Bar data={data} options={options} />;
}

export default Chart
