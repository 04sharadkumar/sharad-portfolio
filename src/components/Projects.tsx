
import { ExternalLink, Github} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Music Promotion Website',
      description: 'Designed and built a modern, responsive frontend-only platform to help artists promote music',
      image: '/image0.png',
      technologies: ['Next js', 'Tailwind', 'TypeScript'],
      codeUrl: 'https://github.com/04sharadkumar/MusicPromotion',
      liveUrl: 'https://music-promotion.vercel.app/'
    },
    {
      title: 'Nexus News Portal ',
      description: 'Developed a real-time full-stack news platform with category-wise filtering and editor dashboard ',
      image: '/image1.png',
      technologies: ['React','Tailwind Css', 'Node.js'],
      codeUrl: 'https://github.com/04sharadkumar/NexusNews',
      liveUrl: 'https://nexus-frontend-gamma.vercel.app/'
    },
     {
    title: 'TM Ecommerce Website (In Progress)',
    description: 'Currently building a full-stack e-commerce platform for clothing with product filtering, cart, and admin panel',
    image: '/image2.png',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    codeUrl: '', // optional until ready
    liveUrl: ''
  }

    
   
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-rose-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl overflow-hidden 
                       hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300
                       hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded-md border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.codeUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 
                             hover:from-slate-700 hover:to-slate-600 rounded-lg transition-all duration-300 text-sm font-medium
                             hover:scale-105 hover:shadow-lg"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-lime-500 to-rose-500 
                             hover:from-lime-400 hover:to-rose-400 rounded-lg transition-all duration-300 text-sm font-medium
                             hover:scale-105 hover:shadow-[0_0_20px_rgba(132,204,22,0.3)]"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;