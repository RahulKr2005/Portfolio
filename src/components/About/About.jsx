import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/rahul.jpeg';
import { bioMessage } from '../../constants';
import { FaGithub, FaLinkedin, FaDownload, FaPaperPlane } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="relative py-12 md:py-24 px-[6vw] lg:px-[12vw] font-sans mt-10 md:mt-16 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 relative z-10">
        
        {/* Left Side Info */}
        <div className="w-full lg:w-7/12 text-center lg:text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(130,69,236,0.2)]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-purple-300 tracking-wide uppercase">
              Full-Stack & DevOps Specialist
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight leading-tight">
            Hi, I am <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">RAHUL KUMAR</span>
          </h1>

          {/* Typing Subheading */}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-purple-400 flex flex-wrap justify-center lg:justify-start items-center gap-2">
            <span className="text-gray-300">I am a </span>
            <ReactTypingEffect
              text={[
                'Full Stack Developer',
                'DevOps Engineer',
              ]}
              speed={80}
              eraseSpeed={40}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-purple-400 font-bold">{cursor}</span>
              )}
            />
          </h3>

          {/* Bio Message */}
          <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed font-normal bg-gray-900/40 p-5 sm:p-6 rounded-2xl border border-purple-500/20 backdrop-blur-md shadow-inner">
            {bioMessage}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white py-3.5 px-7 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-[0_0_25px_rgba(130,69,236,0.5)] bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500"
            >
              <FaPaperPlane className="text-sm" />
              <span>Send Me A Message</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-white py-3.5 px-6 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 backdrop-blur-md"
            >
              <span>Explore Projects &darr;</span>
            </a>

            {/* Quick Social Buttons */}
            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://github.com/RahulKr2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-gray-900/80 text-gray-300 hover:text-purple-400 border border-gray-800 hover:border-purple-500/40 transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-kumar-50275b380"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-gray-900/80 text-gray-300 hover:text-purple-400 border border-gray-800 hover:border-purple-500/40 transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Right Side Photo */}
        <div className="w-full lg:w-5/12 flex justify-center">
          <Tilt
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] rounded-3xl"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.03}
            transitionSpeed={1000}
            gyroscope={true}
          >
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 rounded-3xl blur-xl opacity-75 animate-pulse"></div>
            
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-purple-400/40 bg-gray-950 p-2 shadow-2xl">
              <img
                src={profileImage}
                alt="Rahul Kumar"
                className="w-full h-full rounded-2xl object-cover object-top filter brightness-105 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;
