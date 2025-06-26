import { useState, type MouseEvent } from "react";
import { FaHome, FaUser, FaEnvelope, FaFolderOpen } from "react-icons/fa";
import Main from "../Main/Main";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Project from "../../pages/Project";
import Footer from "../Footer/Footer";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close sidebar on mobile
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-950 text-white">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-indigo-600 text-white p-2 rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white z-40 transform transition-transform duration-300 shadow-lg
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Profile */}
          <div className="flex flex-col items-center py-8 px-6 border-b border-gray-700">
            <img
              src="moreno.png"
              alt="Profile"
              className="w-32 h-32 object-cover border-4 border-indigo-500 shadow-md rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">Jovanie Moreno</h2>
            <p className="text-xs text-indigo-400 uppercase tracking-widest">
              Software Developer
            </p>
          </div>

          {/* Nav */}
          <nav className="flex-1 px-6 py-8 overflow-y-auto">
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a
                  href="#main"
                  onClick={handleScroll("main")}
                  className="flex items-center gap-4 px-4 py-3 rounded-md hover:bg-indigo-600"
                >
                  <FaHome className="w-4 h-4" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={handleScroll("about")}
                  className="flex items-center gap-4 px-4 py-3 rounded-md hover:bg-indigo-600"
                >
                  <FaUser className="w-4 h-4" />
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={handleScroll("contact")}
                  className="flex items-center gap-4 px-4 py-3 rounded-md hover:bg-indigo-600"
                >
                  <FaEnvelope className="w-4 h-4" />
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  onClick={handleScroll("project")}
                  className="flex items-center gap-4 px-4 py-3 rounded-md hover:bg-indigo-600"
                >
                  <FaFolderOpen className="w-4 h-4" />
                  Project
                </a>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-700 text-gray-500 text-xs text-center">
            © 2025 Jovanie Moreno
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen bg-gray-950">
        <div className="flex-grow">
          <section id="main" className="min-h-screen">
            <Main />
          </section>
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
          <section id="project" className="min-h-screen">
            <Project />
          </section>
        </div>
        <footer id="footer">
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default Sidebar;
