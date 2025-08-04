const Exper = () => {
  return (
    <section id="exper" className="px-6 sm:px-10 md:px-20 pb-20">
      <h1 className="font-extrabold text-4xl sm:text-5xl mb-10">
        Experience<span className="text-[var(--btn)]">.</span>
        <hr className="border-t-2 my-1 border-gray-500" />
      </h1>

      {/* Tata Strive Experience */}
      <div>
        <div className="flex justify-between text-lg sm:text-2xl md:text-3xl">
          <h1 className="font-bold">Tata Strive</h1>
          <h1>2024–2025</h1>
        </div>
        <div className="flex justify-between text-base sm:text-xl md:text-2xl">
          <h1 className="text-[var(--secondary)] font-extrabold">Junior FullStack Developer Intern</h1>
          <h1 className="font-light">Chromepet</h1>
        </div>
        <p className="mt-2 text-base sm:text-lg md:text-xl">
          Developed web applications using <span className="font-medium">HTML, CSS, JavaScript, and React.js.</span> Worked with <span className="font-medium">MySQL</span> for database management and performed CRUD operations. Collaborated in team-based projects, improving <span className="font-medium">communication, problem-solving,</span> and <span className="font-medium">project management</span> skills.
        </p>
        <ul className="flex gap-3 flex-wrap my-3 text-sm sm:text-base md:text-lg">
          {['Java', 'HTML', 'CSS', 'JavaScript', 'React Js', 'Mongo DB', 'MySQL'].map((skill) => (
            <li key={skill} className="px-4 py-1.5 bg-stone-700 rounded">{skill}</li>
          ))}
        </ul>
        <hr className="border-t-1 my-1 border-gray-500" />
      </div>

      {/* Nexus Internship */}
      <div className="mt-5">
        <div className="flex justify-between text-lg sm:text-2xl md:text-3xl">
          <h1 className="font-bold">Nexus Private Limited</h1>
          <h1>Aug 2024 – Sep 2024</h1>
        </div>
        <div className="flex justify-between text-base sm:text-xl md:text-2xl">
          <h1 className="text-[var(--secondary)] font-extrabold">FrontEnd Developer Intern</h1>
          <h1 className="font-light">Chennai</h1>
        </div>
        <p className="mt-2 text-base sm:text-lg md:text-xl">
          Developed web applications using <span className="font-medium">HTML, CSS, JavaScript, and React.js.</span> Worked with <span className="font-medium">MySQL</span> for database management and performed CRUD operations. Collaborated in team-based projects, improving <span className="font-medium">communication, problem-solving,</span> and <span className="font-medium">project management</span> skills.
        </p>
        <ul className="flex gap-3 flex-wrap my-3 text-sm sm:text-base md:text-lg">
          {['HTML', 'CSS', 'JavaScript'].map((skill) => (
            <li key={skill} className="px-4 py-1.5 bg-stone-700 rounded">{skill}</li>
          ))}
        </ul>
        <hr className="border-t-1 my-1 border-gray-500" />
      </div>
    </section>
  );
};

export default Exper;
