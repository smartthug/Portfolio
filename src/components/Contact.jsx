import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";
import MagneticButton from "./MagneticButton";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full h-auto px-8 md:px-20 py-24 flex justify-center items-center overflow-hidden"
    >
      {/* 🌌 Background Gradient Glows */}
      <div className="absolute top-[10%] left-[15%] w-[250px] h-[250px] bg-[var(--btn)] blur-[160px] opacity-20 rounded-full"></div>
      <div className="absolute bottom-[5%] right-[10%] w-[350px] h-[350px] bg-[var(--secondary)] blur-[200px] opacity-20 rounded-full"></div>

      {/* 💌 Main Contact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full text-center md:text-left rounded-2xl p-10 border border-gray-600 bg-stone-900/60 backdrop-blur-lg shadow-2xl relative overflow-hidden z-10"
      >
        {/* Floating Icon */}
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-6 right-10 text-[var(--secondary)] text-5xl opacity-50"
        >
          <FaEnvelopeOpenText />
        </motion.div>

        {/* Header */}
        <h3 className="text-4xl md:text-5xl font-extrabold mb-4">
          Let’s Connect<span className="text-[var(--btn)]">.</span>
        </h3>
        <hr className="border-t-2 border-gray-500 w-32 mb-6" />

        {/* Text */}
        <p className="text-gray-300 mb-6 text-xl md:text-2xl leading-relaxed">
          I’m always excited to collaborate on creative projects, full-stack applications,
          or open-source contributions. 🚀  
          Let’s turn your ideas into reality!  
          You can find me on{" "}
          <a
            href="https://www.linkedin.com/in/rahuldeva5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--btn)] underline hover:text-white"
          >
            LinkedIn
          </a>{" "}
          or send me an email directly below.
        </p>

        {/* Email */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-10 text-lg md:text-2xl tracking-widest text-[var(--secondary)] select-all font-semibold"
        >
          rahuldeva5555@gmail.com
        </motion.p>

        {/* Email Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <MagneticButton className="group relative inline-block">
            <span className="absolute inset-0 bg-[var(--btn)] rounded-full opacity-30 scale-0 group-hover:animate-bg-wave z-0" />
            <a
              href="mailto:rahuldeva5555@gmail.com"
              className="relative px-8 py-4 bg-[var(--secondary)] hover:brightness-110 text-black font-bold text-xl rounded-full transition duration-300 z-10"
            >
              Say Hello 👋
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
