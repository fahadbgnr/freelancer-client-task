import React, { useEffect, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../provider/AuthContext';

const MyPostedTasks = () => {
  const [visibleBids, setVisibleBids] = useState(null);
  const [freelancerData, setFreelancerData] = useState([]);
  const [bidsMap, setBidsMap] = useState({});
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`https://freelance-task-server.vercel.app/freelancers?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setFreelancerData(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This task will be permanently deleted.",
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
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your task has been removed.", "success");
              setFreelancerData(prev => prev.filter(task => task._id !== id));
              setBidsMap(prev => {
                const updated = { ...prev };
                delete updated[id];
                return updated;
              });
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

    if (bidsMap[taskId]) {
      setVisibleBids(taskId);
    } else {
      fetch(`https://freelance-task-server.vercel.app/bids?taskId=${taskId}`)
        .then(res => res.json())
        .then(data => {
          setBidsMap(prev => ({ ...prev, [taskId]: data }));
          setVisibleBids(taskId);
        });
    }
  };

  return (
    <div className="p-4 md:p-6">
      <Helmet>
        <title>Dashboard || My Posted Tasks</title>
      </Helmet>
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-primary">My Posted Tasks</h1>
        <p className="text-sm text-gray-600">Manage and monitor the tasks you've posted.</p>
      </div>

      <div className="overflow-x-auto rounded-lg shadow border border-base-300 animate-fadeIn">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-base-200 text-gray-600 text-xs uppercase">
            <tr>
              <th className="px-4 py-3 text-left whitespace-nowrap">#</th>
              <th className="px-4 py-3 text-left whitespace-nowrap">Title</th>
              <th className="px-4 py-3 text-left whitespace-nowrap">Name</th>
              <th className="px-4 py-3 text-left whitespace-nowrap">Category</th>
              <th className="px-4 py-3 text-left whitespace-nowrap">Budget</th>
              <th className="px-4 py-3 text-left whitespace-nowrap">Email</th>
              <th className="px-4 py-3 text-center whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-base-100 divide-y divide-base-300 text-gray-700">
            {freelancerData.length > 0 ? (
              freelancerData.map((task, index) => {
                const bids = bidsMap[task._id] || [];
                return (
                  <React.Fragment key={task._id}>
                    <tr className="hover:bg-base-200 transition duration-150 ease-in-out">
                      <td className="px-4 py-2 whitespace-nowrap">{index + 1}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{task.title}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{task.name}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{task.category}</td>
                      <td className="px-4 py-2 whitespace-nowrap">${task.budget}</td>
                      <td className="px-4 py-2 break-all whitespace-nowrap max-w-[150px] overflow-auto">{task.email}</td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <div className="flex flex-col sm:flex-row gap-2 justify-center">
                          <Link to={`/updateTaskPage/${task._id}`} className="flex-1">
                            <button className="btn btn-sm btn-primary w-full">Update</button>
                          </Link>
                          <button onClick={() => handleDelete(task._id)} className="btn btn-sm btn-error flex-1">
                            Delete
                          </button>
                          <button onClick={() => handleViewBids(task._id)} className="btn btn-sm btn-accent flex-1">
                            {visibleBids === task._id ? 'Hide Bids' : `View Bids (${bids.length})`}
                          </button>
                        </div>
                      </td>
                    </tr>

                    {visibleBids === task._id && (
                      <tr>
                        <td colSpan="7" className="bg-base-100 px-4 py-4 animate-slideDown">
                          {bids.length > 0 ? (
                            <div className="space-y-2">
                              <h3 className="text-lg font-semibold text-primary mb-2">Bids:</h3>
                              <ul className="list-disc pl-5 space-y-1">
                                {bids.map((bid) => (
                                  <li key={bid._id}>
                                    <span className="font-medium">{bid.bidderName}</span> — <span className="text-blue-600">${bid.amount}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <p className="text-sm text-gray-500">No bids for this task yet.</p>
                          )}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="p-6 text-center text-gray-500">
                  You haven't posted any tasks yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedTasks;