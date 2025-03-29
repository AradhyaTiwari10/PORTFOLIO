import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

export const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Frontend Developer', 'UI/UX Designer', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">

      <video 
        className="absolute inset-0 w-full h-full object-cover z-0" 
        autoPlay 
        loop 
        muted
        playsInline
      >
        <source src="https://i.imgur.com/tZc1mda.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <div className="absolute inset-0 bg-black opacity-50"></div>


      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-blue-400">Aradhya</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-200 mb-8">
            I'm a <span ref={typedRef}></span>
          </h2>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};