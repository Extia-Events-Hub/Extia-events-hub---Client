/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-color": "#394148",
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.2) 0px 10px 50px',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FC9254",
          secondary: "#ffd9bc",
          accent: "#FC9254",
          neutral: "#ffffff",
          "base-100": "#fff",
          info: "#bae6fd",
          success: "#71eaa5",
          warning: "#f6c56a",
          error: "#fb2213",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
