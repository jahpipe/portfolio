import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Account Management & Inventory",
    description:
      "An inventory system with user roles, authentication, and real-time stock updates.",
    image: "fishbroker.png",
  },
  {
    title: "Leave Management System",
    description:
      "Built with Node.js and React, this app allows employees to apply for leave and managers to approve or reject.",
    image: "lms.png",
  },
  {
    title: "Coffee Store",
    description:
      "Responsive online store with product listings and cart. Styled with Tailwind, backend built using Express.",
    image: "coffe.png",
  },
];

const Project = () => {
  const [selected, setSelected] = useState<null | typeof projects[0]>(null);

  return (
    <section
      id="project"
      className="min-h-screen py-20 px-6 sm:px-10 bg-gray-950 text-white"
    >
      <h2 className="text-4xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
        Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/70 border border-cyan-700 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 group transition-all duration-300 cursor-pointer"
            onClick={() => setSelected(proj)}
          >
            <div className="overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-cyan-300">{proj.title}</h3>
              <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                {proj.description}
              </p>
              <span className="inline-block mt-4 text-sm text-pink-500 hover:underline">
                Click to view
              </span>
            </div>
          </motion.div>
        ))}
      </div>
       
      {/* Modal */}
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
              <button
                onClick={() => setSelected(null)}
                className="mt-4 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-md text-white"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
