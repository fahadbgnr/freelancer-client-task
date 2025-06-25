import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import {
  FaTag,
  FaAlignLeft,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaUserCircle,
  FaEnvelopeOpenText
} from 'react-icons/fa';

const TaskDetails = () => {
  const { id } = useParams();
  const [browseTask, setBrowseTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://freelance-task-server.vercel.app/freelancerData/${id}`)
      .then(res => res.json())
      .then(data => {
        setBrowseTask(data);
        setLoading(false);
      });
  }, [id]);

  if (loading || !browseTask) {
    return <div className="text-center text-xl font-semibold mt-20 text-gray-700">Loading task details...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-10">
      <Helmet>
        <title>TaskHive || Task Details</title>
      </Helmet>

      {/* Top margin added here */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-12">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          {browseTask.title}
        </h2>

        <div className="space-y-5 text-gray-700 text-base">
          <p className="flex items-start gap-3">
            <FaTag className="text-blue-500 text-xl mt-1" />
            <span><strong>Category:</strong> {browseTask.category}</span>
          </p>

          <p className="flex items-start gap-3">
            <FaAlignLeft className="text-green-500 text-xl mt-1" />
            <span><strong>Description:</strong> {browseTask.description}</span>
          </p>

          <p className="flex items-start gap-3">
            <FaCalendarAlt className="text-orange-500 text-xl mt-1" />
            <span><strong>Deadline:</strong> {new Date(browseTask.deadline).toLocaleDateString()}</span>
          </p>

          <p className="flex items-start gap-3">
            <FaMoneyBillWave className="text-green-600 text-xl mt-1" />
            <span><strong>Budget:</strong> ${browseTask.budget}</span>
          </p>

          <p className="flex items-start gap-3">
            <FaUserCircle className="text-purple-500 text-xl mt-1" />
            <span><strong>Client Name:</strong> {browseTask.name}</span>
          </p>

          <p className="flex items-start gap-3">
            <FaEnvelopeOpenText className="text-red-500 text-xl mt-1" />
            <span><strong>Email:</strong> {browseTask.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
