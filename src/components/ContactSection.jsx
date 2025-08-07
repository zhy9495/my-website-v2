import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Card } from '../../design-system/components/index.js';
import { Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.section 
      className="py-20 border-t border-border-divider"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-8xl font-light tracking-wide mb-6">Get In Touch</h2>
          <p className="text-2xl font-light text-text-secondary max-w-2xl mx-auto">
            Let's work together on your next project
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <Card variant="elevated" size="lg">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-text-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-background-primary" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-light">Email</h3>
                    <p className="text-2xl text-text-secondary">zhy9495@hotmail.com</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border-divider">
                  <p className="text-2xl font-light text-text-secondary leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card variant="elevated" size="lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background-secondary border border-border-primary rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-text-primary transition-all duration-200 resize-none"
                  style={{
                    fontSize: '22.125px',
                    fontWeight: 300,
                    lineHeight: 1.2907562683276435,
                  }}
                />
              </div>
              
              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                icon={<Send />}
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;

