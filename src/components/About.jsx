import { motion } from 'framer-motion';
import { Code2, Palette, Terminal } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const skills = [
  { icon: Code2, name: 'Frontend Development', description: 'React, JavaScript, HTML, CSS, Tailwind' },
  { icon: Terminal, name: 'Backend Development', description: 'Node.js, Python' },
  { icon: Palette, name: 'UI/UX Design', description: 'Figma, Canva' },
];

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            About Me
          </h2>

          {/* Flexbox Layout - Image + Text */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Hey, I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Aradhya</span>—a tech enthusiast and AI-driven problem solver. 
                I love turning ideas into reality through code, especially in AI and web development. 
                Always experimenting, always building—because innovation never stops!
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                When I’m not coding, I’m diving into new technologies, working on exciting projects. 
                Always exploring, always building!
              </p>
            </motion.div>

            {/* Image Section - Same as Home */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 max-w-2xl"
            >
              <img
                src="../src/assets/aradhya1.png"
                alt="Aradhya"
                className="w-full h-auto"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.5))',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: "36px"
                }}
              />
            </motion.div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {skills.map((Skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg text-center"
              >
                <Skill.icon className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {Skill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{Skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};