import React from 'react';
import BioHeader from './BioHeader.jsx';
import SocialStrip from './SocialStrip.jsx';
import ResumeTimeline from './ResumeTimeline.jsx';
import PortfolioGallery from './PortfolioGallery.jsx';
import ContactSection from './ContactSection.jsx';
import GlobalFooter from './GlobalFooter.jsx';

const PersonalWebsite = ({ 
  personalInfo = {},
  socialLinks = {},
  timelineData = [],
  portfolioData = []
}) => {
  const defaultPersonalInfo = {
    displayName: "Ying",
    tagline: "A translator. A marketer. A newbee developer."
  };

  const info = { ...defaultPersonalInfo, ...personalInfo };

  return (
    <div className="min-h-screen bg-background-primary text-text-primary font-sans">
      <BioHeader displayName={info.displayName} tagline={info.tagline} />
      <SocialStrip socialLinks={socialLinks} />
      <ResumeTimeline timelineData={timelineData} />
      <PortfolioGallery portfolioData={portfolioData} />
      <ContactSection />
      <GlobalFooter />
    </div>
  );
};

export default PersonalWebsite;
