import {FaLaptopCode} from "react-icons/fa";
const About = () => {
    return (
      <section id="about" className="p-20 flex flex-col sm:flex-col ">
        <div className="text-3xl text-justify md:text-xl">
        <h3 className="text-5xl font-extrabold ">About Me <span className="text-[var(--btn)]">.</span><hr className="border-t-2 my-3  border-gray-500"></hr></h3>
        <p className="   mt-2 sm:text-3xl lg:text-2xl ">
          <span className="w-1 h-1 bg-[var(--btn)]  font-extrabold rounded p-1.5 ">H</span>i,I&apos;m Rahul,a passionate and detail-oriented MERN developer with hands-on experience in building responsive and user-friendly web interfaces using <span className="font-bold">React.js, HTML, TailwindCss, JavaScript, Node.js, Express, MongoDB.</span>
          I have a strong foundation in <span className="font-bold">Java, MySQL</span> and <span className="font-bold">Data Structures</span>, thanks to my ongoing learning and internship at Tata Strive.
        </p>
        <p className="my-4 sm:text-3xl lg:text-2xl">
        I&apos;ve completed a one-month internship as a FrontEnd Developer at  <span className="font-bold">Nexus Private Limited</span>, where I contributed to real-time projects and enhanced my problem-solving and teamwork skills. I&apos;m also certified in various technologies like<span className="font-bold"> MongoDB, React.js, and Java </span> from Codecademy.

        </p>
        <p className="sm:text-3xl lg:text-2xl">

I love bringing creative ideas to life through clean code and modern design. I&apos;m a quick learner, flexible with work shifts, and always eager to take on new challenges.

        </p>
        </div>
        <div className="w-3/3 mt-15  flex-col p-4">
        <div >
          <h1 className=" flex gap-4 font-bold text-3xl mb-8 items-center  sm:text-5xl">{<FaLaptopCode className="text-[var(--secondary)] text-4xl sm:text-7xl"></FaLaptopCode>}Use at work</h1>
          <ul className="flex gap-4 flex-wrap text-2xl sm:text-3xl">
            <li className="p-4 py-1.5 bg-transparent border-2 border-white rounded-xl">JavaScript</li>
            <li className="p-4 py-1.5 bg-transparent border-2 border-white rounded-xl">Java</li>
            <li className="p-4 py-1.5 bg-transparent border-2 border-white rounded-xl">HTML</li>
            <li className="p-4 py-1.5 bg-transparent border-2 border-white rounded-xl">Tailwind CSS</li>
            <li className="p-4 py-1.5 bg-transparent border-2 border-white rounded-xl">Data Structure & Algorithms</li>
            <li className="p-4 py-1.5 bg-transparent border-2 border-white rounded-xl">GitHub</li>
            
            <li className="p-4 py-1.5 bg-transparent border-2 border-white rounded-xl">MongoDB</li>
            <li className="p-4 py-1.5  bg-transparent border-2 border-white rounded-xl">MySQL</li>
            <li className="p-4 py-1.5  bg-transparent border-2 border-white rounded-xl">React js</li>
            <li className="p-4 py-1.5  bg-transparent border-2 border-white rounded-xl">Node js</li>
            <li className="p-4 py-1.5  bg-transparent border-2 border-white rounded-xl">Express</li>
          </ul>

        </div>
        </div>
      </section>
    );
  };
  
  export default About;
  