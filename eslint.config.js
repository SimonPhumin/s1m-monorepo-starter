const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const nxEslintPlugin = require('@nx/eslint-plugin');

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended
});

module.exports = [
	{ plugins: { '@nx': nxEslintPlugin } },
	{
		files: ['**/*.ts'],
		languageOptions: {
			parserOptions: {
				project: ['*/tsconfig.json']
			}
		}
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		rules: {
			'@nx/enforce-module-boundaries': [
				'error',
				{
					enforceBuildableLibDependency: true,
					allow: [],
					depConstraints: [
						{
							sourceTag: '*',
							onlyDependOnLibsWithTags: ['*']
						}
					]
				}
			]
		}
	},
	...compat
		.config({
			extends: ['plugin:@nx/typescript']
		})
		.map((config) => ({
			...config,
			files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
			rules: {
				...config.rules,
				'@typescript-eslint/no-extra-semi': 'error',
				'no-extra-semi': 'off'
			}
		})),
	...compat
		.config({
			extends: ['plugin:@nx/javascript']
		})
		.map((config) => ({
			...config,
			files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
			rules: {
				...config.rules,
				'@typescript-eslint/no-extra-semi': 'error',
				'no-extra-semi': 'off'
			}
		})),
	...compat
		.config({
			extends: ['plugin:ngrx/recommended']
		})
		.map((config) => ({
			...config,
			files: ['**/*.ts'],
			rules: {
				...config.rules
			}
		})),
	{
		ignores: ['.eslintrc.json', '.angular', '.vscode', 'tools']
	}
];
