import React, { use, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthContext';
import { Link, useNavigate } from 'react-router';

const MyPostedTasks = () => {
    const { user } = use(AuthContext);
    const [freelancerData, setFreelancerData] = useState([]);
    const navigate = useNavigate();
    console.log(freelancerData)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:3000/freelancerData?email=${user?.email}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log("Fetched tasks:", data);
                    setFreelancerData(data);

                })
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
                fetch(`http://localhost:3000/freelancerData/${id}`, {
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

    const handleUpdate = (id) => {
        navigate(`/update-user/${id}`);
    };

    const handleViewBids = (id) => {
        navigate(`/user/${id}/bids`);
    };
    return (
        <div>
            <div className="p-6">
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
                                <tr key={freelancer._id}>
                                    <td>{freelancer.title}</td>
                                    <td>{freelancer.name}</td>
                                    <td>{freelancer.category}</td>
                                    <td>{freelancer.budget}</td>
                                    <td>{freelancer.email}</td>
                                    <td className="space-x-2">
                                        <Link to={`/updateTaskPage/${freelancer._id}`}>
                                            <button
                                                onClick={() => handleUpdate(freelancer._id)}
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
                            ))}
                            {freelancerData.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="text-center text-gray-500">
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