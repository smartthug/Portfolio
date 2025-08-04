import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import MagneticButton from "./MagneticButton";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed z-20 w-full h-auto bg-transparent backdrop-blur p-4 pl-20 shadow-md justify-between items-center px-10">
        {/* Social Icons */}
        <ul className="flex space-x-6 text-3xl md:text-2xl">
          <li>
            <a
              href="https://www.linkedin.com/in/rahuldeva5"
              className="hover:text-teal-400"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/smartthug"
              className="hover:text-teal-400"
            >
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a
              href="mailto:rahuldeva5555@gmail.com?subject=Hello%20Rahul&body=Hi%20Rahul,%0AI%20saw%20your%20project%20and%20wanted%20to%20connect."
              className="hover:text-teal-400"
            >
              <IoMdMail />
            </a>
          </li>
        </ul>

        {/* Resume Button */}
        <MagneticButton>
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:a396d061-2f46-4ff2-8c0f-990a477cdd29"
            className="px-4 py-3 border-2 border-white rounded-2xl bg-transparent hover:text-teal-400 hover:border-teal-400 transition-all duration-300"
          >
            My Resume
          </a>
        </MagneticButton>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed z-20 w-full h-auto bg-black/60 backdrop-blur-sm p-4 shadow-md flex justify-between items-center px-6">
        <h1 className="text-white text-xl font-semibold">Rahul Dev</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-3xl">
          <GiHamburgerMenu />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 w-full bg-gray-900 text-white p-6 flex flex-col space-y-4 z-10">
          <a href="https://www.linkedin.com/in/rahuldeva5" className="hover:text-teal-400">LinkedIn</a>
          <a href="https://github.com/smartthug" className="hover:text-teal-400">GitHub</a>
          <a href="mailto:rahuldeva5555@gmail.com" className="hover:text-teal-400">Email</a>
          <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:a396d061-2f46-4ff2-8c0f-990a477cdd29" className="hover:text-teal-400">My Resume</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
