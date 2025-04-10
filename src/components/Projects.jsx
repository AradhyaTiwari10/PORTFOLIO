import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Amor AI',
    description: 'An AI App that gives a melody to your love story',
    image: 'https://i.imgur.com/BhMI6Tl.jpeg',
    github: '#',
    live: '#',
  },
  {
    title: 'Real Estate',
    description: 'Browse and explore properties with a clean, user-friendly interface.',
    image: 'https://i.imgur.com/pgEzgba.jpeg',
    github: 'https://github.com/AradhyaTiwari10/PORTFOLIO.git',
    live: 'https://realestatebyaradhya.netlify.app/',
  },
  {
    title: 'Tab-Screen-Timer Chrome Extension',
    description: 'Track your digital time with elegance and simplicity',
    image: 'https://i.imgur.com/YEe9DEs.png',
    github: 'https://github.com/BORED-ARADHYA/Tab-Screen-Timer-Extension',
    live: null, // removed
  },
  {
    title: 'Voice-Base-Navigation Chrome Extension',
    description: 'A Chrome extension that allows users to navigate using voice commands.',
    image: 'https://i.imgur.com/rFo8Ybp.png',
    github: 'https://github.com/BORED-ARADHYA/VOICE-NAV-EXTENTION',
    live: null, // removed
  },
  {
    title: 'Tic-Tac-Toe',
    description: "A fun Game of X's and O's",
    image: 'https://i.imgur.com/a41g6hp.png',
    github: 'https://github.com/BORED-ARADHYA/Tic-Tac-Toe',
    live: 'https://tictacbyaradhya.netlify.app/',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather forecasts with React and OpenWeatherMap API',
    image: 'https://i.imgur.com/wTlzvh1.png',
    github: 'https://github.com/BORED-ARADHYA/Weather-App',
    live: 'https://weatherbyaradhya.netlify.app/',
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-6 h-6 text-gray-800" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-6 h-6 text-gray-800" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};