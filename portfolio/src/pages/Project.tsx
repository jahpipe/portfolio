import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  live?: string;
  github?: string;
  tags?: string[];
};

const projects: Project[] = [
  {
    title: "BurgerBuddy Auth System",
    description:
      "Secure fullstack authentication system using JWT, HTTP-only cookies, session control, and RBAC.",
    image: "burger.png",
    github: "https://github.com/jahpipe/Account-Authentication",
    live: "https://authentacation-login.vercel.app/",
    tags: ["React", "JWT", "MongoDB", "Node.js"],
  },
  {
    title: "Account Inventory",
    description:
      "Inventory system with analytics dashboard, protected routes, and role-based access.",
    image: "fishbroker.png",
    live: "https://account-inventory.vercel.app",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    title: "Leave Management System",
    description:
      "Employees can submit leave requests, and managers can approve/reject them. Session-based auth.",
    image: "lms.png",
    live: "https://leave-management.vercel.app",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    title: "Coffee Store",
    description:
      "Responsive ecommerce site with cart, filters, and checkout system.",
    image: "coffe.png",
    live: "https://coffee-store.vercel.app",
    tags: ["React", "Tailwind", "Express"],
  },
];

export default function ProjectSection() {
  const [selected, setSelected] = useState<null | Project>(null);

  return (
    <section
      id="project"
      className="min-h-screen py-20 px-6 sm:px-10 bg-gradient-to-br from-gray-900 to-gray-950 text-white"
    >
      <h2 className="text-4xl font-bold mb-16 text-center text-cyan-400">
        My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-800 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-cyan-500/30 group cursor-pointer transition-all"
            onClick={() => setSelected(proj)}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-cyan-300">{proj.title}</h3>
              <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                {proj.description}
              </p>
              <div className="flex gap-2 flex-wrap mt-3">
                {proj.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs bg-cyan-700 text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 p-6 rounded-xl max-w-xl w-full shadow-2xl space-y-4"
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-60 object-cover rounded-md"
              />
              <h3 className="text-2xl font-bold text-cyan-400">
                {selected.title}
              </h3>
              <p className="text-gray-300">{selected.description}</p>

              <div className="flex flex-wrap gap-3 mt-4">
                {selected.live && (
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md transition"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition"
                  >
                    <Github size={16} /> GitHub Repo
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-md text-white"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
