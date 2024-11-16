import { Navbar } from "../components/Navbar";
import { NeedHelp } from "../components/NeedHelp";

import { useState } from "react";

export const CourseDashboard = () => {
  const [courses, setCourses] = useState([
    { name: "Tank Engine 1", totalModules: 10, completedModules: 5 },
    { name: "Plane Cockpit 1", totalModules: 6, completedModules: 2 },
    { name: "Plane Cockpit 2", totalModules: 13, completedModules: 0 }
  ]);

  return (
    <div className="w-full h-screen bg-gradient-to-t from-transparent via-purple-100 to-transparent">
      <div className="w-full h-full bg-gradient-to-b from-white via-transparent to-white">
        <Navbar />
        <NeedHelp />

      <div className="flex justify-center min-h-screen">
        <div className="course-containers w-2/5 flex flex-col gap-4">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              name={course.name}
              totalModules={course.totalModules}
              completedModules={course.completedModules}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
