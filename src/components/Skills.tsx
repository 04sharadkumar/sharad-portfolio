
import { Code, Database, Palette,  Globe, GitBranch } from 'lucide-react';

const Skills = () => {
  const skills = [
    { icon: Code, title: 'Frontend Development', color: 'border-cyan-500 text-cyan-400', description: 'React, JavaScript, Next.js' },
    { icon: Database, title: 'Backend Development', color: 'border-violet-500 text-violet-400', description: 'Node.js , Express js , MongoDB ' },
    { icon: Palette, title: 'UI/UX Design', color: 'border-rose-500 text-rose-400', description: 'Canva' },
    
    { icon: Globe, title: 'Web Technologies', color: 'border-cyan-500 text-cyan-400', description: 'HTML5, CSS3, JavaScript' },
    
   
    { icon: GitBranch, title: 'Version Control', color: 'border-lime-500 text-lime-400', description: 'Git  , GitHub' }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.title}
                className={`group p-6 backdrop-blur-sm bg-white/5 border ${skill.color} rounded-xl 
                          hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] 
                          transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className={skill.color.split(' ')[1]} />
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;