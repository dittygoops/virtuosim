import { useNavigate } from "react-router-dom";
import { Logo } from "./logo";

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Courses", href: "#" },
  { name: "Get Help", href: "#" },
];

export function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="bg-white border border-b-2">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 py-2 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Virtuosim</span>
            <div className="flex items-center space-x-2"
            onClick={() => navigate("/")}>
              <Logo className="h-8 w-auto fill-current text-purple-800" />
              <span className="font-semibold text-xl text-purple-800">
                Virtuosim
              </span>
              <span className="font-light text-lg mt-0.5">X</span>
              <img className="h-[4rem] mt-1" src="/honeywell-logo.png" alt="" />
            </div>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className=" font-semibold text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex items-center gap-x-4 bg-slate-200 rounded-md">
            <div className="flex items-center space-x-2 p-2">
              <span className="text-sm/6 text-gray-900 ml-2 font-semibold">
                Hi, Ashish Kurse!
              </span>
              <img className="h-10 w-10 rounded-full" src="/ashish.png" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
