import React, { useEffect, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthContext';
import { Link, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';

const MyPostedTasks = () => {
    
    const [bidsCount, setBidsCount] = useState(0);
    const [visibleBids, setVisibleBids] = useState(null);
    const [bidsData, setBidsData] = useState([]);

    const { user } = useContext(AuthContext); 
    const [freelancerData, setFreelancerData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://freelance-task-server.vercel.app/freelancers?email=${user?.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setFreelancerData(data);
                });
        }
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://freelance-task-server.vercel.app/freelancer/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your task has been deleted.", "success");
                            setFreelancerData(freelancerData.filter((freelancer) => freelancer._id !== id));
                        }
                    });
            }
        });
    };



   
    const handleViewBids = (taskId) => {
        if (visibleBids === taskId) {
            setVisibleBids(null); 
            return;
        }

        fetch(`https://freelance-task-server.vercel.app/bids?taskId=${taskId}`)
            .then(res => res.json())
            .then(data => {
                setBidsData(data);
                setVisibleBids(taskId);
                setBidsCount(prev => prev + 1); 
            });
    };

    return (
        <div>
            <Helmet>
                <title>MyPostedTask</title>
            </Helmet>
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-green-700">
                    You bid for {bidsCount} {bidsCount === 1 ? "opportunity" : "opportunities"}.
                </h2>

                <h2 className="text-2xl font-bold mb-4">My Posted Tasks</h2>

                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Budget</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {freelancerData.map((freelancer) => (
                                <React.Fragment key={freelancer._id}>
                                    <tr>
                                        <td>{freelancer.title}</td>
                                        <td>{freelancer.name}</td>
                                        <td>{freelancer.category}</td>
                                        <td>{freelancer.budget}</td>
                                        <td>{freelancer.email}</td>
                                        <td className="space-x-2">
                                            <Link to={`/updateTaskPage/${freelancer._id}`}>
                                                <button
                                                    className="btn btn-sm btn-primary"
                                                >
                                                    Update
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(freelancer._id)}
                                                className="btn btn-sm btn-error"
                                            >
                                                Delete
                                            </button>
                                    
                                            <button
                                                onClick={() => handleViewBids(freelancer._id)}
                                                className="btn btn-sm btn-accent"
                                            >
                                                Bids
                                            </button>
                                        </td>
                                    </tr>

                                   
                                    {visibleBids === freelancer._id && bidsData.length > 0 && (
                                        <tr>
                                            <td colSpan="6">
                                                <div className="p-4 bg-gray-100 rounded shadow">
                                                    <h3 className="font-semibold text-lg mb-2">Bids:</h3>
                                                    <ul className="list-disc pl-6">
                                                        {bidsData.map((bid) => (
                                                            <li key={bid._id}>
                                                                <strong>{bid.bidderName}</strong> — ${bid.amount}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    )}

    
                                    {visibleBids === freelancer._id && bidsData.length === 0 && (
                                        <tr>
                                            <td colSpan="6" className="text-center text-gray-500">
                                                No bids found for this task.
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}

                            {freelancerData.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center text-gray-500">
                                        No tasks posted yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyPostedTasks;
