import {
  AcademicCapIcon,
  ArchiveBoxIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";

interface CourseCardProps {
  icon: string;
  name: string;
  totalModules: number;
  completedModules: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  icon,
  name,
  totalModules,
  completedModules,
}) => {
  // Calculate the completion percentage
  const completionPercentage = (completedModules / totalModules) * 100;

  return (
    <div className="course-card relative p-5 py-2 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 shadow-xl rounded-lg flex justify-around items-center">
      <img src={icon} className="size-20" />

      {/* Course Info */}
      <div className="flex flex-col justify-center items-center w-1/3 ml-5 mr-auto">
        <p className="text-xl font-bold text-left mb-2 w-full">{name}</p>

        <p className="text-gray-700 mb-1 text-left w-full">
          Modules Completed: {completedModules} / {totalModules}
        </p>
        {/* Progress Bar */}
        <div className="progress-bar w-full bg-purple-300 rounded-full h-4 mb-2">
          <div
            className="progress-bar-fill bg-purple-800 h-4 rounded-full"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Icons */}
        <div className="flex space-x-5 self-end">
          <AcademicCapIcon className="size-6" />
          <BellAlertIcon className="size-6" />
          <ArchiveBoxIcon className="size-6" />
        </div>

        {/* Buttons */}
        <div className="button-group flex space-x-2 justify-around w-1/3">
          <button
            className="bg-purple-800 text-white py-2 px-4 rounded hover:bg-purple-900 transition duration-300 ease-in-out"
            onClick={() => (window.location.href = "/presentation")}>
            Recap
          </button>
          <button
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 ease-in-out"
            onClick={() => (window.location.href = "/presentation")}>
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
