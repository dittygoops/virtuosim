import { Navbar } from "../components/Navbar";
import { NeedHelp } from "../components/NeedHelp";
import CourseCard from "../components/CourseCard";
import BikeIcon from "../assets/BikeIcon.svg";
import PlaneIcon from "../assets/PlaneIcon.svg";

export const CourseDashboard = () => {
  const courses = [
    { icon: BikeIcon, name: "Bike 1", totalModules: 10, completedModules: 5 },
    {
      icon: PlaneIcon,
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
