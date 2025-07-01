import {
  FaGraduationCap,
  FaReact,
  FaNode,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaTools,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

const info = [
  {
    title: "BS in Information Technology",
    icon: <FaGraduationCap className="text-white text-xl" />,
    color: "from-cyan-500 to-blue-500",
    content: (
      <>
        <p>
          Graduated with a{" "}
          <span className="font-semibold text-white">
            Bachelor of Science in Information Technology
          </span>{" "}
          from Franciscan College of the Immaculate Conception (2021–2025).
        </p>
        <p>Focused on full-stack development, networking.</p>
      </>
    ),
  },
  {
    title: "TVL Track - Vocational",
    icon: <FaGraduationCap className="text-white text-xl" />,
    color: "from-indigo-500 to-violet-600",
    content: (
      <>
        <p>
          Completed the{" "}
          <span className="font-semibold text-white">
            TVL (Technical Vocational and Livelihood) Track
          </span>{" "}
          at Baybay City Senior High School (2017–2018).
        </p>
      </>
    ),
  },
  {
    title: "Technical Stack & Tools",
    icon: <FaTools className="text-white text-xl" />,
    color: "from-purple-500 to-pink-500",
    content: (
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-5xl text-gray-300">
          <div title="HTML5">
            <FaHtml5 className="text-orange-500 hover:scale-110 transition-transform" />
          </div>
          <div title="CSS3">
            <FaCss3Alt className="text-blue-500 hover:scale-110 transition-transform" />
          </div>
          <div title="JavaScript">
            <FaJsSquare className="text-yellow-300 hover:scale-110 transition-transform" />
          </div>
          <div title="TypeScript">
            <SiTypescript className="text-blue-400 hover:scale-110 transition-transform" />
          </div>
          <div title="React">
            <FaReact className="text-cyan-300 hover:scale-110 transition-transform" />
          </div>
          <div title="Next.js">
            <SiNextdotjs className="text-white hover:scale-110 transition-transform" />
          </div>
          <div title="Tailwind CSS">
            <SiTailwindcss className="text-cyan-400 hover:scale-110 transition-transform" />
          </div>
          <div title="Node.js">
            <FaNode className="text-green-400 hover:scale-110 transition-transform" />
          </div>
          <div title="MongoDB">
            <SiMongodb className="text-green-500 hover:scale-110 transition-transform" />
          </div>
          <div title="MySQL">
            <SiMysql className="text-yellow-400 hover:scale-110 transition-transform" />
          </div>
          <div title="GitHub">
            <FaGithub className="text-white hover:scale-110 transition-transform" />
          </div>
          <div title="Postman">
            <SiPostman className="text-orange-400 hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    ),
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const About = () => (
  <section
    id="about"
    className="min-h-screen px-6 sm:px-10 lg:px-20 py-20 bg-gray-950 text-white"
  >
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 tracking-tight">
      About Me
    </h2>

    <div className="space-y-14 relative">
      {info.map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`flex flex-col ${
            i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
          } items-start sm:items-center gap-6`}
        >
          <div
            className={`min-w-[3rem] min-h-[3rem] rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
          >
            {item.icon}
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 w-full shadow-md">
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-2">
              {item.content}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default About;
