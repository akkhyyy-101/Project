import React from 'react';
import './QuizContent.css';

const QuizContent = ({ title, questions }) => {
    return (
        <div className="quiz-content">
            <h2>{title}</h2>
            {questions.map((question, index) => (
                <div className="quiz-question" key={index}>
                    <h3>{question.question}</h3>
                    <ul className="quiz-answers">
                        {question.answers.map((answer, index) => (
                            <li key={index}>{answer}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default QuizContent;
