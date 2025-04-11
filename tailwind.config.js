/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate'; // Static ES module import

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        black_olive: {
          DEFAULT: '#3F3C39',
          100: '#0d0c0c',
          200: '#1a1817',
          300: '#272523',
          400: '#33312f',
          500: '#3f3c39',
          600: '#69645f',
          700: '#918b85',
          800: '#b5b1ae',
          900: '#dad8d6'
        },
        champagne_pink: {
          DEFAULT: '#D7C8BC',
          100: '#32271e',
          200: '#654f3c',
          300: '#97765b',
          400: '#b99f8a',
          500: '#d7c8bc',
          600: '#dfd3c9',
          700: '#e7ded7',
          800: '#efe9e4',
          900: '#f7f4f2'
        },
        almond: {
          DEFAULT: '#EADFD6',
          100: '#3b2b1f',
          200: '#76573d',
          300: '#ad8360',
          400: '#ccb19b',
          500: '#eadfd6',
          600: '#eee6df',
          700: '#f3ece7',
          800: '#f7f2ef',
          900: '#fbf9f7'
        },
        champagne_pink2: {
          DEFAULT: '#EADDD3',
          100: '#3c2a1d',
          200: '#78553a',
          300: '#b07f5a',
          400: '#cdae96',
          500: '#eaddd3',
          600: '#eee3db',
          700: '#f2eae4',
          800: '#f6f1ed',
          900: '#fbf8f6'
        },
        jet: {
          DEFAULT: '#3E3B38',
          100: '#0c0c0b',
          200: '#191716',
          300: '#252321',
          400: '#312f2d',
          500: '#3e3b38',
          600: '#67625d',
          700: '#8f8983',
          800: '#b4b0ad',
          900: '#dad8d6'
        },
        'salon': {
          'text': '#654321',
          'primary': '#1B4D3E',
          'background': '#F5F5F5',
          'beige': '#F5E6D3',
          'accent': '#2C7A5F',
        },
        'salon-purple': 'rgb(41, 62, 41)',
        'champagne-pink': {
          DEFAULT: '#D7C8BC',
          50: '#F7F4F2',
          100: '#F3EDE7',
          200: '#EADDD3',
          300: '#E2CEC2',
          400: '#D7C8BC',
          500: '#C9B9AD',
          600: '#B5A698',
          700: '#9F9084',
          800: '#8A7A6F',
          900: '#74645A'
        },
        'dun': {
          DEFAULT: '#C9B9AD',
          50: '#F5F1ED',
          100: '#EDE3DC',
          200: '#E4D6C9',
          300: '#D7C8BC',
          400: '#C9B9AD',
          500: '#B5A698',
          600: '#9F9084',
          700: '#8A7A6F',
          800: '#74645A',
          900: '#5F4D45'
        },
        'beige': 'rgb(235, 223, 213)',
        'brown': 'rgb(144, 116, 101)',
        'dark-green': 'rgb(41, 62, 41)',
        'gray-blue': 'rgb(133, 137, 138)',
        'light-gray': 'rgb(192, 190, 185)',
        'dark-brown': 'rgb(85, 59, 41)',
        'secondary-beige': 'rgb(234, 222, 212)',
        'light-brown': 'rgb(151, 129, 112)',
        'white': 'rgb(255, 255, 255)',
        'third-beige': 'rgb(232, 220, 210)',
      },
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
        'slide-left': 'slideLeft 0.5s ease-in-out',
        'slide-right': 'slideRight 0.5s ease-in-out',
        'scale-in': 'scaleIn 0.5s ease-in-out',
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
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate], // Use the imported plugin
};