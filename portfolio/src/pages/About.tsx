import { FaGraduationCap, FaCode, FaTools } from "react-icons/fa";

const About = () => (
  <section
    id="about"
    className="min-h-screen px-6 sm:px-10 lg:px-20 py-20 bg-gray-950 text-white flex flex-col justify-center"
  >
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 tracking-tight">
      About Me
    </h2>

    <div className="max-w-5xl mx-auto space-y-10">
      {/* Education */}
      <div className="flex items-start gap-6 border-l-4 border-cyan-500 pl-6 py-4 bg-gray-900/50 rounded-lg shadow-md hover:shadow-cyan-600/30 transition duration-300">
        <FaGraduationCap className="text-cyan-400 text-3xl mt-1" />
        <div>
          <h3 className="text-xl font-bold text-cyan-300 mb-1">
            Educational Background
          </h3>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            I'm a recent graduate (May 2025) with a Bachelor of Science in Information Technology (BSIT). During my studies, I developed a strong interest in building websites and applications, and gained hands-on experience in development, networking, and database systems.
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex items-start gap-6 border-l-4 border-purple-500 pl-6 py-4 bg-gray-900/50 rounded-lg shadow-md hover:shadow-purple-600/30 transition duration-300">
        <FaCode className="text-purple-400 text-3xl mt-1" />
        <div>
          <h3 className="text-xl font-bold text-purple-300 mb-1">
            Technical Stack
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-base sm:text-lg">
            <li>HTML5, Tailwind CSS</li>
            <li>JavaScript (ES6+), TypeScript</li>
            <li>React.js, Node.js, Express</li>
            <li>MySQL, Mongoose, GitHub</li>
          </ul>
        </div>
      </div>

      {/* Tools */}
      <div className="flex items-start gap-6 border-l-4 border-pink-500 pl-6 py-4 bg-gray-900/50 rounded-lg shadow-md hover:shadow-pink-600/30 transition duration-300">
        <FaTools className="text-pink-400 text-3xl mt-1" />
        <div>
          <h3 className="text-xl font-bold text-pink-300 mb-1">
            Tools & Technologies
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-base sm:text-lg">
            <li>VS Code</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
