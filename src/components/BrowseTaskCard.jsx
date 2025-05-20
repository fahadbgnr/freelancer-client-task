import React from 'react';
import { Link } from 'react-router';

const BrowseTaskCard = ({ browseTask }) => {
    const { title, category, budget, deadline, _id } = browseTask;
    return (
        <div>
          <div className="card bg-base-100 shadow-xl p-4 border">
                        <div className="card bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">Title: {title}</h2>
                                <p>Category: {category}</p>
                                <p>Budget: {budget}</p>
                                <p>Deadline: {deadline}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/taskDetails/${_id}`}>
                                    <button className="btn">See Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default BrowseTaskCard;