import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-[100dvw] h-auto mb-9 p-20 flex justify-center items-center"
    >
      <div className=" max-w-4xl rounded-2xl p-10 border-2 border-white bg-transparent bg-opacity-30 backdrop-blur-md shadow-lg relative overflow-hidden">
        <h3 className="text-4xl md:text-5xl font-extrabold mb-4 z-10 relative">
          Contact Me<span className="text-[var(--secondary)]">.</span>
        </h3>

        <p className="text-gray-300 mb-6 text-2xl md:text-3xl z-10 relative">
          Let&apos;s connect and build something great! You can also find me on{" "}
          <a
            href="https://www.linkedin.com/in/rahuldeva5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--btn)] underline hover:text-white"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-[var(--btn)] underline hover:text-white"
          >
            Twitter
          </a>
          .
        </p>

        <p className="mb-8 text-lg md:text-2xl tracking-widest text-[var(--btn)] select-all z-10 relative">
          rahuldeva5555@gmail.com
        </p>

        <MagneticButton className="group relative inline-block">
          <span className="absolute inset-0 bg-[var(--btn)] rounded-full opacity-30 scale-0 group-hover:animate-bg-wave z-0" />
          <a
            href="mailto:rahuldeva5555@gmail.com"
            className="relative px-6 py-4 bg-[var(--secondary)] hover:brightness-110 text-black font-bold text-xl rounded-full transition duration-300 z-10  "
          >
            Email Me
          </a>
        </MagneticButton>
      </div>
    </motion.section>
  );
};

export default Contact;
