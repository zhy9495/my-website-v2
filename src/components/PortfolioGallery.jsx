import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../design-system/components/index.js';

const PortfolioGallery = ({ portfolioData = [] }) => {
  const defaultPortfolio = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce solution built with React and Node.js',
      image: null,
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Design System',
      description: 'Comprehensive design system with reusable components',
      image: null,
      tags: ['React', 'TypeScript', 'Storybook'],
      link: '#'
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application for task management',
      image: null,
      tags: ['React Native', 'Firebase', 'Redux'],
      link: '#'
    },
    {
      title: 'Dashboard',
      description: 'Analytics dashboard with real-time data visualization',
      image: null,
      tags: ['Vue.js', 'D3.js', 'Express'],
      link: '#'
    },
    {
      title: 'Blog Platform',
      description: 'Content management system with markdown support',
      image: null,
      tags: ['Next.js', 'PostgreSQL', 'Prisma'],
      link: '#'
    },
    {
      title: 'API Gateway',
      description: 'Microservices architecture with API gateway',
      image: null,
      tags: ['Node.js', 'Docker', 'Kubernetes'],
      link: '#'
    }
  ];

  const portfolio = portfolioData.length > 0 ? portfolioData : defaultPortfolio;

  return (
    <motion.section 
      className="py-20 border-t border-border-divider"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-8xl font-light tracking-wide mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Portfolio
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card 
                variant="interactive" 
                size="lg" 
                className="h-full cursor-pointer"
                onClick={() => window.open(item.link, '_blank')}
              >
                {/* Image placeholder */}
                <div className="w-full h-48 bg-text-secondary opacity-20 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-4xl text-background-primary">📁</span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-5xl font-light">{item.title}</h3>
                  <p className="text-2xl font-light text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-normal text-text-secondary border border-border-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PortfolioGallery;

