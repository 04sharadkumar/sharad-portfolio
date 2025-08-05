
import { Github, Linkedin, Mail, Heart, Coffee } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/04sharadkumar',
      label: 'GitHub',
      hoverColor: 'hover:text-cyan-400 hover:scale-110'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sharad-kumar-165a68283/',
      label: 'LinkedIn',
      hoverColor: 'hover:text-violet-400 hover:scale-110'
    },
    {
      icon: Mail,
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=04sharadkumar@gmail.com',
      label: 'Email',
      hoverColor: 'hover:text-rose-400 hover:scale-110'
    }
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-white/5 border border-white/10 
                          hover:bg-white/10 hover:border-white/20 transition-all duration-300
                          ${link.hoverColor} hover:shadow-lg group`}
                aria-label={link.label}
              >
                <IconComponent size={24} className="transition-transform duration-300" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="space-y-2">
          <p className="text-slate-400 flex items-center justify-center gap-2 text-sm">
            © 2025 Sharad. Made with 
            <Heart size={16} className="text-rose-400 animate-pulse" /> 
            and 
            <Coffee size={16} className="text-yellow-400" />
          </p>
          <p className="text-slate-500 text-xs">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>

        {/* Back to top indicator */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full 
                   bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30
                   hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] 
                   transition-all duration-300 group"
          aria-label="Back to top"
        >
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-cyan-400 group-hover:border-b-white transition-colors" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;