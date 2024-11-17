import { Navbar } from "../components/Navbar";
import { NeedHelp } from "../components/NeedHelp";
import CourseCard from "../components/CourseCard";
import BikeIcon from "../assets/bike.jpg"
import PlaneIcon from "../assets/plane.jpg";
import Plane1Icon from "../assets/plane1.avif";
import { BookOpenIcon, ClockIcon, ChartBarSquareIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export const CourseDashboard = () => {
  const courses = [
    { icon: BikeIcon, name: "Bike 1", totalModules: 10, completedModules: 5 },
    {
      icon: Plane1Icon,
      name: "Plane Cockpit 1",
      totalModules: 6,
      completedModules: 2,
    },
    {
      icon: PlaneIcon,
      name: "Plane Cockpit 2",
      totalModules: 13,
      completedModules: 0,
    },
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-t from-transparent via-purple-100 to-transparent">
      <div className="w-full h-full bg-gradient-to-b from-white via-transparent to-white">
        <Navbar />
        <NeedHelp />

        <div className="flex justify-center h-3/5 py-8">
          <div className="course-containers w-4/5 flex flex-col gap-4">
            <button className="p-5 py-4 shadow-xl bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 transition duration-300 ease-in-out text-white text-xl text-left rounded-lg flex justify-between">
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-2">
                <BookOpenIcon className="size-6" />
                <p>Review Past Courses</p>
                </div>
                <div className="flex gap-x-5">
                <div className="flex items-center gap-x-1">
                  <ClockIcon className="size-4" />
                  <p className="text-xs">Continue Learning</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <ChartBarSquareIcon className="size-4" />
                  <p className="text-xs">7 / 29 Modules Completed</p>
                </div>
                </div>  
              </div>
              <div className="flex items-center gap-x-2">
                <p>View All Progress</p>
                <ArrowRightIcon className="size-6" />
              </div>
            </button>
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                icon={course.icon}
                name={course.name}
                totalModules={course.totalModules}
                completedModules={course.completedModules}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
