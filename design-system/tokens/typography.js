// Typography tokens extracted from Figma design
export const typography = {
  // Font families
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
  },
  
  // Font sizes (from Figma analysis)
  fontSize: {
    xs: '10.875px',    // style_OTPNAD
    sm: '11.0625px',   // style_CLYV9V
    base: '11.25px',   // style_1ZY9JW
    md: '11.4375px',   // style_WNG2WB
    lg: '13.34375px',  // style_47ZK45
    xl: '13.78125px',  // style_1IDTMH
    '2xl': '22.125px', // style_R1SB91
    '3xl': '22.3125px', // style_E0RVNE
    '4xl': '22.5px',   // style_2V278E
    '5xl': '22.6875px', // style_0HCL1Q
    '6xl': '22.875px', // style_UFMJUV
    '7xl': '23.0625px', // style_9LR2RJ
    '8xl': '23.25px',  // style_GGLWY0
    '9xl': '30px',     // style_9J0WZK
  },
  
  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Line heights
  lineHeight: {
    none: 1,
    tight: 1.0158730158730158, // style_1IDTMH
    snug: 1.0491803278688525,  // style_47ZK45
    normal: 1.1199999491373698, // style_9J0WZK
    relaxed: 1.2387096446047547, // style_GGLWY0
    loose: 1.2487804547234926,   // style_9LR2RJ
    'extra-loose': 1.2590163600900786, // style_UFMJUV
    'super-loose': 1.2694214539751205, // style_0HCL1Q
    'ultra-loose': 1.27999996609158,   // style_2V278E
    'mega-loose': 1.2907562683276435,  // style_E0RVNE
    'giga-loose': 1.3016948807710982,  // style_R1SB91
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-1.0847457384659072%', // style_R1SB91
    tight: '-1.0756302280586307%',   // style_E0RVNE
    normal: '-1.0666666428248088%',  // style_2V278E
    wide: '-1.0578512160246036%',    // style_0HCL1Q
    wider: '-1.0491803044178447%',   // style_UFMJUV
    widest: '-1.0406503832437157%',  // style_9LR2RJ
    'extra-wide': '-1.0322580414433633%', // style_GGLWY0
    'super-wide': '-1.0666666428248088%', // style_9J0WZK
    'ultra-wide': '1.0491803044178447%',  // style_WNG2WB
    'mega-wide': '1.0666666428248088%',   // style_1ZY9JW
    'giga-wide': '1.0847457384659072%',   // style_CLYV9V
    'tera-wide': '1.103448251198078%',    // style_OTPNAD
  },
  
  // Text styles (predefined combinations)
  textStyles: {
    // Headings
    h1: {
      fontSize: '30px',
      fontWeight: 300,
      lineHeight: 1.1199999491373698,
      letterSpacing: '-1.0666666428248088%',
    },
    h2: {
      fontSize: '23.25px',
      fontWeight: 300,
      lineHeight: 1.2387096446047547,
      letterSpacing: '-1.0322580414433633%',
    },
    h3: {
      fontSize: '23.0625px',
      fontWeight: 300,
      lineHeight: 1.2487804547234926,
      letterSpacing: '-1.0406503832437157%',
    },
    h4: {
      fontSize: '22.875px',
      fontWeight: 300,
      lineHeight: 1.2590163600900786,
      letterSpacing: '-1.0491803044178447%',
    },
    h5: {
      fontSize: '22.6875px',
      fontWeight: 300,
      lineHeight: 1.2694214539751205,
      letterSpacing: '-1.0578512160246036%',
    },
    h6: {
      fontSize: '22.5px',
      fontWeight: 300,
      lineHeight: 1.27999996609158,
      letterSpacing: '-1.0666666428248088%',
    },
    
    // Body text
    body: {
      fontSize: '22.125px',
      fontWeight: 300,
      lineHeight: 1.2907562683276435,
      letterSpacing: '-1.0847457384659072%',
    },
    bodySmall: {
      fontSize: '22.3125px',
      fontWeight: 300,
      lineHeight: 1.3016948807710982,
      letterSpacing: '-1.0756302280586307%',
    },
    
    // Caption text
    caption: {
      fontSize: '11.25px',
      fontWeight: 400,
      lineHeight: 1.27999996609158,
      letterSpacing: '1.0666666428248088%',
      textTransform: 'uppercase',
    },
    captionSmall: {
      fontSize: '11.0625px',
      fontWeight: 400,
      lineHeight: 1.3016948807710982,
      letterSpacing: '1.0847457384659072%',
      textTransform: 'uppercase',
    },
    captionTiny: {
      fontSize: '10.875px',
      fontWeight: 400,
      lineHeight: 1.3241378959568066,
      letterSpacing: '1.103448251198078%',
      textTransform: 'uppercase',
    },
    
    // Button text
    button: {
      fontSize: '13.34375px',
      fontWeight: 400,
      lineHeight: 1.0491803278688525,
      letterSpacing: 'normal',
    },
    buttonSmall: {
      fontSize: '13.78125px',
      fontWeight: 400,
      lineHeight: 1.0158730158730158,
      letterSpacing: 'normal',
    },
  },
};

export default typography;
