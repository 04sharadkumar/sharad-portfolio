
import { Award, Trophy, Star, Users, Code2 } from 'lucide-react';

const Achievements = () => {
const achievements = [
    {
      icon: Code2,
      color: 'text-blue-400',
      title: 'Personal Portfolio Project',
      date: '2025',
      description: 'Built a full-stack portfolio using Next.js, Tailwind CSS, and MongoDB to showcase my skills and work'
    },
    {
      icon: Award,
      color: 'text-green-400',
      title: 'Frontend Certification',
      date: '2025',
      description: 'Completed a frontend development course covering HTML, CSS, JavaScript, and React with hands-on projects'
    },
   
   
    {
      icon: Users,
      color: 'text-cyan-500',
      title: 'Full Stack Internship',
      date: 'Mar 2024',
      description: 'Completed a 45-day full stack internship where I contributed to developing real-world web applications using MERN stack'
    },
    {
      icon: Star,
      color: 'text-pink-400',
      title: 'GitHub Contributor',
      date: '2023',
      description: 'Published multiple open-source mini projects and built a repo'
    },
    {
      icon: Trophy,
      color: 'text-indigo-400',
      title: 'Hackathon Participation',
      date: '2022',
      description: 'Participated in college tech fest and built a fully functional web app in 24 hours'
    }
  ];


  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-lime-400 to-rose-500 bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Milestones and recognition in my development journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-violet-500 to-rose-500" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={achievement.title}
                  className={`relative flex items-center ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent size={20} className={`${achievement.color} group-hover:animate-pulse`} />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`group w-full sm:w-5/12 ml-20 sm:ml-0 ${
                    isEven ? 'sm:pr-8' : 'sm:pl-8'
                  }`}>
                    <div className="p-6 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-white">
                          {achievement.title}
                        </h3>
                        <span className="text-sm text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;