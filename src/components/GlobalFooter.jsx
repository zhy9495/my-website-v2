import React from 'react';
import { motion } from 'framer-motion';

const GlobalFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="border-t border-border-primary bg-background-secondary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center space-y-4">
          <motion.p 
            className="text-2xl font-light text-text-secondary"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Your Name. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex justify-center items-center gap-6 text-sm text-text-muted"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a 
              href="#" 
              className="hover:text-text-primary transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a 
              href="#" 
              className="hover:text-text-primary transition-colors duration-200"
            >
              Terms of Service
            </a>
            <span>•</span>
            <span>Built with React & Tailwind CSS</span>
          </motion.div>
          
          <motion.div 
            className="pt-4 border-t border-border-divider"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-text-muted">
              Made with ❤️ using the Retool-inspired Design System
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default GlobalFooter;

