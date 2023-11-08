/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./layout/*.liquid",
		"./sections/*.liquid",
		"./snippets/*.liquid",
		"./templates/customers/*.liquid",
		"./templates/*.liquid",
	],
	theme: {
		extend: {
			colors: {
				greenButton: "#80be79",
			},
		},
	},
	plugins: [],
};
