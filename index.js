'use strict';

module.exports = {

	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module'
	},

	env: {
		browser: true,
		es6: true
	},

	globals: {},

	rules: {

		// Possible Errors
		'comma-dangle': ['error', 'never'],
		'no-cond-assign': ['error', 'always'],
		'no-console': 'error',
		'no-constant-condition': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-parens': 'error',
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-negated-in-lhs': 'error',
		'no-obj-calls': 'error',
		'no-prototype-builtins': 'error',
		'no-regex-spaces': 'error',
		'no-sparse-arrays': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'use-isnan': 'error',
		'valid-jsdoc': [
			'error', {
				prefer: {return: 'returns'},
				requireReturn: false
			}
		],
		'valid-typeof': 'error'
	}
};
