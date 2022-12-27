const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.svelte'],
	darkMode: 'class',
	theme: {
		screens: {
			xs: '320px',
			...defaultTheme.screens,
		},
	},
};
