import { motion } from 'framer-motion';
import { Camera, Upload } from 'lucide-react';
import { useState, useRef } from 'react';

export const PhotoSection = () => {
  const [photo, setPhoto] = useState('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  const fileInputRef = useRef(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative w-48 h-48 mx-auto mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-full rounded-full overflow-hidden shadow-xl"
            >
              <img
                src={photo}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
              >
                <Upload className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full"
            >
              <Camera className="w-5 h-5" />
            </motion.div>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handlePhotoChange}
            accept="image/*"
            className="hidden"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            Click to upload your photo
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};