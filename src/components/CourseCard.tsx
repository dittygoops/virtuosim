interface CourseCardProps {
    name: string;
    totalModules: number;
    completedModules: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ icon, name, totalModules, completedModules }) => {
    // Calculate the completion percentage
    const completionPercentage = (completedModules / totalModules) * 100;

    return (
        <div className="course-card relative p-5 py-2 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 shadow-xl rounded-lg flex justify-around items-center">            
            <img src={ icon } className='size-20' />
            
            {/* Course Info */}
            <div className="flex flex-col justify-center items-center w-1/3 ml-5 mr-auto">
            <p className="text-xl font-bold text-left mb-4 w-full">{name}</p>
            
            <p className="text-gray-700 mb-1 text-left w-full">Modules Completed: {completedModules} / {totalModules}</p>
            {/* Progress Bar */}
            <div className="progress-bar w-full bg-purple-300 rounded-full h-4">
            <div 
            className="progress-bar-fill bg-purple-800 h-4 rounded-full" 
            style={{ width: `${completionPercentage}%` }} 
            />
            </div>
            </div>
            
            <div className="flex flex-col gap-4">
            {/* Icons */}
            <div className="flex space-x-2 justify-evenly">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
            </div>

            {/* Buttons */}
            <div className='button-group flex space-x-2 justify-around w-1/3'>
            <button 
            className="bg-purple-800 text-white py-2 px-4 rounded hover:bg-purple-900 transition duration-300 ease-in-out"
            onClick={() => window.location.href = '/presentation'}
            >
            Recap
            </button>
            <button 
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 ease-in-out"
            onClick={() => window.location.href = '/presentation'}
            >
            Learn
            </button>
            </div>
            </div>
            
        </div>
    );
};

export default CourseCard;