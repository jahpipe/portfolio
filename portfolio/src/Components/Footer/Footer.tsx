const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 px-6 border-t border-gray-700">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">

      {/* Left: Name / Tagline */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Jovanie</h2>
        <p className="text-sm text-gray-400">Web Developer (React, Node, MySQL)
Passionate about turning ideas into efficient code.
</p>
      </div>

      {/* Middle: Quick Links */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#about" className="hover:text-indigo-400 transition-all duration-200 hover:underline underline-offset-4">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-400 transition-all duration-200 hover:underline underline-offset-4">Contact</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-400 transition-all duration-200 hover:underline underline-offset-4">Projects</a>
          </li>
        </ul>
      </div>

      {/* Right: Contact / Socials */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="mailto:jovaniemoreno420@gmail.com" className="hover:text-indigo-400 transition-all duration-200 hover:underline underline-offset-4">
              📧 jovaniemoreno420@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-all duration-200 hover:underline underline-offset-4">
              🐙 github.com/yourusername
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Copyright */}
    <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Jovanie. All rights reserved.
    </div>
  </footer>
);

export default Footer;
