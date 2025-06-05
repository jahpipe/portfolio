import { FaHome, FaUser, FaEnvelope, FaFolderOpen } from "react-icons/fa";
import Main from "../Main/Main";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Project from "../../pages/Project";
import Footer from "../Footer/Footer";

const Sidebar = () => {
  return (
    <div className="scroll-smooth">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-lg text-white flex flex-col z-50">
        {/* Profile Section */}
        <div className="flex flex-col items-center py-8 px-6 border-b border-gray-700">
          <img
            src="/moreno.png"
            alt="Profile"
            className="w-40 h-34 object-cover border-4 border-indigo-500 shadow-md rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold">Jovanie Moreno</h2>
          <p className="text-xs text-indigo-400 uppercase tracking-widest">Software Developer</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-6 py-8">
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <a href="#main" className="flex items-center gap-4 px-4 py-3 rounded-md hover:bg-indigo-600 transition duration-300">
                <FaHome className="w-4 h-4" />
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="flex items-center gap-4 px-4 py-3 rounded-md hover:bg-indigo-600 transition duration-300">
                <FaUser className="w-4 h-4" />
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center gap-4 px-4 py-3 rounded-md hover:bg-indigo-600 transition duration-300">
                <FaEnvelope className="w-4 h-4" />
                Contact
              </a>
            </li>
            <li>
              <a href="#project" className="flex items-center gap-4 px-4 py-3 rounded-md hover:bg-indigo-600 transition duration-300">
                <FaFolderOpen className="w-4 h-4" />
                Project
              </a>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-700 text-gray-500 text-xs text-center select-none">
          © 2025 Jovanie Moreno
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        <section id="main">
          <Main />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="project">
          <Project />
        </section>

          <section id="project">
          <Footer/>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
