import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative p-10 md:p-20 flex flex-col justify-center text-white overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[var(--btn)] opacity-10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--secondary)] opacity-10 blur-[180px] rounded-full"></div>

      {/* About Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="z-10"
      >
        <h3 className="text-4xl md:text-5xl font-extrabold mb-2">
          About Me <span className="text-[var(--btn)]">.</span>
        </h3>
        <hr className="border-t-2 border-gray-600 w-32 mb-6" />
      </motion.div>

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="z-10 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-5xl text-justify"
      >
        <p className="mb-6">
          <span className="font-bold text-[var(--secondary)]">Hey, I&apos;m Rahul</span> — a passionate{" "}
          <span className="text-[var(--btn)] font-bold">Full Stack Developer</span> who loves turning ideas into
          real-world web applications. I build responsive, scalable, and efficient solutions using{" "}
          <span className="font-semibold text-white">
            React.js, Node.js, Express, MongoDB, Java, Spring Boot, and MySQL.
          </span>
        </p>

        <p className="mb-6">
          I’ve gained hands-on experience during my internships at{" "}
          <span className="font-bold text-white">Nexus Private Limited</span> and{" "}
          <span className="font-bold text-white">Tata Strive</span>, where I worked on full-stack projects,
          enhanced performance, and collaborated in{" "}
          <span className="font-semibold text-[var(--secondary)]">Agile environments</span>.
        </p>

        <p>
          I’m a <span className="font-bold text-[var(--btn)]">fast learner and clean coder</span> who enjoys exploring
          new technologies, solving challenges, and delivering meaningful digital experiences that make an impact.
        </p>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="z-10 mt-16"
      >
        <h1 className="flex items-center gap-4 font-bold text-3xl sm:text-4xl md:text-5xl mb-8">
          <FaLaptopCode className="text-[var(--secondary)] text-5xl md:text-6xl" />
          Tools & Technologies
        </h1>

        <ul className="flex flex-wrap gap-4 text-lg sm:text-xl md:text-2xl">
          {[
            "JavaScript",
            "Java",
            "React.js",
            "MongoDB",
            "Node.js",
            "Express",
            "Spring Boot",
            "MySQL",
            "HTML",
            "Tailwind CSS",
            "GitHub",
            "Git",
            "Data Structures & Algorithms",
            "Playwright Testing",
            "Postman",
            "REST API",
          ].map((tech, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,255,255,0.1)" }}
              className="px-5 py-2 border border-gray-400 rounded-xl backdrop-blur-sm hover:border-[var(--secondary)] transition duration-300"
            >
              {tech}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
