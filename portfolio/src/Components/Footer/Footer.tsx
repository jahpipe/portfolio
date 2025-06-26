import { FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-300 px-6 pt-12 pb-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">

      {/* Column 1: Name & Intro */}
      <div>
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
          Jovanie Moreno
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Entry-Level Developer building responsive full-stack apps with React, Node.js, MySQL & MongoDB.
        </p>
      </div>

      {/* Column 2: Navigation Links */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          {[
            { label: "About", href: "#about" },
            { label: "Projects", href: "#project" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-cyan-400 transition-all duration-200 hover:underline underline-offset-4"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Contact Info */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center justify-center sm:justify-start gap-2">
            <FaEnvelope className="text-cyan-400" />
            <a
              href="mailto:jovaniemoreno420@gmail.com"
              className="hover:text-cyan-400 transition duration-200"
            >
              jovaniemoreno420@gmail.com
            </a>
          </li>
          <li className="flex items-center justify-center sm:justify-start gap-2">
            <FaGithub className="text-cyan-400" />
            <a
              href="https://github.com/jahpipe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition duration-200"
            >
              github.com/jahpipe
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center text-gray-500 relative">
      &copy; {new Date().getFullYear()} Jovanie Moreno. All rights reserved.

      {/* Scroll-to-top Button */}
      <a
        href="#main"
        title="Back to top"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-white transition sm:right-8"
      >
        <FaArrowUp size={18} />
      </a>
    </div>
  </footer>
);

export default Footer;
