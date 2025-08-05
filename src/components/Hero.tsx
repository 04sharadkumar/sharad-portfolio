
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-indigo-500 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
            Sharad Kumar
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-sm sm:text-base font-light tracking-widest uppercase text-slate-400">
          Full Stack Developer 
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
         I turn ideas into powerful web applications using the full stack, merging cutting-edge technologies with user-centered design to create seamless digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/50 
                     backdrop-blur-sm rounded-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] 
                     transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span className="font-medium">Contact Me</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="group px-8 py-4 bg-gradient-to-r from-lime-500/20 to-rose-500/20 border border-lime-500/50 
                           backdrop-blur-sm rounded-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(132,204,22,0.3)] 
                           transition-all duration-300 flex items-center justify-center gap-2">
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            <a
  href="/Sharadkumar_B.Tech4B.pdf"
  download
  className="cursor-pointer text-cyan-400 hover:text-white transition-colors duration-300"
>
  <span className="font-medium">Download Resume</span>
</a>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;