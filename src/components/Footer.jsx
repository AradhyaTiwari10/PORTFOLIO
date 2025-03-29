import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Instagram } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'http://github.com/BORED-ARADHYA', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aradhya-tiwari-751990252/', label: 'LinkedIn' },
    { icon: Code, href: 'https://leetcode.com/u/Bored_aradhya/', label: 'LeetCode' },
    { icon: Instagram, href: 'https://www.instagram.com/bored_aradhya/?next=%2F', label: 'Instagram' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4 md:mb-0"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Follow me on social media</p>
            </motion.div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Aradhya. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};