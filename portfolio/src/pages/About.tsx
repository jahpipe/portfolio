import { FaGraduationCap, FaCode, FaTools } from "react-icons/fa";

const About = () => (
  <section
    id="about"
    className="min-h-screen px-8 py-20 bg-gray-900 text-white flex flex-col justify-center"
  >
    <h2 className="text-4xl font-extrabold mb-16 border-b-4 border-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 inline-block pb-2">
      About Me
    </h2>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      
      {/* Educational Background */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-indigo-700 hover:shadow-indigo-600 transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-4">
          <FaGraduationCap className="text-indigo-400 text-3xl" />
          <h3 className="text-2xl font-semibold text-indigo-400">Educational Background</h3>
        </div>
        <p className="text-gray-300 leading-relaxed text-lg">
          Graduated May 2025 with a Bachelor’s degree in Computer Science. Developed a strong foundation in programming, algorithms, and software engineering principles through coursework and hands-on projects.
        </p>
      </div>

      {/* Technical Stack */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-indigo-700 hover:shadow-indigo-600 transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-4">
          <FaCode className="text-indigo-400 text-3xl" />
          <h3 className="text-2xl font-semibold text-indigo-400">Technical Stack</h3>
        </div>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
          <li>HTML5, CSS3</li>
          <li>JavaScript (ES6+), TypeScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>GitHub</li>
           <li>Express</li>
        </ul>
      </div>

      {/* Tools & Technologies */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-indigo-700 hover:shadow-indigo-600 transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-4">
          <FaTools className="text-indigo-400 text-3xl" />
          <h3 className="text-2xl font-semibold text-indigo-400">Tools & Technologies</h3>
        </div>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
          <li>VS Code</li>
          <li>Postman</li>
        </ul>
      </div>

    </div>
  </section>
);

export default About;
