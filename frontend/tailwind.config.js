module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        vip: '#d4af37', // subtle gold for VIP badge
        top: '#c2185b', // subtle pink for TOP badge
        premium: '#ff9800', // subtle orange for Premium badge
      },
      borderRadius: {
        DEFAULT: '0.5rem', // moderate radius
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
