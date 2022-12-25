/* eslint-disable */
module.exports = {
	displayName: 'stores-users',
	preset: '../../../jest.preset.js',
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.spec.json'
		}
	},
	testEnvironment: 'node',
	transform: {
		'^.+\\.[tj]sx?$': 'ts-jest'
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	coverageDirectory: '../../../coverage/libs/stores/users'
};