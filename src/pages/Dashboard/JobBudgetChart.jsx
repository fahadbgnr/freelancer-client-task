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

import { Helmet } from 'react-helmet';
import Loder from '../Loder';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const JobBudgetChart = () => {
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
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Jobs Budget Chart', font: { size: 20 } },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1000 },
      },
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 45,
          minRotation: 20,
        },
      },
    },
  };
    return (
         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Helmet>
        <title>Dashboard || JobBudgetChart</title>
      </Helmet>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4" data-aos="fade-down">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mx-auto mt-3">Dashboard Overview</h1>
        {/* <button
          onClick={() => navigate('/')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow-md transition"
        >
          Go to Home
        </button> */}
      </div>

      <div data-aos="fade-up" className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full overflow-x-auto">
        <div className="min-w-[350px] h-[300px] sm:h-[400px] md:h-[500px]">
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
    );
};

export default JobBudgetChart;