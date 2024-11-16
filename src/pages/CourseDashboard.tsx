import { Navbar } from "../components/Navbar";
import { NeedHelp } from "../components/NeedHelp";

export const CourseDashboard = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-t from-transparent via-purple-100 to-transparent">
      <div className="w-full h-full bg-gradient-to-b from-white via-transparent to-white">
        <Navbar />
        <NeedHelp />
      </div>
    </div>
  );
};
