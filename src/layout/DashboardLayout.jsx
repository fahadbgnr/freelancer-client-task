import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Loder from '../pages/Loder';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardLayout = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    fetch('https://freelance-task-server.vercel.app/freelancerData')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);


  if (loading) return <Loder />;
  if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

  const chartData = {
    labels: jobs.map(job => job.title),
    datasets: [
      {
        label: 'Budget',
        data: jobs.map(job => Number(job.budget) || 0),
        backgroundColor: 'rgba(99, 102, 241, 0.7)',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Jobs Budget Chart', font: { size: 20 } },
    },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 1000 } },
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8" data-aos="fade-down">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
        <button
          onClick={() => navigate('/')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow-md transition"
        >
          Go to Home
        </button>
      </div>

      <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-lg">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default DashboardLayout;
