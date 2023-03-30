// ModulePage.js

import React, { useState } from "react";
import TopicContent from "./TopicContent";
import QuizContent from "./QuizContent";
import AssignmentContent from "./AssignmentContent";

const ModulePage = () => {
    const [activeTab, setActiveTab] = useState("topic");

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="module-page-container">
            <div className="left-sidebar">
                <div
                    className={`sidebar-item ${activeTab === "topic" ? "active" : ""
                        }`}
                    onClick={() => handleClick("topic")}
                >
                    <i className="fas fa-book"></i>
                </div>
                <div
                    className={`sidebar-item ${activeTab === "quiz" ? "active" : ""
                        }`}
                    onClick={() => handleClick("quiz")}
                >
                    <i className="fas fa-question"></i>
                </div>
                <div
                    className={`sidebar-item ${activeTab === "assignment" ? "active" : ""
                        }`}
                    onClick={() => handleClick("assignment")}
                >
                    <i className="fas fa-file-alt"></i>
                </div>
            </div>
            <div className="right-content">
                {activeTab === "topic" && <TopicContent />}
                {activeTab === "quiz" && <QuizContent />}
                {activeTab === "assignment" && <AssignmentContent />}
            </div>
        </div>
    );
};

export default ModulePage;
