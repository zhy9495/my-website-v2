// Spacing tokens extracted from Figma design
export const spacing = {
  // Base spacing units
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
  40: '160px',
  64: '256px',
  80: '320px',
  161: '644px', // Specific from design
  280: '1120px', // Specific from design
};

// Layout spacing
export const layout = {
  container: {
    padding: {
      sm: `${spacing[4]} ${spacing[6]}`,
      md: `${spacing[6]} ${spacing[8]}`,
      lg: `${spacing[8]} ${spacing[12]}`,
      xl: `${spacing[12]} ${spacing[16]}`,
      '2xl': `${spacing[16]} ${spacing[20]}`,
      '3xl': `${spacing[20]} ${spacing[32]}`,
      footer: `${spacing[161]} ${spacing[280]} ${spacing[10]}`,
    },
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      full: '100%',
    },
  },
  
  section: {
    padding: {
      sm: `${spacing[8]} 0`,
      md: `${spacing[12]} 0`,
      lg: `${spacing[16]} 0`,
      xl: `${spacing[20]} 0`,
      '2xl': `${spacing[32]} 0`,
    },
  },
  
  card: {
    padding: {
      sm: `${spacing[4]}`,
      md: `${spacing[6]}`,
      lg: `${spacing[8]}`,
      xl: `${spacing[12]}`,
    },
    gap: {
      sm: `${spacing[2]}`,
      md: `${spacing[4]}`,
      lg: `${spacing[6]}`,
      xl: `${spacing[8]}`,
    },
  },
};

// Component spacing
export const components = {
  button: {
    padding: {
      sm: `${spacing[2]} ${spacing[4]}`,
      md: `${spacing[3]} ${spacing[6]}`,
      lg: `${spacing[4]} ${spacing[8]}`,
      xl: `${spacing[5]} ${spacing[10]}`,
    },
    gap: spacing[2],
  },
  
  input: {
    padding: {
      sm: `${spacing[2]} ${spacing[3]}`,
      md: `${spacing[3]} ${spacing[4]}`,
      lg: `${spacing[4]} ${spacing[6]}`,
    },
  },
  
  nav: {
    gap: spacing[6],
    padding: `${spacing[4]} ${spacing[6]}`,
  },
  
  footer: {
    columnGap: spacing[8],
    rowGap: spacing[4],
    sectionGap: spacing[8],
  },
};

export default spacing;

