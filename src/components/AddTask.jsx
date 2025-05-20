import React from 'react';
import Swal from 'sweetalert2';

const AddTask = () => {
   

    const handleAddTask = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const addTaskData = Object.fromEntries(formData.entries());

        fetch('http://localhost:3000/freelancerData', {
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(addTaskData)

        })
        .then((res)=> res.json())
        .then((data)=>{
            if(data.insertedId)
                Swal.fire({
                    title: "Freelance Task added successfully.",
                    icon: "success",
                    draggable: true
                });
        })
         

    };
    return (
        <div>
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
                        <option>App Development</option>
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
                        className="input input-bordered w-full"  />

                    <input 
                    name="budget" 
                    type="number" 
                    placeholder="Budget" 
                    required
                        className="input input-bordered w-full"  />

                    <input 
                    name='email'
                    type="email"   
                    className="input input-bordered w-full bg-gray-100" />

                    <input 
                    name='name'
                    type="text"  
                    className="input input-bordered w-full bg-gray-100" />

                    <button 
                    type="submit" 
                    className="btn btn-primary w-full">Add Task</button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;