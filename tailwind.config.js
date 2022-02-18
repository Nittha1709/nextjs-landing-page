const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		'./components/**/*.js',
		'./pages/**/*.js',
		'./src/theme/**/*.js',
	],
	theme: {
		container: {
			center: true,
		},
		fontFamily: {
			'roboto': ['Roboto', 'sans-serif']
		},
		colors: {
			'primary': '#1F3E76',
			'black': '#0F2137',
			'green': '#40975F',
			'pink': '#FF4361',
			'sky': '#3DABDD',
			'amber':'#D6AB00',
			'purple': '#5856D6',
			'orange': '#E97425',
			'success':'#25CB9E',
			inherit: colors.inherit,
			current: colors.current,
			transparent: colors.transparent,
			black: colors.black,
			white: colors.white,
			slate: colors.slate,
			gray: colors.gray,
			zinc: colors.zinc,
			neutral: colors.neutral,
			stone: colors.stone,
			red: colors.red,
			yellow: colors.yellow,
			lime: colors.lime,
			emerald: colors.emerald,
			teal: colors.teal,
			cyan: colors.cyan,
			blue: colors.blue,
			indigo: colors.indigo,
			violet: colors.violet,
			fuchsia: colors.fuchsia,
			rose: colors.rose,
		},
		extend: {

		},
	},
	variants: {},
	plugins: [
		require('tailwindcss'),
		require('precss'),
		require('autoprefixer'),
	]
}