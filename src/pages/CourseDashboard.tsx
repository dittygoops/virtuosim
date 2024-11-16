import { Navbar } from "../components/Navbar";
import { NeedHelp } from "../components/NeedHelp";

export const CourseDashboard = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-t from-transparent via-purple-100 to-transparent">
      <div className="w-full h-full bg-gradient-to-b from-white via-transparent to-white">
        <Navbar />
        <NeedHelp />
      <div className="course-containers">
        <CourseCard
          name="React Basics"
          totalModules={10}
          completedModules={5}
        />
        <CourseCard
          name="React Hooks"
          totalModules={8}
          completedModules={3}
        />
        <CourseCard
          name="React Router"
          totalModules={6}
          completedModules={2}
        />
      </div>
    </div>
  );
};
