const defaultTheme = require('tailwindcss/defaultTheme');

const withStyles = () => {
	return [font, ...defaultTheme.fontFamily.sans];
};

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				darkBlue: '#163A5F',
				blue: '#1D566E',
				green: '#21ABA5',
				lightGreen: '#45EBA5',
				lightgray: '#E3F6F5',
			},
      fontFamily:{
        
      }
		},
	},

	plugins: [],
};

module.exports = config;
