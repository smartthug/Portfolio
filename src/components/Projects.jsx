import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import "../index.css";

const Projects = () => {
  const [modal, setModal] = useState(null);
  document.body.style.overflow = modal ? "hidden" : "auto";

  const projectList = [
    {
      id: "login",
      title: "Login-Signup System",
      tech: "React.js | Node.js | Express | MongoDB",
      img: "./projectpic/signup.jpg",
      desc: "A secure authentication system featuring OTP-based signup, JWT token validation, and password reset via email. Built with the MERN stack and served as a single-page application (SPA).",
      github: "https://github.com/smartthug/Login-Signup",
      live: "https://login-signup-puw3.onrender.com",
    },
    {
      id: "crud",
      title: "CRUD Application",
      tech: "Spring Boot | MySQL | React.js",
      img: "./projectpic/CRUD.jpeg",
      desc: "A full-stack CRUD web application that enables users to Create, Read, Update, and Delete records through REST APIs using React and Spring Boot.",
      github: "https://github.com/smartthug/CRUD-App",
      live: "http://localhost:8080/",
    },
    {
      id: "tictac",
      title: "Tic-Tac-Toe Game",
      tech: "React.js | Tailwind CSS",
      img: "./projectpic/Tac-Game.jpeg",
      desc: "A responsive two-player Tic-Tac-Toe game built using React.js. Implements interactive game logic, win detection, and modern UI styling with Tailwind CSS.",
      github: "https://github.com/smartthug/Tic-Tac-Toe",
      live: "https://smartthug.github.io/Xox/",
    },
    {
      id: "headlamp",
      title: "Dual-Mode Intelligent Headlamp Control System",
      tech: "Embedded C | RF Transmitter & Receiver | LDR Sensor",
      img: "./projectpic/car.jpg",
      desc: "An innovative system that automatically adjusts headlights between high and low beams using an LDR sensor and RF communication to improve road safety.",
      github: "https://github.com/smartthug/HeadLamp-Control-System.git",
    },
  ];

  return (
    <section id="projects" className="relative px-6 sm:px-10 md:px-20 py-20">
      {/* Background Glow */}
      <div className="absolute top-[5%] left-[10%] w-[250px] h-[250px] bg-[var(--btn)] blur-[150px] opacity-10 rounded-full"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-[var(--secondary)] blur-[180px] opacity-10 rounded-full"></div>

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold mb-10"
      >
        Projects<span className="text-[var(--btn)]">.</span>
        <hr className="border-t-2 my-3 border-gray-600 w-32" />
      </motion.h1>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-12 z-10 relative">
        {projectList.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotateX: 3, rotateY: -3 }}
            className="bg-stone-900/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:border-[var(--btn)] hover:shadow-[0_0_25px_var(--btn)] transition-all duration-300"
          >
            {/* Image */}
            <motion.div
              onClick={() => setModal(proj.id)}
              className="w-full h-52 bg-cover bg-center rounded-xl cursor-pointer"
              style={{ backgroundImage: `url(${proj.img})` }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            ></motion.div>

            {/* Title & Links */}
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-3xl font-bold text-white">{proj.title}</h2>
              <div className="flex gap-4 text-3xl text-gray-300">
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer">
                    <FaGithubSquare className="hover:text-[var(--secondary)] transition duration-300" />
                  </a>
                )}
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt className="hover:text-[var(--secondary)] transition duration-300" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-[var(--btn)] text-lg font-medium mt-2">{proj.tech}</h3>
            <p className="text-gray-300 mt-3 text-lg leading-relaxed">
              {proj.desc}{" "}
              <span
                onClick={() => setModal(proj.id)}
                className="cursor-pointer text-[var(--secondary)] font-semibold hover:underline"
              >
                Learn More &gt;
              </span>
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <Modal
          data={projectList.find((p) => p.id === modal)}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  );
};

const Modal = ({ data, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center overflow-y-auto md:text-2xl"
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative bg-stone-900 text-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto border border-gray-700"
    >
      <button
        className="absolute top-3 right-5 text-4xl font-bold hover:text-[var(--btn)] transition"
        onClick={onClose}
      >
        &times;
      </button>

      <div
        className="w-full h-64 bg-cover bg-center rounded-xl mb-5"
        style={{ backgroundImage: `url(${data.img})` }}
      ></div>

      <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
      <p className="text-[var(--secondary)] mb-4">{data.tech}</p>

      <ul className="list-disc pl-6 space-y-2 text-gray-300 text-lg">
        {data.desc.split(". ").map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      <div className="flex gap-5 mt-6">
        {data.github && (
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xl hover:text-[var(--btn)] transition"
          >
            <FaGithubSquare /> Source Code
          </a>
        )}
        {data.live && (
          <a
            href={data.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xl hover:text-[var(--btn)] transition"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  </motion.div>
);

export default Projects;
