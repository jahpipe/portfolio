import { useState, useEffect } from "react";

// Typing animation logic
const phrases = [
  "I'm a passionate Software Developer.",
  "I love creating amazing web apps.",
  "I enjoy learning new technologies.",
];

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
      setSpeed(50);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      setSpeed(150);
    } else {
      timer = setTimeout(() => {
        setText((prev) =>
          isDeleting
            ? currentPhrase.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, speed]);

  return (
    <p className="text-lg md:text-xl font-medium text-white border-r-2 border-indigo-300 pr-2 whitespace-nowrap overflow-hidden animate-blink">
      {text}
    </p>
  );
};

const Main = () => {
  return (
    <section
      id="main"
      className="relative flex flex-col md:flex-row-reverse items-center justify-center gap-12 min-h-screen px-4 md:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-indigo-500 opacity-20 blur-3xl rounded-full animate-pulseSlow"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulseSlow"></div>

      {/* Profile Image */}
      <div className="flex-shrink-0 z-10">
        <img
          src="jovanie.png"
          alt="Profile"
          className="w-[300px] h-[300px] object-cover rounded-full border-4 border-indigo-500 shadow-2xl"
        />
      </div>

      {/* Text Box */}
      <div className="z-10 text-center md:text-left max-w-md text-white space-y-6">
        <p className="italic text-indigo-300 text-lg">Hello, my name is</p>
        <h1 className="text-4xl font-extrabold uppercase tracking-wide text-indigo-500">
          Jovanie MORENO
        </h1>
        <TypingAnimation />

        <a
          href="/portfolio/Resume.pdf"
          download
          className="inline-block mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/30 transition-all duration-300 rounded-lg font-semibold shadow-lg text-white"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Main;
