/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        h2: ["Cormorant Upright"],
        h4: ['"Open sans"'],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      width: {
        overflow: "120rem",
      },
      backgroundImage: {
        hero: "url('/BG.png')",
      },
    },
  },
  plugins: [],
};
