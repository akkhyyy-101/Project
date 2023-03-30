import React, { useState } from 'react';
import './Homepage.css'; // import the CSS file

const Homepage = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    }

    return (
        <div className='back'>
            <div className="dropdown-container">
                <button className="dropdown-btn" onClick={() => setOpenDropdown(!openDropdown)}>Homepage Dropdown</button>
                {openDropdown && (
                    <div className="dropdown-menu">
                        <div className="dropdown-option" onClick={() => handleOptionClick('Data Scientist Program')}>Data Scientist Program</div>
                        <div className="dropdown-option" onClick={() => handleOptionClick('Data Analytics')}>Data Analytics</div>
                        <div className="dropdown-option" onClick={() => handleOptionClick('Machine Learning')}>Machine Learning'</div>
                    </div>
                )}
            </div>
            <div className="blue-bar">Select Program: {selectedOption || 'Data Scientist Program'}</div>
            <div className="static-content">
                <h1 style={{ textAlign: "center" }}>Welcome to the Data Scientist Program</h1><br></br><br />
                <p>This program is designed to equip you with the skills and knowledge you need to become a successful data scientist.This program is designed to equip you with the skills and knowledge you need to become a successful data scientist.This program is designed to equip you with the skills and knowledge you need to become a successful data scientist.This program is designed to equip you with the skills and knowledge you need to become a successful data scientist.</p>
                <p>Throughout the program, you will learn about:</p>
                <ul>
                    <li>Data analysis and visualization</li>
                    <li>Machine learning</li>
                    <li>Deep learning</li>
                    <li>Natural language processing</li>
                    <li>Big data technologies</li>
                    <li>Machine learning</li>
                    <li>Deep learning</li>
                    <li>Deep learning</li>
                    <li>Natural language processing</li>
                </ul>
                <p>By the end of the program, you will have a solid foundation in data science and be prepared to pursue a career in this exciting field.</p>
            </div>
        </div>
    );
}

export default Homepage;
