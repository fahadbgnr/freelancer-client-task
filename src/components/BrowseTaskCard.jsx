import React from 'react';
import { Link } from 'react-router'; 
import { FaTag, FaMoneyBill, FaCalendarAlt } from "react-icons/fa";

const BrowseTaskCard = ({ browseTask }) => {
  const { title, category, budget, deadline, _id } = browseTask;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-1 flex items-center gap-2">
        <FaTag className="text-blue-600" /> Category: {category}
      </p>
      <p className="text-gray-600 mb-1 flex items-center gap-2">
        <FaMoneyBill className="text-green-600" /> Budget: ${budget}
      </p>
      <p className="text-gray-600 mb-4 flex items-center gap-2">
        <FaCalendarAlt className="text-orange-500" /> Deadline: {new Date(deadline).toLocaleDateString()}
      </p>
      <Link to={`/taskDetails/${_id}`}>
        <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700">See Details</button>
      </Link>
    </div>
  );
};

export default BrowseTaskCard;
