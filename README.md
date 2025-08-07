# Personal Website v2

A modern, minimalist personal website built with React, Vite, and a custom design system inspired by Retool's aesthetic.

## ✨ Features

- **Modern Tech Stack**: React 18, Vite 7, TailwindCSS 4
- **Custom Design System**: Complete design tokens and reusable components
- **Smooth Animations**: Framer Motion for delightful interactions
- **Responsive Design**: Mobile-first approach with custom breakpoints
- **Component Architecture**: Modular, reusable components
- **Performance Optimized**: Fast loading and smooth interactions

## 🏗️ Project Structure

```
my-website-v2/
├── design-system/           # 🌟 Design System
│   ├── components/         # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Card.jsx
│   │   └── index.js
│   ├── tokens/            # 🎨 Design Tokens
│   │   ├── colors.js
│   │   ├── spacing.js
│   │   ├── typography.js
│   │   └── index.js
│   ├── hooks/             # Custom React hooks
│   │   └── useMediaQuery.js
│   └── index.js           # Main design system export
├── src/
│   ├── components/        # Personal website components
│   │   ├── AvatarHero.jsx      # Hero section with avatar
│   │   ├── BioHeader.jsx       # Name and tagline
│   │   ├── SocialStrip.jsx     # Social media links
│   │   ├── ResumeTimeline.jsx  # Experience timeline
│   │   ├── PortfolioGallery.jsx # Portfolio grid
│   │   ├── ContactSection.jsx  # Contact form
│   │   ├── GlobalFooter.jsx    # Footer
│   │   ├── PersonalWebsite.jsx # Main page component
│   │   └── index.js
│   ├── App.jsx            # Extremely clean main app
│   ├── index.css          # TailwindCSS import
│   └── main.jsx           # React entry point
├── tailwind.config.js     # TailwindCSS configuration
├── vite.config.js         # Vite configuration
└── package.json
```

## 🎨 Design System

### Design Tokens

- **Colors**: Primary, background, text, border, status, and brand colors
- **Typography**: Custom font sizes, weights, line heights, and letter spacing
- **Spacing**: Consistent spacing scale and component-specific spacing
- **Breakpoints**: Responsive design breakpoints

### Components

- **Button**: Multiple variants (primary, secondary, ghost, outline) with sizes and states
- **Input**: Form inputs with validation states and icons
- **Card**: Content containers with elevation and interaction variants
- **Hooks**: Custom hooks for responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd my-website-v2
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📱 Personal Website Sections

### 01. AvatarHero
- Full-screen hero section with avatar placeholder
- Animated background and decorative elements
- Smooth entrance animations

### 02. BioHeader
- Large display name with custom typography
- Tagline with secondary text styling
- Scroll-triggered animations

### 03. SocialStrip
- Social media icons (GitHub, X, LinkedIn, Discord, Email)
- Hover animations and transitions
- Configurable social links

### 04. ResumeTimeline
- Experience timeline with cards
- Animated timeline dots and lines
- Customizable timeline data

### 05. PortfolioGallery
- Responsive grid layout
- Portfolio cards with image placeholders
- Technology tags and hover effects

### 06. ContactSection
- Contact form with validation
- Contact information card
- Email integration ready

### 07. GlobalFooter
- Copyright information
- Legal links and credits
- Design system attribution

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Component Variants**: Tailwind Variants
- **Design System**: Custom tokens and components

## 🎯 Usage Examples

### Using Design System Components

```jsx
import { Button, Input, Card } from '../design-system/components';

function MyComponent() {
  return (
    <Card variant="elevated" size="lg">
      <Input placeholder="Enter your name" />
      <Button variant="primary" size="lg">
        Submit
      </Button>
    </Card>
  );
}
```

### Customizing Personal Website

```jsx
import PersonalWebsite from './components/PersonalWebsite';

function App() {
  const personalInfo = {
    displayName: "John Doe",
    tagline: "Creative developer & designer"
  };

  const socialLinks = {
    github: "https://github.com/johndoe",
    twitter: "https://twitter.com/johndoe"
  };

  return <PersonalWebsite personalInfo={personalInfo} socialLinks={socialLinks} />;
}
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

Built with ❤️ using the Retool-inspired Design System
