module.exports = {

	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module'
	},

	env: {
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
		'valid-typeof': 'error',

		// Best Practices
		'accessor-pairs': 'error',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'complexity': [
			'error', {
				max: 20
			}
		],
		'consistent-return': 'error',
		'curly': 'error',
		'default-case': 'error',
		'dot-location': ['error', 'property'],
		'dot-notation': 'error',
		'eqeqeq': 'error',
		'guard-for-in': 'error',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-div-regex': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'error',
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-invalid-this': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': [
			'error', {
				ignoreArrayIndexes: true
			}
		],
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-native-reassign': 'error',
		'no-new-func': 'error',
		'no-new': 'error',
		'no-new-wrappers': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': [
			'error', {
				props: true
			}
		],
		'no-proto': 'error',
		'no-redeclare': [
			'error', {
				builtinGlobals: true
			}
		],
		'no-return-assign': ['error', 'always'],
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-void': 'error',
		'no-warning-comments': 'error',
		'no-with': 'error',
		'radix': ['error', 'always'],
		'vars-on-top': 'error',
		'wrap-iife': ['error', 'inside'],
		'yoda': 'off',

		// Strict Mode
		'strict': ['error', 'safe']
	}
};
