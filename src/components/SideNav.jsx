import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaHome, FaUserAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SideNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "exper", "projects", "contact"];
      let current = "home";
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 300) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "about", icon: <FaUserAlt />, label: "About" },
    { id: "exper", icon: <BsBriefcaseFill />, label: "Experience" },
    { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <div>
      {/* ===== DESKTOP ICON SIDEBAR ===== */}
      <motion.nav
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="
          fixed 
          left-2
          top-1/2 
          -translate-y-1/2 
          bg-black/70 
          backdrop-blur-md 
          border border-gray-700 
          rounded-2xl 
          p-3 
          z-30 
          hidden lg:flex 
          flex-col 
          justify-center 
          items-center 
          shadow-lg 
          space-y-5"
      >
        {items.map(({ id, icon, label }) => (
          <div key={id} className="relative group">
            {/* Icon with Glow */}
            <div
              className={`relative flex items-center justify-center p-2 rounded-full transition-all duration-300 ${
                activeSection === id
                  ? "text-[var(--btn)] glow-ring"
                  : "text-gray-400 hover:text-[var(--btn)]"
              }`}
            >
              {icon}
            </div>

            {/* Tooltip */}
            <span
              className="
                absolute left-10 top-1/2 
                -translate-y-1/2 
                px-3 py-1 
                text-sm 
                rounded-md 
                bg-gray-800 text-white 
                opacity-0 
                group-hover:opacity-100 
                group-hover:translate-x-2 
                transition-all 
                duration-300 
                whitespace-nowrap
              "
            >
              {label}
            </span>
          </div>
        ))}
      </motion.nav>

      {/* ===== MOBILE SCROLL-TO-TOP BUTTON ===== */}
      <motion.nav
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="
          w-14 h-14 
          fixed bottom-6 right-6 
          rounded-full 
          bg-[var(--secondary)] 
          text-black 
          flex items-center justify-center 
          lg:hidden 
          shadow-lg shadow-[var(--btn)]/50"
      >
        <a href="#home" className="text-4xl hover:text-white transition-all">
          <MdKeyboardDoubleArrowUp />
        </a>
      </motion.nav>
    </div>
  );
};

export default SideNav;
