import { Navbar } from "../components/Navbar";
import { NeedHelp } from "../components/NeedHelp";
import Presentation from "../components/Presentation.tsx";
import ControllableModel from "../components/ControllableModel.tsx";

export const PresentationPage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-t from-transparent via-purple-100 to-transparent">
      <div className="w-full h-full bg-gradient-to-b from-white via-transparent to-white">
        <Navbar />
        <NeedHelp />

        <div className="flex justify-center h-4/5 p-8">
          <div className="w-1/2">
            <Presentation />
          </div>
          <div className="w-1/2">
            <ControllableModel />
          </div>
        </div>
      </div>
    </div>
  );
};
