import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {  useParams } from 'react-router';

const TaskDetails = () => {
     const { id } = useParams();
  const [browseTask, setBrowseTask] = useState([]);

  useEffect(() => {
    // Replace this URL with your actual backend endpoint
    fetch(`https://freelance-task-server.vercel.app/freelancerData/${id}`)
      .then(res => res.json())
      .then(data => setBrowseTask(data))
  }, [id]);

  if (!browseTask) {
    return <div className="text-center text-lg mt-20">Loading task details...</div>;
  }

    return (
        <div>
            <Helmet>
                <title>TaskDetails</title>
            </Helmet>
            <div className="container mx-auto p-4">
                <div className="card bg-base-100 shadow-xl p-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center">{browseTask.title}</h2>
                    <div className="space-y-2 text-base">
                        <p><strong>Category:</strong> {browseTask.category}</p>
                        <p><strong>Description:</strong> {browseTask.description}</p>
                        <p><strong>Deadline:</strong> {browseTask.deadline}</p>
                        <p><strong>Budget:</strong>{browseTask.budget}</p>
                        <p><strong>Client Name:</strong> {browseTask.name}</p>
                        <p><strong>Email:</strong> {browseTask.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;