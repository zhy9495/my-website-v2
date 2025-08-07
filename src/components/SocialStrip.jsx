import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiX, SiLinkedin, SiDiscord } from 'react-icons/si';
import { Mail } from 'lucide-react';

const SocialStrip = ({ socialLinks = {} }) => {
  const defaultLinks = {
    github: 'https://github.com/zhy9495',
    twitter: 'https://x.com/yingzhang_5',
    linkedin: 'https://www.linkedin.com/in/yingzhang-515/',
    discord: 'https://discord.gg/ying01060',
    email: 'mailto:zhy9495@hotmail.com'
  };

  const links = { ...defaultLinks, ...socialLinks };

  const socialIcons = [
    { name: 'GitHub', icon: SiGithub, url: links.github },
    { name: 'X (Twitter)', icon: SiX, url: links.twitter },
    { name: 'LinkedIn', icon: SiLinkedin, url: links.linkedin },
    { name: 'Discord', icon: SiDiscord, url: links.discord },
    { name: 'Email', icon: Mail, url: links.email }
  ];

  return (
    <motion.section 
      className="py-12 border-t border-border-divider"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.ul 
          className="flex justify-center items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {socialIcons.map((social, index) => (
            <motion.li 
              key={social.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-full border border-border-primary text-text-secondary hover:text-text-primary hover:border-text-primary transition-all duration-200"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default SocialStrip;
