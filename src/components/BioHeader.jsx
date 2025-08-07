import React from 'react';
import { motion } from 'framer-motion';

const BioHeader = ({ displayName = "Your Name", tagline = "Full-stack developer & designer" }) => {
  return (
    <motion.section 
      className="py-20 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 
          className="text-9xl font-light tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {displayName}
        </motion.h1>
        
        <motion.p 
          className="text-2xl font-light text-text-secondary max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tagline}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default BioHeader;

