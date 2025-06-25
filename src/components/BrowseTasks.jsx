import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router'; 
import BrowseTaskCard from './BrowseTaskCard';
import { Helmet } from 'react-helmet';

const BrowseTasks = () => {
  const freelancersData = useLoaderData();
  const [displayedTasks, setDisplayedTasks] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');

  // Set initial data
  useEffect(() => {
    setDisplayedTasks(freelancersData);
  }, [freelancersData]);

  // Filter & Sort Logic
  const filteredTasks = freelancersData
    .filter(task => filterCategory === 'All' || task.category === filterCategory)
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.budget - b.budget;
      else return b.budget - a.budget;
    });

  // Get unique categories for dropdown
  const categories = ['All', ...new Set(freelancersData.map(task => task.category))];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Helmet>
        <title>TaskHive || Browse Tasks</title>
      </Helmet>

      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Browse Tasks</h1>

      {/* Filter & Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        {/* Filter */}
        <div>
          <label className="mr-2 font-medium text-gray-700">Filter by Category:</label>
          <select
            className="border rounded px-3 py-1"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="mr-2 font-medium text-gray-700">Sort by Budget:</label>
          <select
            className="border rounded px-3 py-1"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      {/* Task Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(browseTask => (
            <BrowseTaskCard key={browseTask._id} browseTask={browseTask} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseTasks;
