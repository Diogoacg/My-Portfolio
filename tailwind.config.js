/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

// Remove deprecated color names to avoid warnings
const { 
  lightBlue, 
  warmGray, 
  trueGray, 
  coolGray, 
  blueGray, 
  ...safeColors 
} = colors;

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Use safe colors (with deprecated ones removed)
        ...safeColors,
        
        // Theme colors based on CSS variables
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          500: 'rgb(var(--primary))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
          500: 'rgb(var(--secondary))',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent))',
        },
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        card: 'rgb(var(--card))',
        'card-foreground': 'rgb(var(--card-foreground))',
        muted: 'rgb(var(--muted))',
        'muted-foreground': 'rgb(var(--muted-foreground))',
        border: 'rgb(var(--border))',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(var(--foreground))',
            a: {
              color: 'rgb(var(--primary))',
              '&:hover': {
                color: 'rgb(var(--primary))',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};