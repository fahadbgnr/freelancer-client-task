import React, { use, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthContext';
import { useLoaderData, useNavigate } from 'react-router';

const MyPostedTasks = () => {
    const { user } = use(AuthContext);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    console.log(users)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:3000/users?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setUsers(data));
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
                fetch(`http://localhost:3000/users/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your task has been deleted.", "success");
                            setUsers(users.filter((user) => user._id !== id));
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
                                <th>Email</th>
                                <th>Name</th>
                                <th>CreationTime</th>
                                <th>LastSignInTime</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
                                    <td>{user.creationTime}</td>
                                    <td>{user.lastSignInTime}</td>
                                    <td className="space-x-2">
                                        <button
                                            onClick={() => handleUpdate(user._id)}
                                            className="btn btn-sm btn-primary"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="btn btn-sm btn-error"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => handleViewBids(user._id)}
                                            className="btn btn-sm btn-accent"
                                        >
                                            Bids
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {users.length === 0 && (
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