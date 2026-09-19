import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative border-t border-purple-500/20 bg-[#03020d] text-white py-12 px-[6vw] lg:px-[12vw] font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Brand Name */}
        <h2 className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
          RAHUL KUMAR
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 max-w-md mb-6">
          Full-Stack Developer & DevOps Aspirant dedicated to crafting scalable web applications and seamless cloud workflows.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-8">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-gray-400 hover:text-purple-300 text-sm font-medium transition duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4 mb-8">
          <a
            href="https://github.com/RahulKr2005"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-900 border border-purple-500/20 text-gray-300 hover:text-purple-400 hover:border-purple-500/60 transition-transform transform hover:scale-110 shadow-md"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-kumar-50275b380"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-900 border border-purple-500/20 text-gray-300 hover:text-purple-400 hover:border-purple-500/60 transition-transform transform hover:scale-110 shadow-md"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/50 text-xs font-semibold mb-6 transition"
        >
          <FaArrowUp /> Back to top
        </button>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2026 Rahul Kumar. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
