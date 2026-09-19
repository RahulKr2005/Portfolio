import { useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", ...SkillsInfo.map((cat) => cat.title)];

  const filteredSkills =
    activeTab === "All"
      ? SkillsInfo
      : SkillsInfo.filter((cat) => cat.title === activeTab);

  return (
    <section
      id="skills"
      className="relative py-20 px-[6vw] lg:px-[12vw] font-sans"
    >
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          TECH STACK & <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">SKILLS</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(130,69,236,0.8)]"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          A comprehensive suite of modern technologies and engineering tools honed across full-stack & DevOps projects.
        </p>
      </div>

      {/* Interactive Category Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(130,69,236,0.6)] border border-purple-400/40"
                : "bg-gray-900/60 text-gray-400 hover:text-white hover:bg-purple-950/40 border border-purple-500/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredSkills.map((category) => (
          <div
            key={category.title}
            className="group relative bg-gray-950/60 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-purple-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-purple-500/50 transition-all duration-500"
          >
            {/* Ambient Card Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent rounded-3xl pointer-events-none group-hover:from-purple-600/10 transition-all duration-500"></div>

            <div className="flex items-center justify-between mb-6 pb-3 border-b border-purple-500/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                {category.title}
              </h3>
              <span className="text-xs text-purple-400 font-semibold px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30">
                {category.skills.length} Technologies
              </span>
            </div>

            {/* Skill Items Grid */}
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={800}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-gray-900/80 border border-purple-500/15 hover:border-purple-400/50 rounded-2xl p-3 text-left transition-all duration-300 hover:bg-purple-950/40 hover:shadow-[0_0_15px_rgba(130,69,236,0.3)] hover:-translate-y-1"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center p-1.5 bg-gray-950 rounded-xl border border-purple-500/20 shrink-0">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-200 truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
