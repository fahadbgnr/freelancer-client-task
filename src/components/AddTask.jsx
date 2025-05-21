import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthContext';

const AddTask = () => {
   const { user } = use(AuthContext); 

    const handleAddTask = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const addTaskData = Object.fromEntries(formData.entries());

        
        addTaskData.email = user?.email || '';
        addTaskData.name = user?.displayName || '';

        if (!addTaskData.email || !addTaskData.name) {
            return Swal.fire({
                title: "User information missing",
                text: "Please login to add a task",
                icon: "error"
            });
        }

        fetch('http://localhost:3000/freelancerData', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addTaskData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Freelance Task added successfully.",
                        icon: "success",
                        confirmButtonColor: "#3085d6"
                    });
                    form.reset(); 
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: "Something went wrong!",
                    text: error.message,
                    icon: "error"
                });
            });
    };
    return (
         <div className="max-w-xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
            <form onSubmit={handleAddTask} className="space-y-4">

                <input
                    name="title"
                    type="text"
                    placeholder="Task Title"
                    required
                    className="input input-bordered w-full" />

                <select name="category" required
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

                <textarea
                    name="description"
                    placeholder="Task Description"
                    required
                    className="textarea textarea-bordered w-full"></textarea>

                <input
                    name="deadline"
                    type="date"
                    required
                    className="input input-bordered w-full" />

                <input
                    name="budget"
                    type="number"
                    placeholder="Budget"
                    required
                    className="input input-bordered w-full" />

              
                <input
                    name='email'
                    type="email"
                    value={user?.email || ''}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 text-gray-500" />

                <input
                    name='name'
                    type="text"
                    value={user?.displayName || ''}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 text-gray-500" />

                <button
                    type="submit"
                    className="btn btn-primary w-full">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;