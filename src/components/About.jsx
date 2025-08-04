import { FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="p-20 flex flex-col">
      <div className="text-3xl text-justify md:text-xl">
        <h3 className="text-5xl font-extrabold">
          About Me <span className="text-[var(--btn)]">.</span>
          <hr className="border-t-2 my-3 border-gray-500" />
        </h3>

        <p className="mt-2 sm:text-3xl lg:text-2xl">
          <span className="w-1 h-1 bg-[var(--btn)] font-extrabold rounded p-1.5">H</span>
          ey, I&apos;m Rahul — a Full Stack Dev who vibes with the <span className="font-bold">MERN stack ⚛️⚡</span>.
          From crafting sleek UIs with <span className="font-bold">React & Tailwind</span> to building solid backends with
          <span className="font-bold"> Node.js, Express & MongoDB</span>, I enjoy turning real-world ideas into working web apps.
        </p>

        <p className="my-4 sm:text-3xl lg:text-2xl">
          I’ve completed a one-month internship as a Frontend Developer at <span className="font-bold">Nexus Private Limited</span>,
          where I worked on real-time projects and boosted my teamwork and debugging skills. I’m also certified in
          <span className="font-bold"> MongoDB, React.js, and Java</span> via Codecademy and currently sharpening my backend skills
          at <span className="font-bold">Tata Strive</span>.
        </p>

        <p className="sm:text-3xl lg:text-2xl">
          I love bringing creative ideas to life through clean code and modern design. I&apos;m a quick learner, flexible with shifts,
          and always ready for a challenge.
        </p>
      </div>

      <div className="mt-16 p-4">
        <h1 className="flex gap-4 font-bold text-3xl mb-8 items-center sm:text-5xl">
          <FaLaptopCode className="text-[var(--secondary)] text-4xl sm:text-7xl" />
          Use at work
        </h1>
        <ul className="flex gap-4 flex-wrap text-2xl sm:text-3xl">
          {[
            "JavaScript", "Java", "HTML", "Tailwind CSS", "Data Structure & Algorithms",
            "GitHub", "MongoDB", "MySQL", "React js", "Node js", "Express"
          ].map((tech, index) => (
            <li
              key={index}
              className="p-4 py-1.5 bg-transparent border-2 border-white rounded-xl"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
