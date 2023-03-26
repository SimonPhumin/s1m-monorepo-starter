/* eslint-disable */
export default {
	displayName: 'common-features-users',
	preset: '../../../../jest.preset.js',
	globals: {},
	transform: {
		'^.+\\.[tj]sx?$': [
			'ts-jest',
			{
				tsconfig: '<rootDir>/tsconfig.spec.json'
			}
		]
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	coverageDirectory: '../../../../coverage/libs/common/features/users'
};
