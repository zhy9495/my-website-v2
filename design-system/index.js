// 🌟 Design System - Main Entry Point
// Based on Figma design analysis

// Export all tokens
export * from './tokens/index.js';
export { default as tokens } from './tokens/index.js';

// Export all components
export * from './components/index.js';
export { default as components } from './components/index.js';

// Export all hooks
export * from './hooks/useMediaQuery.js';
export { default as useMediaQuery } from './hooks/useMediaQuery.js';

// Design system configuration
export const designSystem = {
  name: 'Retool-inspired Design System',
  version: '1.0.0',
  description: 'A modern design system inspired by Retool\'s website design',
  
  // Theme configuration
  theme: {
    colors: {
      primary: '#E9EBDF',
      secondary: '#CBCCC4',
      background: '#151515',
      surface: '#242424',
      border: '#433E38',
    },
    
    typography: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: '10.875px',
        sm: '11.0625px',
        base: '11.25px',
        md: '11.4375px',
        lg: '13.34375px',
        xl: '13.78125px',
        '2xl': '22.125px',
        '3xl': '22.3125px',
        '4xl': '22.5px',
        '5xl': '22.6875px',
        '6xl': '22.875px',
        '7xl': '23.0625px',
        '8xl': '23.25px',
        '9xl': '30px',
      },
    },
    
    spacing: {
      base: '4px',
      scale: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24, 32, 40, 64, 80, 161, 280],
    },
    
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  
  // Component library
  components: {
    Button: {
      variants: ['primary', 'secondary', 'ghost', 'outline'],
      sizes: ['sm', 'md', 'lg'],
    },
    Input: {
      variants: ['default', 'error', 'success'],
      sizes: ['sm', 'md', 'lg'],
    },
    Card: {
      variants: ['default', 'elevated', 'outlined', 'interactive'],
      sizes: ['sm', 'md', 'lg', 'xl'],
    },
  },
};

export default designSystem;

