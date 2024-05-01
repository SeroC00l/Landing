/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				Darkblue: "#020420"
			},
			backgroundImage: {
				'robot': "url('/robot.png')",
				'convertion': "url('/convertion.png')",
			  }
		},
	},
	plugins: [],
}
