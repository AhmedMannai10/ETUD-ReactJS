/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary-light" : "#fff",
        "secondary-light": "#fafafa",
        "text-light": "#000",
        "primary-dark": "#000008",
        "secondary-dark": "#1f1f1f",
        "text-dark": "#fff",
        "text-secondary-dark": "#242424",
        "text-secondary-light": "#6f6f6f",
      
 
      "primary-100":"#473bd5",
      "primary-200":"#8267ff",
      "primary-300":"#f0c8ff",
      "accent-100":"#fffad8",
      "accent-200": "#9b9778",
      "text-100":"#FFFFFF",
      "text-200":"#e0e0e0",
      "bg-100":"#202022",
      "bg-200":"#2f2f31",
      "bg-300":"#474749",
      }
    },
  },
  plugins: [],
}

