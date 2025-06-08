import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "ACCOUNT MANAGEMENT & INVENTORY",
    description: "A cool web app.",
    image: "/fishbroker.png",
  },
  {
    title: "LEAVE MANAGEMENT SYSTEM",
    description: "Mobile app development.",
    image: "/lms.png",
  },
  {
    title: "COFFE STORE",
    description: "Open source contributions.",
    image: "/coffe.png",
  },
];

const Project = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="project" className="min-h-screen p-8 bg-gray-700 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(99, 102, 241, 0.5)",
            }}
            onClick={() => setSelectedImage(proj.image)}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged Project"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-3xl max-h-[80vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
