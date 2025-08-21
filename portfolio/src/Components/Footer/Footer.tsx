import { FaGithub, FaEnvelope, FaLinkedin, FaArrowUp, FaLaptopCode, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-300 px-6 pt-12 pb-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">

      {/* Column 1: Name & Mini Bio */}
      <div>
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
          Jovanie Moreno
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Entry-Level Developer building responsive full-stack apps with React, Node.js, MySQL & MongoDB.
        </p>
        <div className="flex gap-3 mt-4 justify-center sm:justify-start">
          <a href="https://github.com/jahpipe" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition" title="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="mailto:jovaniemoreno420@gmail.com" className="text-cyan-400 hover:text-white transition" title="Email">
            <FaEnvelope size={20} />
          </a>
          <a href="https://www.linkedin.com/in/jovanie-moreno/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition" title="LinkedIn">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Column 2: Skills with hover animation */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Skills</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2 group hover:text-cyan-400 transition">
            <FaReact className="text-cyan-400 group-hover:animate-bounce" /> React.js
          </li>
          <li className="flex items-center gap-2 group hover:text-cyan-400 transition">
            <FaNodeJs className="text-cyan-400 group-hover:animate-bounce" /> Node.js
          </li>
          <li className="flex items-center gap-2 group hover:text-cyan-400 transition">
            <FaDatabase className="text-cyan-400 group-hover:animate-bounce" /> MySQL / MongoDB
          </li>
          <li className="flex items-center gap-2 group hover:text-cyan-400 transition">
            <FaLaptopCode className="text-cyan-400 group-hover:animate-bounce" /> Tailwind CSS / Responsive Design
          </li>
        </ul>
      </div>

      {/* Column 3: Contact Info + Mini Projects */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center justify-center sm:justify-start gap-2">
            <FaEnvelope className="text-cyan-400" />
            <a href="mailto:jovaniemoreno420@gmail.com" className="hover:text-cyan-400 transition duration-200">
              jovaniemoreno420@gmail.com
            </a>
          </li>
          <li className="flex items-center justify-center sm:justify-start gap-2">
            <FaGithub className="text-cyan-400" />
            <a href="https://github.com/jahpipe" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-200">
              github.com/jahpipe
            </a>
          </li>
        </ul>
        
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-gray-500 flex items-center justify-center sm:justify-between">
      <span>&copy; {new Date().getFullYear()} Jovanie Moreno. All rights reserved.</span>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} title="Back to top" className="text-cyan-400 hover:text-white transition">
        <FaArrowUp size={18} />
      </button>
    </div>
  </footer>
);

export default Footer;
