import React from 'react';
import './TopicContent.css';

const TopicContent = ({ title, description }) => {
    return (
        <div className="topic-content">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default TopicContent;
