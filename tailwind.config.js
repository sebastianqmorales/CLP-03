/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				dark: {
					...require('daisyui/src/theming/themes')['[data-theme=dark]'],
					primary: '#FF550D',
					'primary-focus': '#FF7438',
					'base-100': '#101828',
					'base-200': '#1D2939'
				},
				light: {
					...require('daisyui/src/theming/themes')['[data-theme=light]']
				}
			}
		]
	}
};
