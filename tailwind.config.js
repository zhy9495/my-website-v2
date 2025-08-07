/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design system colors
        'text-primary': '#E9EBDF',
        'text-secondary': '#CBCCC4',
        'text-muted': 'rgba(203, 204, 196, 0.6)',
        'text-inverse': '#151515',
        
        'background-primary': '#151515',
        'background-secondary': '#242424',
        'background-card': '#242424',
        'background-overlay': 'rgba(233, 235, 223, 0.12)',
        
        'border-primary': '#433E38',
        'border-secondary': 'rgba(233, 235, 223, 0.2)',
        'border-divider': 'rgba(233, 235, 223, 0.12)',
        
        'status-success': '#4ADE80',
        'status-warning': '#FBBF24',
        'status-error': '#F87171',
        'status-info': '#60A5FA',
        
        // Brand colors
        'brand-unity': '#3F403D',
        'brand-stripe': '#6772E5',
        'brand-pfizer': '#0066CC',
        'brand-doordash': '#FF3008',
        'brand-ramp': '#00D4AA',
      },
      
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      
      fontSize: {
        'xs': '10.875px',
        'sm': '11.0625px',
        'base': '11.25px',
        'md': '11.4375px',
        'lg': '13.34375px',
        'xl': '13.78125px',
        '2xl': '22.125px',
        '3xl': '22.3125px',
        '4xl': '22.5px',
        '5xl': '22.6875px',
        '6xl': '22.875px',
        '7xl': '23.0625px',
        '8xl': '23.25px',
        '9xl': '30px',
      },
      
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
      
      lineHeight: {
        'tight': '1.0158730158730158',
        'snug': '1.0491803278688525',
        'normal': '1.1199999491373698',
        'relaxed': '1.2387096446047547',
        'loose': '1.2487804547234926',
        'extra-loose': '1.2590163600900786',
        'super-loose': '1.2694214539751205',
        'ultra-loose': '1.27999996609158',
        'mega-loose': '1.2907562683276435',
        'giga-loose': '1.3016948807710982',
      },
      
      letterSpacing: {
        'tighter': '-1.0847457384659072%',
        'tight': '-1.0756302280586307%',
        'normal': '-1.0666666428248088%',
        'wide': '-1.0578512160246036%',
        'wider': '-1.0491803044178447%',
        'widest': '-1.0406503832437157%',
        'extra-wide': '-1.0322580414433633%',
        'super-wide': '-1.0666666428248088%',
        'ultra-wide': '1.0491803044178447%',
        'mega-wide': '1.0666666428248088%',
        'giga-wide': '1.0847457384659072%',
        'tera-wide': '1.103448251198078%',
      },
      
      spacing: {
        '161': '644px',
        '280': '1120px',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

