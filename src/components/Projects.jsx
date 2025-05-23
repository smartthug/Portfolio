import { FaGithubSquare } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import "../index.css";

const Projects = () => {
  const [project, setProject] = useState(false);
  const [project1, setProject1] = useState(false);

  // Lock scroll when modal open
  document.body.style.overflow = project || project1 ? "hidden" : "auto";

  return (
    <section id="projects" className="p-20 w-auto ">
      <h1 className="text-5xl text-right font-extrabold">
        Project<span className="text-[var(--btn)]">.</span>
        <hr className="border-t-2 my-3 border-gray-500" />
      </h1>

      <div className="w-full">
        <div
          className="w-full h-60 bg-stone-800 px-20 rounded-2xl relative"
          onClick={() => setProject1(true)}
        >
          <div className="w-2xl rounded-tl-2xl rounded-tr-2xl  h-40   bg-[url('./projectpic/car.jpg')] bg-cover bg-center absolute   bottom-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <div className="flex justify-between items-center my-2">
          <h1 className="text-3xl font-bold md:text-4xl sm:text-3xl">
            Dual-Mode Intelligent Headlamp Control System
          </h1>
          <div className="flex gap-5 text-3xl md:text-4xl">
           <a href="https://github.com/smartthug/HeadLamp-Control-System.git"> <FaGithubSquare /></a>
            <FaExternalLinkAlt />
          </div>
        </div>
        <h1 className="text-[var(--btn)] text-3xl font-medium md:text-3xl sm:text-2xl">
          Embedded C - RF Transmitter & RF Receiver - LDR Sensor
        </h1>
        <p className="text-2xl mb-5 md:text-3xl sm:text-2xl">
          An innovative system designed to enhance nighttime road safety by
          automatically adjusting vehicle headlamps. It switches between manual
          and sensor-based modes to reduce glare and ensure clear visibility
          during two-way driving.{' '}
          <a href="#project" onClick={() => setProject1(true)} className="text-bold text-[var(--secondary)]">
            Learn More {'>'}
          </a>
        </p>
      </div>

      <div >
        <div className="w-full h-60 rounded-2xl bg-stone-800 relative" onClick={() => setProject(true)}>
           <div className="w-2xl rounded-tl-2xl rounded-tr-2xl  h-40   bg-[url('./projectpic/signup.jpg')] bg-cover bg-top absolute  bottom-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <div className="flex justify-between items-center my-2 ">
          <h1 className="text-3xl font-bold md:text-4xl sm:text-3xl">Login-Signup</h1>
          <div className="flex gap-5 text-3xl md:text-4xl sm:text-3xl">
           <a href="https://github.com/smartthug/Login-Signup"><FaGithubSquare /></a> 
           < a href="https://login-signup-puw3.onrender.com"><FaExternalLinkAlt /></a>
          </div>
        </div>
        <h1 className="text-[var(--btn)] text-3xl font-medium md:text-3xl">
          React.js - Node.js - Express - MongoDB
        </h1>
        <p className="text-2xl mb-5 md:text-3xl">
          A secure login-signup authentication system built using Node.js,
          Express.js, and MongoDB. It supports OTP-based user registration, JWT
          token authentication, and password reset via email. The frontend is
          served as a single-page application (SPA) using Express.{' '}
          <a href="#project" onClick={() => setProject(true)} className="text-bold text-[var(--secondary)]">
            Learn More {'>'}
          </a>
        </p>
      </div>

      {/* Login-Signup Modal */}
      {project && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center overflow-y-auto md:text-3xl ">
          <div className="relative h-auto bg-stone-800 text-white p-6 rounded-lg shadow-lg w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden md:p-10">
            <button
              className="absolute top-1 right-1 font-bold text-4xl md:text-5xl sm:text-3xl"
              onClick={() => setProject(false)}
            >
              &times;
            </button>
            <div className="w-full h-81 rounded-tl-xl rounded-tr-2xl bg-[url('./projectpic/signup.jpg')] bg-cover bg-top"></div>
            <h2 className="text-2xl font-bold mb-2 md:text-3xl">Login-Signup</h2>
            <p className="text-[var(--secondary)] mb-3">
              React.js - Node.js - Express - MongoDB
            </p>
            <p className="mb-6">
              A secure login-signup authentication system built using Node.js,
              Express.js, and MongoDB. It supports OTP-based user registration,
              JWT token authentication, and password reset via email.
            </p>
            <p className="mb-2">🔐 OTP verification during signup</p>
            <p className="mb-2">🔑 JWT-based login with protected routes</p>
            <p className="mb-2">📧 Password reset using email and token</p>
            <h1 className="text-xl font-bold">
              Project Link<span className="text-[var(--btn)]">.</span>
            </h1>
            <div className="flex gap-5 mt-2">
              
              <a href="https://github.com/smartthug/Login-Signup" className="flex items-center gap-1">  <FaGithubSquare /> Source Code</a>
              
              <a href="https://login-signup-puw3.onrender.com" className="flex items-center gap-1">
                <FaExternalLinkAlt /> Live Project
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Headlamp Modal */}
      {project1 && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center overflow-y-auto md:text-3xl">
          <div className="relative h-auto bg-stone-800 text-white p-6 rounded-lg shadow-lg w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden md:p-10">
            <button
              className="absolute top-2 right-3 font-bold text-4xl md:text-5xl sm:text-3xl"
              onClick={() => setProject1(false)}
            >
              &times;
            </button>
            <div className="w-full h-81 rounded-tl-xl rounded-tr-2xl bg-[url('public/projectpic/car.jpg')] bg-cover bg-center object-fill"></div>
            <h2 className="text-2xl font-bold mb-2 md:text-3xl">
              Dual-Mode Intelligent Headlamp Control System
            </h2>
            <p className="text-[var(--secondary)] mb-3">
              Embedded C - RF Transmitter & RF Receiver - LDR Sensor
            </p>
            <p className="mb-6">
              An innovative system designed to enhance nighttime road safety by
              automatically adjusting vehicle headlamps.
            </p>
            <ul className="list-disc indent-1 ml-3">
              <li> <p className="mb-2 text-justify ">
               The system uses a Light Dependent Resistor (LDR) to detect the intensity of incoming light from oncoming vehicles. When high-intensity light is detected, it triggers a relay to switch the headlamp from high beam to low beam, reducing glare.
            </p></li>
              <li>
                <p className="mb-2 text-justify ">
              A manual switch is provided to override the automatic system, allowing the driver to control the beam mode as needed based on road conditions or personal preference.
            </p>
              </li>
              <li>
                <p className="mb-2 text-justify ">
              The system can operate in both automatic and manual modes. The driver can toggle between these modes using a selector switch, enabling flexibility and safety in various driving environments.
            </p>
              </li>
            </ul>
           
            
            
            <h1 className="text-xl font-bold">
              Project Link<span className="text-[var(--btn)]">.</span>
            </h1>
            <div className="flex gap-5 mt-2">
              <a href="https://github.com/smartthug/HeadLamp-Control-System.git" className="flex items-center gap-1">
                <FaGithubSquare /> Source Code
              </a>
              <p className="flex items-center gap-1">
                <FaExternalLinkAlt /> Live Project
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
