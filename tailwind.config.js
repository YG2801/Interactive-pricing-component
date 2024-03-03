/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "Soft-Cyan": "hsl(174, 77%, 80%)",
        "Strong-Cyan": "hsl(174, 86%, 45%)",
        "Light-Grayish-Red": "hsl(14, 92%, 95%)",
        "Light-Red": "hsl(15, 100%, 70%)",
        "Pale-Blue": "hsl(226, 100%, 87%)",
        White: "hsl(0, 0%, 100%)",
        "Very-Pale-Blue": "hsl(230, 100%, 99%)",
        "Light-Grayish-Blue": "hsl(224, 65%, 95%)",
        "Grayish-Blue": "hsl(225, 20%, 60%)",
        "Dark-Desaturated-Blue": "hsl(227, 35%, 25%)",
      },
    },
  },
  plugins: [],
};
