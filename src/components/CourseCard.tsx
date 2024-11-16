interface CourseCardProps {
    name: string;
    totalModules: number;
    completedModules: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ name, totalModules, completedModules }) => {
    // Calculate the completion percentage
    const completionPercentage = (completedModules / totalModules) * 100;

    return (
        <div className="course-card p-1 bg-white shadow-md rounded-lg flex justify-around items-center">            
            {/* Course Info */}
            <div className="flex flex-col justify-center items-center w-1/3">
            <p className="text-xl font-bold text-center mb-4">{name}</p>
            {/* Progress Bar */}
            <div className="progress-bar w-full bg-gray-200 rounded-full h-4">
                <div 
                className="progress-bar-fill bg-purple-800 h-4 rounded-full" 
                style={{ width: `${completionPercentage}%` }} 
                />
            </div>
            <p className="text-gray-700 mb-4 text-center">Modules Completed: {completedModules} / {totalModules}</p>
            </div>
            
            {/* Buttons */}
            <div className='button-group flex space-x-2 justify-center w-1/3'>
            <button 
                className="bg-purple-800 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-300 ease-in-out"
                onClick={() => window.location.href = '/presentation'}
            >
                Recap
            </button>
            <button 
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300 ease-in-out"
                onClick={() => window.location.href = '/presentation'}
            >
                Learn
            </button>
            </div>
        </div>
    );
};

export default CourseCard;