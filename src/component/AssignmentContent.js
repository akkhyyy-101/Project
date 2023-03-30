import React from 'react';
import './AssignmentContent.css';

const AssignmentContent = ({ title, description, dueDate }) => {
    return (
        <div className="assignment-content">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Due date: {dueDate}</p>
        </div>
    );
};

export default AssignmentContent;
