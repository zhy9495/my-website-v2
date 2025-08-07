import { useState, useEffect } from 'react';

/**
 * Custom hook for media queries
 * @param {string} query - The media query string
 * @returns {boolean} - Whether the media query matches
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Set initial value
    setMatches(media.matches);

    // Create event listener
    const listener = (event) => {
      setMatches(event.matches);
    };

    // Add listener
    media.addEventListener('change', listener);

    // Cleanup
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
};

// Predefined breakpoints based on design system
export const useBreakpoint = () => {
  const sm = useMediaQuery('(min-width: 640px)');
  const md = useMediaQuery('(min-width: 768px)');
  const lg = useMediaQuery('(min-width: 1024px)');
  const xl = useMediaQuery('(min-width: 1280px)');
  const '2xl' = useMediaQuery('(min-width: 1536px)');

  return {
    sm,
    md,
    lg,
    xl,
    '2xl',
    isMobile: !sm,
    isTablet: sm && !lg,
    isDesktop: lg,
  };
};

// Common media queries
export const mediaQueries = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
  hover: '(hover: hover)',
  noHover: '(hover: none)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
};

export default useMediaQuery;

