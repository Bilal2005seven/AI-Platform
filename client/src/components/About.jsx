import React from 'react';
import { Mail, Phone, Github, Linkedin, Code2, Users, Heart } from 'lucide-react';

export default function AboutPage() {
  const skills = [
    'JavaScript/TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
    'HTML5/CSS3', 'PERN Stack', 'RESTful APIs', 'GraphQL', 'Langchain', 'LangGraph',
    'RAG Applications', 'FastAPI', 'MERN Integration', 'Responsive Design', 'CRUD', 'Docker'
  ];

  const interests = [
    {
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      title: 'Code',
      description: 'Exploring Japanese animation as both an art form and storytelling medium.'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: 'Gaming',
      description: 'Strategic thinking and problem-solving through the world\'s most enduring game.'
    },
    {
      icon: <Heart className="w-8 h-8 text-cyan-400" />,
      title: 'Community',
      description: 'Contributing to community projects and open-source development.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* About Me Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">
            About Me
            <div className="h-1 w-20 bg-cyan-500 mt-2"></div>
          </h2>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I'm a versatile full-stack developer with a passion for creating elegant solutions to complex problems. With 
              experience in both front-end and back-end technologies, I thrive at the intersection of design and functionality to 
              deliver seamless user experiences.
            </p>
            
            <p>
              My journey in tech began with a curiosity about how things work, which evolved into a deep fascination with 
              building digital experiences that make a difference. I specialize in developing responsive web applications, 
              with a focus on modern JavaScript frameworks and libraries.
            </p>
            
            <p>
              Whether working on a solo side project or collaborating with a team, I'm passionate about writing clean, 
              maintainable code and staying up-to-date with the latest industry trends. I thrive on projects that leverage machine learning to solve more intelligent and refined applications. I believe in 
              continuous learning and sharing my knowledge in the pursuit of technological advancement.
            </p>
          </div>
        </section>

        {/* Contact Me Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Contact Me
            <div className="h-1 w-20 bg-cyan-500 mt-2"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="bilalz2005zofficial@gmail.com" 
               className="flex items-center gap-3 bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-cyan-500 transition-colors">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">bilalz2005zofficial@gmail.com</span>
            </a>
            
            <a href="tel:+918109182-8647" 
               className="flex items-center gap-3 bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-cyan-500 transition-colors">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">+91 706 716 3019</span>
            </a>
            
            <a href="https://github.com/Bilal2005seven" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-3 bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-cyan-500 transition-colors">
              <Github className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">github.com/Bilal2005seven</span>
            </a>
            
            <a href="https://linkedin.com/in/clairfrancis" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-3 bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-cyan-500 transition-colors">
              <Linkedin className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">linkedin.com/in/clairfrancis</span>
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Skills
            <div className="h-1 w-20 bg-cyan-500 mt-2"></div>
          </h2>
          
          <p className="text-gray-300 mb-6">
            I specialize in modern web technologies and frameworks, with a focus on building scalable and maintainable applications.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg text-gray-300 hover:border-cyan-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-white">
            Interests
            <div className="h-1 w-20 bg-cyan-500 mt-2"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-cyan-500 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-white">
                  {interest.title}
                </h3>
                <p className="text-gray-400 text-center text-sm my-12">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}