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
					'base-200': '#1D2939',
					'base-300': '#344054',
					'base-content': '#ffff',
					'neutral-content': '#E8E8E8',
					'secondary-content': '#aaaaaa',
					error: '#FF0404',
					neutral: '#2a323c',
					accent: '#026AA2',
					success: '#039855',
					secondary: '#FE7B43',
					'.opposite-theme': {
						'background-color': '#ffffff'
					}
				},
				light: {
					...require('daisyui/src/theming/themes')['[data-theme=light]'],
					error: '#FF0404',
					primary: '#FF550D',
					'primary-content': '#ffff',
					secondary: '#FE7B43',
					'secondary-content': '#9E9E9E',
					accent: '#026AA2',
					'accent-content': '#07312D',
					neutral: '#2B3440',
					'neutral-content': '#D7DDE4',
					'base-100': '#ffffff',
					'base-200': '#F2F2F2',
					'base-300': '#E5E6E6',
					'base-content': '#1f2937',
					'.opposite-theme': {
						'background-color': '#101828'
					}
				}
			}
		]
	}
};
