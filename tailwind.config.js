/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'card-palladium-gradient':
					'linear-gradient(45deg, rgba(192, 192, 192, 1) 10%, rgba(192, 192, 192, 0.8) 30%, rgba(253, 253, 253, 0.8) 50%,  rgba(192, 192, 192, 0.8) 70%, rgba(177, 176, 176, 1) 100%);',
			},
			backgroundSize: {
				'size-500': '500% 500%',
			},
			boxShadow: {
				custom: '-50px px 100px 50px rgba(0, 0, 0, 0.1)',
			},
			keyframes: {
				slide: {
					'0%': { 'background-position': '0% 0%' },
					'100%': { 'background-position': '100% 100%' },
				},
				stroll: {
					'0%': { transform: 'translateX(0px)' },
					'50%': { transform: 'translateY(20px)' },
					'75%': { transform: 'translateY(50px)' },
					'100%': { transform: 'translateX(50px)' },
				},
			},
			animation: {
				'spin-slow': 'spin 46s linear infinite',
				slide: 'slide 2s ease-in infinite alternate',
				stroll: 'stroll 5s linear infinite alternate',
				'card-slide': 'slide 1.5s ease-in-out 2 alternate',
			},
		},
	},
	plugins: [],
};
