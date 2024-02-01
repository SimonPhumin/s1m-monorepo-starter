/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
	content: ['src/**/*.{html,ts}'],
	theme: {
		extend: {
			animation: {
				loading: 'loading 2000ms infinite',
			},
			aspectRatio: {
				classic: '4 / 3',
				film: '3 / 2',
				anamorphic: '21 / 9',
				'ultra-wide': '32 / 9',
			},
			boxShadow: {
				border: '0 0 0 0.0625rem',
				'item-focus': '0px 0rem 0.5rem 0rem',
				'icon-inset': 'inset 0px 0.125rem 0.0625rem',
			},
			content: {
				empty: '""',
				unset: 'unset',
			},
			fontSize: {
				xxs: ['0.625rem', { lineHeight: '1rem' }],
			},
			keyframes: {
				loading: {
					from: { backgroundPositionX: '100%' },
					to: { backgroundPositionX: '-100%' },
				},
			},
			maxWidth: {
				'1/2': '50%',
			},
		},
	},
	plugins: [],
};