import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Button, 
  Input, 
  Card 
} from '../../design-system/components/index.js';
import { 
  colors, 
  spacing, 
  typography 
} from '../../design-system/tokens/index.js';
import { 
  ArrowRight, 
  Search, 
  Mail, 
  User, 
  Lock,
  Heart,
  Star,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import { 
  SiX, 
  SiLinkedin, 
  SiGithub, 
  SiDiscord 
} from 'react-icons/si';

const DesignSystemPreview = () => {
  const [inputValue, setInputValue] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-background-primary text-text-primary font-sans">
      {/* Header */}
      <motion.header 
        className="border-b border-border-primary bg-background-secondary"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-9xl font-light tracking-tight">
                Design System
              </h1>
              <p className="text-2xl text-text-secondary mt-2">
                Retool-inspired components & tokens
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="md">
                Sign in
              </Button>
              <Button variant="outline" size="md">
                Book a demo
              </Button>
              <Button variant="primary" size="md">
                Start for free
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <motion.main 
        className="max-w-7xl mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Colors Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-8xl font-light tracking-wide mb-8">Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Primary Colors */}
            <Card variant="elevated" size="lg">
              <Card.Header>
                <h3 className="text-6xl font-light">Primary Colors</h3>
              </Card.Header>
              <Card.Body>
                <div className="space-y-4">
                  {Object.entries(colors.primary).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-lg border border-border-primary"
                        style={{ backgroundColor: value }}
                      />
                      <div>
                        <p className="text-2xl font-light">{key}</p>
                        <p className="text-sm text-text-secondary">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>

            {/* Text Colors */}
            <Card variant="elevated" size="lg">
              <Card.Header>
                <h3 className="text-6xl font-light">Text Colors</h3>
              </Card.Header>
              <Card.Body>
                <div className="space-y-4">
                  {Object.entries(colors.text).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-lg border border-border-primary flex items-center justify-center"
                        style={{ backgroundColor: key === 'inverse' ? colors.background.primary : colors.background.secondary }}
                      >
                        <span style={{ color: value }} className="text-sm">Aa</span>
                      </div>
                      <div>
                        <p className="text-2xl font-light">{key}</p>
                        <p className="text-sm text-text-secondary">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>

            {/* Status Colors */}
            <Card variant="elevated" size="lg">
              <Card.Header>
                <h3 className="text-6xl font-light">Status Colors</h3>
              </Card.Header>
              <Card.Body>
                <div className="space-y-4">
                  {Object.entries(colors.status).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-lg border border-border-primary"
                        style={{ backgroundColor: value }}
                      />
                      <div>
                        <p className="text-2xl font-light capitalize">{key}</p>
                        <p className="text-sm text-text-secondary">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        </motion.section>

        {/* Typography Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-8xl font-light tracking-wide mb-8">Typography</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Font Sizes */}
            <Card variant="elevated" size="lg">
              <Card.Header>
                <h3 className="text-6xl font-light">Font Sizes</h3>
              </Card.Header>
              <Card.Body>
                <div className="space-y-6">
                  {Object.entries(typography.fontSize).map(([key, value]) => (
                    <div key={key} className="border-b border-border-divider pb-4">
                      <p 
                        className="text-text-primary"
                        style={{ 
                          fontSize: value,
                          fontWeight: typography.fontWeight.light,
                          lineHeight: typography.lineHeight['mega-loose'],
                          letterSpacing: typography.letterSpacing.tighter
                        }}
                      >
                        {key} - {value}
                      </p>
                      <p className="text-sm text-text-secondary mt-1">
                        {key === 'xs' && 'Caption Tiny'}
                        {key === 'sm' && 'Caption Small'}
                        {key === 'base' && 'Caption'}
                        {key === 'md' && 'Caption Medium'}
                        {key === 'lg' && 'Button'}
                        {key === 'xl' && 'Button Small'}
                        {key === '2xl' && 'Body'}
                        {key === '3xl' && 'Body Small'}
                        {key === '4xl' && 'H6'}
                        {key === '5xl' && 'H5'}
                        {key === '6xl' && 'H4'}
                        {key === '7xl' && 'H3'}
                        {key === '8xl' && 'H2'}
                        {key === '9xl' && 'H1'}
                      </p>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>

            {/* Text Styles */}
            <Card variant="elevated" size="lg">
              <Card.Header>
                <h3 className="text-6xl font-light">Text Styles</h3>
              </Card.Header>
              <Card.Body>
                <div className="space-y-6">
                  <div>
                    <h1 className="text-9xl font-light tracking-tight mb-2">Heading 1</h1>
                    <p className="text-sm text-text-secondary">H1 - Main page titles</p>
                  </div>
                  <div>
                    <h2 className="text-8xl font-light tracking-wide mb-2">Heading 2</h2>
                    <p className="text-sm text-text-secondary">H2 - Section titles</p>
                  </div>
                  <div>
                    <h3 className="text-7xl font-light tracking-widest mb-2">Heading 3</h3>
                    <p className="text-sm text-text-secondary">H3 - Subsection titles</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light tracking-tighter mb-2">
                      Body text with light weight and proper spacing for optimal readability
                    </p>
                    <p className="text-sm text-text-secondary">Body - Main content text</p>
                  </div>
                  <div>
                    <p className="text-base font-normal tracking-mega-wide uppercase mb-2">
                      Caption Text
                    </p>
                    <p className="text-sm text-text-secondary">Caption - Labels and metadata</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </motion.section>

        {/* Components Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-8xl font-light tracking-wide mb-8">Components</h2>
          
          {/* Buttons */}
          <div className="mb-12">
            <h3 className="text-6xl font-light mb-6">Buttons</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Button Variants */}
              <Card variant="elevated" size="lg">
                <Card.Header>
                  <h4 className="text-5xl font-light">Variants</h4>
                </Card.Header>
                <Card.Body>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary" icon={<ArrowRight />}>
                      Primary
                    </Button>
                    <Button variant="secondary" icon={<ArrowRight />}>
                      Secondary
                    </Button>
                    <Button variant="ghost" icon={<ArrowRight />}>
                      Ghost
                    </Button>
                    <Button variant="outline" icon={<ArrowRight />}>
                      Outline
                    </Button>
                  </div>
                </Card.Body>
              </Card>

              {/* Button Sizes */}
              <Card variant="elevated" size="lg">
                <Card.Header>
                  <h4 className="text-5xl font-light">Sizes</h4>
                </Card.Header>
                <Card.Body>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm" variant="primary">
                      Small
                    </Button>
                    <Button size="md" variant="primary">
                      Medium
                    </Button>
                    <Button size="lg" variant="primary">
                      Large
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* Inputs */}
          <div className="mb-12">
            <h3 className="text-6xl font-light mb-6">Inputs</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Input Variants */}
              <Card variant="elevated" size="lg">
                <Card.Header>
                  <h4 className="text-5xl font-light">Variants</h4>
                </Card.Header>
                <Card.Body>
                  <div className="space-y-4">
                    <Input 
                      placeholder="Default input"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Input 
                      placeholder="With icon"
                      icon={<Search />}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Input 
                      placeholder="Error state"
                      error="This field is required"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Input 
                      placeholder="Success state"
                      success="Input is valid"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  </div>
                </Card.Body>
              </Card>

              {/* Input Sizes */}
              <Card variant="elevated" size="lg">
                <Card.Header>
                  <h4 className="text-5xl font-light">Sizes</h4>
                </Card.Header>
                <Card.Body>
                  <div className="space-y-4">
                    <Input 
                      size="sm"
                      placeholder="Small input"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Input 
                      size="md"
                      placeholder="Medium input"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Input 
                      size="lg"
                      placeholder="Large input"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-12">
            <h3 className="text-6xl font-light mb-6">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <Card variant="default" size="lg">
                <Card.Header>
                  <h4 className="text-5xl font-light">Default Card</h4>
                </Card.Header>
                <Card.Body>
                  <p className="text-2xl font-light">
                    This is a default card with standard styling and spacing.
                  </p>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary" size="sm">
                    Action
                  </Button>
                </Card.Footer>
              </Card>

              <Card variant="elevated" size="lg">
                <Card.Header>
                  <h4 className="text-5xl font-light">Elevated Card</h4>
                </Card.Header>
                <Card.Body>
                  <p className="text-2xl font-light">
                    This card has elevated styling with shadow for emphasis.
                  </p>
                </Card.Body>
                <Card.Footer>
                  <Button variant="secondary" size="sm">
                    Action
                  </Button>
                </Card.Footer>
              </Card>

              <Card variant="interactive" size="lg">
                <Card.Header>
                  <h4 className="text-5xl font-light">Interactive Card</h4>
                </Card.Header>
                <Card.Body>
                  <p className="text-2xl font-light">
                    This card is interactive with hover and click animations.
                  </p>
                </Card.Body>
                <Card.Footer>
                  <Button variant="ghost" size="sm">
                    Action
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Spacing Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-8xl font-light tracking-wide mb-8">Spacing</h2>
          <Card variant="elevated" size="xl">
            <Card.Header>
              <h3 className="text-6xl font-light">Spacing Scale</h3>
            </Card.Header>
            <Card.Body>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Object.entries(spacing).slice(0, 20).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div 
                      className="bg-text-primary mx-auto mb-2"
                      style={{ 
                        width: value, 
                        height: value,
                        minWidth: '8px',
                        minHeight: '8px'
                      }}
                    />
                    <p className="text-sm text-text-secondary">{key}</p>
                    <p className="text-xs text-text-muted">{value}</p>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </motion.section>

        {/* Icons Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-8xl font-light tracking-wide mb-8">Icons</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* System Icons */}
            <Card variant="elevated" size="lg">
              <Card.Header>
                <h3 className="text-6xl font-light">System Icons</h3>
              </Card.Header>
              <Card.Body>
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 border border-border-divider rounded-lg">
                    <Search className="w-8 h-8 text-text-primary mb-2" />
                    <span className="text-sm text-text-secondary">Search</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border border-border-divider rounded-lg">
                    <Mail className="w-8 h-8 text-text-primary mb-2" />
                    <span className="text-sm text-text-secondary">Mail</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border border-border-divider rounded-lg">
                    <User className="w-8 h-8 text-text-primary mb-2" />
                    <span className="text-sm text-text-secondary">User</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border border-border-divider rounded-lg">
                    <Lock className="w-8 h-8 text-text-primary mb-2" />
                    <span className="text-sm text-text-secondary">Lock</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border border-border-divider rounded-lg">
                    <Heart className="w-8 h-8 text-text-primary mb-2" />
                    <span className="text-sm text-text-secondary">Heart</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border border-border-divider rounded-lg">
                    <Star className="w-8 h-8 text-text-primary mb-2" />
                    <span className="text-sm text-text-secondary">Star</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border border-border-divider rounded-lg">
                    <CheckCircle className="w-8 h-8 text-status-success mb-2" />
                    <span className="text-sm text-text-secondary">Success</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border border-border-divider rounded-lg">
                    <AlertCircle className="w-8 h-8 text-status-error mb-2" />
                    <span className="text-sm text-text-secondary">Error</span>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Social Icons */}
            <Card variant="elevated" size="lg">
              <Card.Header>
                <h3 className="text-6xl font-light">Social Icons</h3>
              </Card.Header>
              <Card.Body>
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 border border-border-divider rounded-lg">
                    <SiX className="w-8 h-8 text-text-primary mb-2" />
                    <span className="text-sm text-text-secondary">X (Twitter)</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border border-border-divider rounded-lg">
                    <SiLinkedin className="w-8 h-8 text-text-primary mb-2" />
                    <span className="text-sm text-text-secondary">LinkedIn</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border border-border-divider rounded-lg">
                    <SiGithub className="w-8 h-8 text-text-primary mb-2" />
                    <span className="text-sm text-text-secondary">GitHub</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border border-border-divider rounded-lg">
                    <SiDiscord className="w-8 h-8 text-text-primary mb-2" />
                    <span className="text-sm text-text-secondary">Discord</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </motion.section>
      </motion.main>

      {/* Footer */}
      <motion.footer 
        className="border-t border-border-primary bg-background-secondary"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <p className="text-2xl font-light text-text-secondary">
              Design System v1.0.0
            </p>
            <p className="text-base text-text-muted mt-2">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default DesignSystemPreview;
