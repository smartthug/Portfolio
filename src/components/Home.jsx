import '../index.css';
import MagneticButton from './MagneticButton';
import Waterflow from './Waterflow';

const Home = () => {
  return (
    <section
      id="home"
      className="w-full h-auto relative mt-16 px-6  md:px-20 overflow-hidden flex flex-col md:flex-row items-center justify-between "
    >
      {/* Left Side: Intro Text */}
      <div className="z-10 max-w-3xl text-center md:text-left pt-20">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight">
          Hi, I&apos;m Rahul<span className="text-[var(--btn)]">.</span>
        </h1>

        <p className="text-xl md:text-4xl text-gray-300 mt-4 font-medium">
          I&apos;m a <span className="text-[var(--secondary)] font-bold">MERN Developer</span> — React.js & Tailwind CSS
        </p>

        <p className="text-base md:text-2xl my-6 font-light text-gray-400">
          I build clean, responsive UIs and love transforming ideas into interactive experiences. Always learning, always improving.
        </p>

        {/* Magnetic Button */}
        <MagneticButton className="inline-block mt-4">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-[var(--secondary)] text-black font-bold text-lg rounded-full hover:brightness-110 transition duration-300"
          >
            Contact me!
          </a>
        </MagneticButton>
      </div>

      {/* Right Side: Waterflow Dots */}
      <div className="w-full md:w-auto absolute  z-11 right-14 overflow-hidden lg:right-50 lg:top-0">
        <Waterflow />
      </div>
    </section>
  );
};

export default Home;
