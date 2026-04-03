/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#008ECC",
        textColor: "#666666",
        headingColor: "#222222",
        lightColor: "#888888",
        borderColor: "#EDEDED",
        firstBackground: "#F5F5F5",
        secondBackground: "#F6F6FC",
        thirdBackground: "#F3F9FB",
        yellow: "#E3BC01",
        white: "#FFFFFF",
        lineColor: "#D9D9D9",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "4rem",
        "2xl": "4rem",
      },
    },
    fontFamily: {
      HostGrotesk: ["Host Grotesk", "sans-serif"],
      dmsans: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
