import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (
    <div className="bg-[#030014] text-white min-h-screen relative overflow-x-hidden selection:bg-purple-500 selection:text-white font-sans">

      {/* Ambient Radial Gradient Blobs */}
      <BlurBlob position={{ top: '15%', left: '10%' }} size={{ width: '35%', height: '40%' }} />
      <BlurBlob position={{ top: '40%', left: '70%' }} size={{ width: '35%', height: '40%' }} />
      <BlurBlob position={{ top: '65%', left: '20%' }} size={{ width: '35%', height: '40%' }} />
      <BlurBlob position={{ top: '85%', left: '65%' }} size={{ width: '35%', height: '35%' }} />

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
      
      {/* App Content */}
      <div className="relative z-10">
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
