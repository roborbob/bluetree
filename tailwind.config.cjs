/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#F6F6F6",
        secondary: "#212F3C",
      },
      backgroundImage: {
        "hero-shark": "url('/assets/tree.jpg')",
        "stars": "url('/assets/stars.jpg')"
      },
      fontFamily: {
        postTimes: ["Times New Roman"],
        postInter: ["Inter,sans-serif"],
        postCharter: ["Charter"]
      }
    },
  },
  plugins: [],
};
