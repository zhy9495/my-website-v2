import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../design-system/components/index.js';

const ResumeTimeline = ({ timelineData = [] }) => {
  const defaultTimeline = [
    {
      year: '2025',
      title: 'Marketing Manager',
      company: 'Shenzhen Shilihu Technology Co., Ltd.',
      description: 'Led the marketing team to develop and implement marketing strategies and campaigns to increase brand awareness and sales.'
    },
    {
      year: '2023',
      title: 'IELTS Teacher',
      company: 'New Channel Education',
      description: 'Taught IELTS to students and helped them improve their English skills.'
    },
    {
      year: '2021',
      title: 'Content Marketing Manager',
      company: 'Guangzhou Kugou Information Technology Co., Ltd.',
      description: 'Led the content marketing team to develop and implement content marketing strategies and campaigns to increase brand awareness and engagement.'
    },
    {
      year: '2019',
      title: 'Content Marketer',
      company: 'Guangzhou Moreless Information Technology Co., Ltd.',
      description: 'Created and published content for the company\'s social media platforms to increase brand awareness and engagement.'
    }
  ];

  const timeline = timelineData.length > 0 ? timelineData : defaultTimeline;

  return (
    <motion.section 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          className="text-8xl font-light tracking-wide mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border-divider"></div>
          
          <ul className="space-y-12">
            {timeline.map((item, index) => (
              <motion.li 
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-text-primary rounded-full border-4 border-background-primary"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <Card variant="elevated" size="lg" className="border-l-4 border-l-text-primary">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-6xl font-light mb-2">{item.title}</h3>
                        <p className="text-2xl text-text-secondary">{item.company}</p>
                      </div>
                      <span className="text-base font-normal text-text-muted uppercase tracking-wider">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-2xl font-light text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default ResumeTimeline;

