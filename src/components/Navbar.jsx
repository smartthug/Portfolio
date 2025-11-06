import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import MagneticButton from "./MagneticButton";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:flex fixed z-20 w-full bg-black/60 backdrop-blur-md border-b border-gray-800 p-5 px-16 justify-between items-center shadow-lg"
      >
        {/* ==== Social Icons ==== */}
        <ul className="flex space-x-8 text-3xl text-white">
          <li>
            <a
              href="https://www.linkedin.com/in/rahuldeva5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--secondary)] transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/smartthug"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--secondary)] transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a
              href="mailto:rahuldeva5555@gmail.com?subject=Hello%20Rahul&body=Hi%20Rahul,%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
              className="hover:text-[var(--secondary)] transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <IoMdMail />
            </a>
          </li>
        </ul>

        {/* ==== Resume Button ==== */}
        <MagneticButton>
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:a396d061-2f46-4ff2-8c0f-990a477cdd29"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-white rounded-full bg-transparent text-white font-medium hover:bg-[var(--btn)] hover:text-black hover:border-[var(--btn)] transition-all duration-300"
          >
            My Resume
          </a>
        </MagneticButton>
      </motion.nav>

      {/* ===== MOBILE NAVBAR ===== */}
      <nav className="md:hidden fixed z-20 w-full bg-black/70 backdrop-blur-md border-b border-gray-800 p-4 flex justify-between items-center shadow-md">
        <h1 className="text-white text-xl font-semibold tracking-wide">
          Rahul Dev
        </h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl hover:text-[var(--btn)] transition-all duration-300"
          aria-label="Menu"
        >
          <GiHamburgerMenu />
        </button>
      </nav>

      {/* ===== MOBILE MENU DROPDOWN ===== */}
      {menuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed top-16 w-full bg-[#0f172a]/95 text-white p-6 flex flex-col space-y-5 z-10 border-t border-gray-700"
        >
          <a
            href="https://www.linkedin.com/in/rahuldeva5"
            target="_blank"
            className="hover:text-[var(--btn)] transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/smartthug"
            target="_blank"
            className="hover:text-[var(--btn)] transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href="mailto:rahuldeva5555@gmail.com"
            className="hover:text-[var(--btn)] transition-all duration-300"
          >
            Email
          </a>
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:f7d1eed0-1955-4d4f-83fd-1f5993216ec0"
            target="_blank"
            className="hover:text-[var(--btn)] transition-all duration-300"
          >
            My Resume
          </a>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
