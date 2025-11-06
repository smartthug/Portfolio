import { motion } from "framer-motion";

const Exper = () => {
  const experiences = [
    {
      company: "Tata Strive",
      role: "Junior Full Stack Developer Intern",
      period: "Nov 2024 – Mar 2025",
      location: "Chromepet",
      details: [
        "Developed and deployed full-stack web applications using React.js, Node.js, Express.js, MySQL, and Java.",
        "Designed REST APIs and integrated dynamic UI components to improve performance and usability.",
        "Collaborated in Agile sprints, improving team communication, debugging workflows, and project management.",
      ],
      skills: ["Java", "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MySQL"],
    },
    {
      company: "Nexus Private Limited",
      role: "Frontend Developer Intern",
      period: "Jun 2024 – Jul 2024",
      location: "Coimbatore",
      details: [
        "Built responsive web interfaces using React.js, HTML, CSS, and JavaScript for real-world client projects.",
        "Enhanced UI performance and optimized components for faster load times.",
        "Worked closely with the backend team to ensure smooth data flow and API integration.",
      ],
      skills: ["React.js", "HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section id="exper" className="relative px-6 sm:px-10 md:px-20 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[10%] left-[5%] w-[250px] h-[250px] bg-[var(--btn)] blur-[150px] opacity-10 rounded-full"></div>
      <div className="absolute bottom-[5%] right-[10%] w-[350px] h-[350px] bg-[var(--secondary)] blur-[200px] opacity-10 rounded-full"></div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="font-extrabold text-4xl sm:text-5xl mb-10"
      >
        Experience<span className="text-[var(--btn)]">.</span>
        <hr className="border-t-2 my-2 border-gray-600 w-32" />
      </motion.h1>

      {/* Experience Timeline */}
      <div className="relative border-l-2 border-gray-700 ml-4 space-y-14">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[10px] top-2 w-4 h-4 rounded-full bg-[var(--secondary)] shadow-[0_0_15px_var(--secondary)]"></div>

            {/* Card Content */}
            <div className="bg-stone-900/60 p-6 rounded-xl border border-gray-700 backdrop-blur-sm hover:border-[var(--btn)] transition duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <h1 className="text-2xl sm:text-3xl font-bold">{exp.company}</h1>
                <p className="text-gray-400 text-lg md:text-xl">{exp.period}</p>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-1">
                <h2 className="text-[var(--secondary)] font-extrabold text-lg sm:text-xl">{exp.role}</h2>
                <p className="text-gray-400">{exp.location}</p>
              </div>

              <ul className="list-disc pl-5 mt-4 text-gray-300">
                {exp.details.map((line, idx) => (
                  <li key={idx} className="mt-2 text-base sm:text-lg md:text-xl leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 mt-5">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 bg-stone-800 rounded-xl border border-gray-600 hover:border-[var(--btn)] hover:text-[var(--btn)] transition duration-300 text-sm sm:text-base md:text-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Exper;
