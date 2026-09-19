import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["about", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[6vw] lg:px-[12vw] ${
        isScrolled
          ? "bg-[#050414]/80 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center text-white">
        
        {/* Brand Logo */}
        <div
          onClick={() => handleMenuItemClick("about")}
          className="text-xl sm:text-2xl font-bold cursor-pointer tracking-wider flex items-center gap-1 group"
        >
          <span className="text-purple-400 font-mono group-hover:text-purple-300 transition">&lt;</span>
          <span className="text-white font-extrabold group-hover:text-purple-200 transition">RAHUL</span>
          <span className="text-purple-400 font-mono">/</span>
          <span className="text-purple-400 group-hover:text-purple-300 transition">KUMAR</span>
          <span className="text-purple-400 font-mono group-hover:text-purple-300 transition">&gt;</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-gray-950/40 p-1.5 rounded-full border border-purple-500/20 backdrop-blur-md">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(130,69,236,0.5)] font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-purple-900/30"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right CTA & Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/RahulKr2005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-transform transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-kumar-50275b380"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-transform transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>

          <button
            onClick={() => handleMenuItemClick("contact")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/40 text-purple-200 hover:text-white text-xs font-semibold tracking-wide uppercase transition-all duration-300 shadow-[0_0_10px_rgba(130,69,236,0.2)]"
          >
            <FaPaperPlane className="text-xs" />
            <span>Hire Me</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full px-[6vw] pt-4 pb-6 bg-[#050414]/95 border-b border-purple-500/30 backdrop-blur-2xl shadow-2xl transition-all duration-300">
          <ul className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full text-left px-5 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                      : "text-gray-300 hover:bg-purple-900/30 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between pt-6 mt-4 border-t border-purple-500/20">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/RahulKr2005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 text-xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-kumar-50275b380"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 text-xl"
              >
                <FaLinkedin />
              </a>
            </div>

            <button
              onClick={() => handleMenuItemClick("contact")}
              className="px-5 py-2.5 rounded-xl bg-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
