/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'inter': ['Inter', 'sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
      colors: {
        'brand': '#ff0000',
        'secendry': '#666363',
      },
      backgroundImage: {
        // Banner_bg: "url('/Background.png')",
        // Banner_bg:
          // "linear-gradient(to right bottom, rgba('#000000',0.6)), url('/Background.png')",
        "Banner_bg":
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/Background.png')",
      },
    },
  },
  plugins: [],
};
