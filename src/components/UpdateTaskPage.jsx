import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const UpdateTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  

  const [task, setTask] = useState({
    title: '',
    category: '',
    deadline: '',
    budget: '',
    description: ''
  });

  useEffect(() => {
    fetch(`https://freelance-task-server.vercel.app/freelancerData/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://freelance-task-server.vercel.app/freelancerData/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire('Success', 'Task updated successfully', 'success');
          navigate('/myPostedTasks');
        }
      });

  };
  return (
    <div>
      <Helmet>
                <title>TaskHive||UpdateTaskPage</title>
            </Helmet>
      <div className="max-w-xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Update Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Task Title"
            className="input input-bordered w-full"
            required
          />

          <select 
           value={task.category}
            onChange={handleChange}
            placeholder="Category"
          name="category" 
          required
            className="select select-bordered w-full">
            <option value="">Select Category</option>
            <option>Web Development</option>
            <option>Graphic Design</option>
            <option>Writing</option>
            <option>Marketing</option>
            <option>Data Entries</option>
            <option>React-based Task Marketplace Creator</option>
            <option>UI Developer</option>
            <option>Full-Stack Marketplace Developer</option>
            <option>Frontend Developer</option>
          </select>


          <input
            type="date"
            name="deadline"
            value={task.deadline}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="number"
            name="budget"
            value={task.budget}
            onChange={handleChange}
            placeholder="Budget"
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
          <input
            type="text"
            value={user?.displayName}
            readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
          <input
            type="email"
            value={user?.email}
            readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
        
          <button type="submit" className="btn btn-primary w-full">
            Update Task
          </button>
          
         
        </form>
      </div>
    </div>
  );
};

export default UpdateTaskPage;