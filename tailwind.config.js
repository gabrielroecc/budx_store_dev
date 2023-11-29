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
				purpleCustom: "#6C3B8C",
			},
		},
	},
	plugins: [],
};
