import '../index.css';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import Waterflow from './Waterflow';

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-black"
    >
      {/* Background Glow + Light Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[400px] h-[400px] bg-[var(--btn)] opacity-20 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[5%] left-[15%] w-[350px] h-[350px] bg-[var(--secondary)] opacity-15 blur-[150px] rounded-full"></div>
        <div className="hero-light-streak"></div>
      </div>

      {/* Left Side: Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="z-10 max-w-3xl text-center md:text-left pt-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-7xl font-extrabold text-white leading-tight "
        >
          Hi, I&apos;m <span className="text-[var(--btn)]">Rahul</span>
          <span className="text-[var(--secondary)]">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-3xl text-gray-300 mt-4 font-medium"
        >
          <span className="text-[var(--secondary)] font-bold">Full Stack Developer</span> | MERN, Java & Spring Boot
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base md:text-2xl my-6 font-light text-gray-400"
        >
          Building scalable, real-world applications using{' '}
          <span className="text-[var(--btn)] font-semibold">
            React.js, Node.js, Express, MongoDB, and Spring Boot.
          </span>{' '}
          A clean coder, quick learner, and problem solver passionate about
          creating meaningful digital experiences.
        </motion.p>

        {/* Magnetic Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="inline-block mt-6"
        >
          <MagneticButton>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-[var(--secondary)] text-black font-semibold text-lg rounded-full hover:scale-105 hover:shadow-[0_0_20px_var(--secondary)] transition-all duration-300"
            >
              Let&apos;s Connect 🚀
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Right Side: Waterflow Animation */}
      <div className="w-full md:w-auto absolute z-10 right-14 overflow-hidden lg:right-50 lg:top-0">
        <Waterflow />
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 text-sm"
      >
        <span className="animate-bounce text-[var(--btn)] text-2xl">↓</span>
        <p>Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default Home;
