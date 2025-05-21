import React, { useEffect, useState } from 'react';


const FeaturedTaskSection = () => {
    const [featuredTasks, setFeaturedTasks] = useState([]);

    useEffect(() => {
        fetch("https://freelance-task-server.vercel.app/featuredTasks")
            .then((res) => res.json())
            .then((data) => setFeaturedTasks(data))
            .catch((error) => console.error("Error loading featured tasks:", error));
    }, []);
    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Featured Tasks</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredTasks.map((task) => (
                        <div
                            key={task._id}
                            className="bg-gray-100  rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
                            <p className="text-gray-600 mb-2">
                                <strong>Category:</strong> {task.category}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Deadline:</strong>{" "}
                                {new Date(task.deadline).toLocaleDateString()}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Budget:</strong> ${task.budget}
                            </p>
                            <p className="text-gray-700">{task.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedTaskSection;