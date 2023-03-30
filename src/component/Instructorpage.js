import React from 'react';
import { Link } from 'react-router-dom';

const InstructorPage = () => {
    return (
        <div className="instructor-page">
            <h1>Instructor Page</h1>
            <p>Here you can display information about the course instructor(s) and their background.</p>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/modules">Modules</Link></li>
                    <li><Link to="/instructors">Instructors</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default InstructorPage;
