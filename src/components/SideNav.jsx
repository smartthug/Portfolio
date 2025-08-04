import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const SideNav = () => {
  return (
    <div>
      {/* Desktop Sidebar */}
      <nav className="w-16 h-full fixed left-0 bg-gray-900 z-30 hidden lg:flex">
        <ul className="flex flex-col gap-8 justify-evenly items-center p-5 text-2xl">
          {["home", "about", "exper", "projects", "contact"].map((item, idx) => (
            <li key={idx}>
              <a
                href={`#${item}`}
                className="hover:text-blue-300"
                style={{ writingMode: "vertical-rl" }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Back to Top Button */}
      <nav className="w-20 h-20 fixed bottom-8 right-4 rounded-full bg-gray-900 z-30 flex items-center justify-center lg:hidden">
        <a href="#home" className="text-6xl hover:text-blue-300">
          <MdKeyboardDoubleArrowUp />
        </a>
      </nav>
    </div>
  );
};

export default SideNav;
