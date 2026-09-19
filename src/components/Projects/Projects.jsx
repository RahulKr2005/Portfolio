import { useState } from "react";
import { ProjectsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "Frontend"];

  const filteredProjects =
    filter === "All"
      ? ProjectsInfo
      : ProjectsInfo.filter((item) => item.category === filter);

  return (
    <section id="projects" className="relative py-20 px-[6vw] lg:px-[12vw] font-sans">
      {/* Background Accent Blur */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          FEATURED & <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">PROJECTS</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(130,69,236,0.8)]"></div>
        <p className="text-gray-300 mt-4 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          A showcase of scalable web applications, modern responsive interfaces, and engineering tools built with clean code and modern practices.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              filter === cat
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(130,69,236,0.6)] border border-purple-400/40"
                : "bg-gray-900/60 text-gray-400 hover:text-white hover:bg-purple-950/40 border border-purple-500/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1.02}
            transitionSpeed={800}
            className="flex"
          >
            <div className="w-full flex flex-col justify-between bg-gray-950/70 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-purple-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-purple-500/50 transition-all duration-300 group relative">
              
              {/* Card Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-indigo-600/5 rounded-3xl pointer-events-none group-hover:from-purple-600/10 group-hover:to-indigo-600/10 transition-all duration-500"></div>

              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    <FaFolderOpen size={20} />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-gray-900 text-gray-300 border border-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-purple-500/15">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 hover:text-white text-xs font-semibold border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <FaGithub size={14} />
                    <span>Source Code</span>
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold transition-all duration-300 shadow-[0_0_12px_rgba(130,69,236,0.3)]"
                    >
                      <FaExternalLinkAlt size={12} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
