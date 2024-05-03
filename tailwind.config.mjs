/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        Darkblue: "#020420",
      },
      backgroundImage: {
        robot: "url('/robot.webp')",
        convertion: "url('/convertion.webp')",
      },
      maxWidth: {
        maxApp: "960px",
      },
	  minWidth: {
		minApp: "760px",
	  }
    },
  },
  plugins: [],
};
