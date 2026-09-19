import { EducationInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaAward } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="relative py-20 px-[6vw] lg:px-[12vw] font-sans">
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          EDUCATION & <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">BACKGROUND</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(130,69,236,0.8)]"></div>
        <p className="text-gray-300 mt-4 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          Academic qualification, foundational engineering coursework, and technical training.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {EducationInfo.map((item) => (
          <Tilt
            key={item.id}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            perspective={1000}
            scale={1.01}
            transitionSpeed={800}
            className="w-full"
          >
            <div className="bg-gray-950/70 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-purple-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-purple-500/50 transition-all duration-300 relative group">
              
              {/* Card Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5 rounded-3xl pointer-events-none group-hover:from-purple-600/10 transition-all duration-500"></div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-purple-500/20">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-purple-400 shrink-0 shadow-lg">
                    <FaGraduationCap size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                      {item.institution}
                    </h3>
                    <p className="text-purple-400 font-semibold text-sm sm:text-base mt-1 flex items-center gap-1.5">
                      <FaAward className="text-xs" />
                      {item.degree}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end gap-2 text-right">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
                    <FaCalendarAlt className="text-xs" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <FaMapMarkerAlt className="text-purple-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Focus Areas:</h4>
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1.5 rounded-xl bg-purple-900/30 border border-purple-500/20 text-purple-200 text-xs font-semibold"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Education;
