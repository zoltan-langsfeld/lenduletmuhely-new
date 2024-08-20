/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
		colors: {
			purple: {
				800: "#331e38",
				600: "#706993",
			},
			white: {
				DEFAULT: "#fff",
			},
		},
		plugins: [],
	},
};
