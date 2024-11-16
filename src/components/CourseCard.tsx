import React from 'react';
import './CourseCard.css'; // Import the CSS file for styling

interface CourseCardProps {
    name: string;
    totalModules: number;
    completedModules: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ name, totalModules, completedModules }) => {
    // Calculate the completion percentage
    const completionPercentage = (completedModules / totalModules) * 100;

    return (
        <div className="course-card">
            <h2>{name}</h2>
            <p>Modules Completed: {completedModules} / {totalModules}</p>
            
            {/* Progress Bar */}
            <div className="progress-bar">
                <div 
                    className="progress-bar-fill" 
                    style={{ width: `${completionPercentage}%` }} 
                />
            </div>

            {/* Buttons */}
            <div className='button-group'>
                <button onClick={() => alert('Recap clicked')}>Recap</button>
                <button onClick={() => alert('Learn clicked')}>Learn</button>
            </div>
        </div>
    );
};

export default CourseCard;
