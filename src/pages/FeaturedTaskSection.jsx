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
        <section className="bg-gray-100 py-16 px-4 md:px-10 rounded-2xl mt-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
                    Featured <span className="text-blue-600">Tasks</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredTasks.map((task) => (
                        <div
                            key={task._id}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-left"
                        >
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">{task.title}</h3>
                            <p className="text-gray-600 mb-2">
                                <strong className="text-gray-700">Category:</strong> {task.category}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong className="text-gray-700">Deadline:</strong>{" "}
                                {new Date(task.deadline).toLocaleDateString()}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong className="text-gray-700">Budget:</strong> ${task.budget}
                            </p>
                            <p className="text-gray-700">{task.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedTaskSection;
