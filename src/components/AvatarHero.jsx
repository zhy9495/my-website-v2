import React from 'react';
import { motion } from 'framer-motion';

const AvatarHero = () => {
  return (
    <motion.section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-background-secondary opacity-20"></div>
      
      {/* Avatar container */}
      <motion.div 
        className="relative z-10 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Avatar placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-text-secondary opacity-30 flex items-center justify-center">
          <span className="text-4xl text-background-primary">👤</span>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-text-primary rounded-full opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-text-secondary rounded-full opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-text-primary rounded-full opacity-20"></div>
      </motion.div>
    </motion.section>
  );
};

export default AvatarHero;

