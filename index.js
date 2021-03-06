module.exports = {

	env: {
		es6: true
	},

	globals: {},

	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true
		},
		ecmaVersion: 6,
		sourceType: "module"
	},

	rules: {

		// Possible Errors
		"no-cond-assign": ["error", "always"],
		"no-console": "error",
		"no-constant-condition": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-dupe-args": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-ex-assign": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-parens": "error",
		"no-extra-semi": "error",
		"no-func-assign": "error",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		"no-obj-calls": "error",
		"no-prototype-builtins": "off",
		"no-regex-spaces": "error",
		"no-sparse-arrays": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"use-isnan": "error",
		"valid-jsdoc": ["error", { prefer: { return: "returns" }, requireReturn: false }],
		"valid-typeof": ["error", { requireStringLiterals: true }],

		// Best Practices
		"accessor-pairs": "error",  // eslint-disable-line
		"array-callback-return": "error",
		"block-scoped-var": "error",
		"class-methods-use-this": "error",
		"complexity": ["error", { max: 20 }],
		"consistent-return": "error",
		"curly": "error",
		"default-case": "error",
		"dot-location": ["error", "property"],
		"dot-notation": "error",
		"eqeqeq": "error",
		"guard-for-in": "error",
		"no-alert": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-div-regex": "error",
		"no-else-return": "error",
		"no-empty-function": "error",
		"no-empty-pattern": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-fallthrough": "error",
		"no-floating-decimal": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-loop-func": "error",
		"no-magic-numbers": ["error", { ignoreArrayIndexes: true }],
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": ["error", { props: true }],
		"no-proto": "error",
		"no-redeclare": ["error", { builtinGlobals: true }],
		"no-return-assign": ["error", "always"],
		"no-script-url": "error",
		"no-self-assign": ["error", { props: true }],
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-useless-return": "error",
		"no-void": "error",
		"no-warning-comments": "error",
		"no-with": "error",
		"radix": ["error", "always"],
		"vars-on-top": "error",
		"wrap-iife": ["error", "inside"],
		"yoda": "off",

		// Strict Mode
		"strict": ["error", "safe"], // eslint-disable-line

		// Variables
		"init-declarations": "off", // eslint-disable-line
		"no-catch-shadow": "error",
		"no-delete-var": "error",
		"no-label-var": "error",
		"no-restricted-globals": "off",
		"no-shadow": ["error", { builtinGlobals: true, hoist: "all" }],
		"no-shadow-restricted-names": "error",
		"no-undef": ["error", { typeof: true }],
		"no-undef-init": "error",
		"no-undefined": "error",
		"no-unused-vars": ["error", { args: "after-used", caughtErrors: "all", vars: "all" }],
		"no-use-before-define": ["error", "nofunc"],

		// Stylistic Issues
		"array-bracket-spacing": ["error", "never"], // eslint-disable-line
		"block-spacing": ["error", "always"],
		"brace-style": ["error", "1tbs", { allowSingleLine: false }],
		"camelcase": ["error", { properties: "never" }],
		"comma-dangle": ["error", "never"],
		"comma-spacing": ["error", { after: true, before: false }],
		"comma-style": ["error", "last"],
		"computed-property-spacing": ["error", "never"],
		"consistent-this": ["error", "self"],
		"eol-last": ["error", "always"],
		"func-call-spacing": ["error", "never"],
		"func-name-matching": "error",
		"func-names": "off",
		"func-style": ["error", "declaration", { allowArrowFunctions: true }],
		"id-blacklist": ["error", "callback", "cb", "data", "e", "err"],
		"id-length": ["error", { min: 2, properties: "always" }],
		"id-match": "off",
		"indent": ["error", "tab", { SwitchCase: 1 }],
		"key-spacing": ["error", { afterColon: true, beforeColon: false, mode: "strict" }],
		"keyword-spacing": ["error", { after: true, before: true }],
		"line-comment-position": "off",
		"linebreak-style": ["error", "unix"],
		"lines-around-comment": ["error", { beforeBlockComment: true }],
		"lines-around-directive": ["error", "always"],
		"max-depth": ["error", { max: 5 }],
		"max-len": ["error", { code: 120, tabWidth: 3 }],
		"max-lines": ["error", { max: 300, skipBlankLines: false, skipComments: false }],
		"max-nested-callbacks": ["error", { max: 5 }],
		"max-params": ["error", { max: 5 }],
		"max-statements": "off",
		"max-statements-per-line": ["error", { max: 1 }],
		"multiline-ternary": "off",
		"new-cap": ["error", { capIsNew: true, newIsCap: true, properties: true }],
		"new-parens": "error",
		"newline-after-var": "off",
		"newline-before-return": "off",
		"newline-per-chained-call": "off",
		"no-array-constructor": "error",
		"no-bitwise": "error",
		"no-continue": "error",
		"no-inline-comments": "off",
		"no-lonely-if": "error",
		"no-mixed-operators": "error",
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],
		"no-negated-condition": "error",
		"no-nested-ternary": "error",
		"no-new-object": "error",
		"no-plusplus": "error",
		"no-restricted-syntax": "off",
		"no-tabs": "off",
		"no-template-curly-in-string": "error",
		"no-ternary": "off",
		"no-trailing-spaces": ["error", { skipBlankLines: false }],
		"no-underscore-dangle": "error",
		"no-unneeded-ternary": "error",
		"no-whitespace-before-property": "error",
		"object-curly-newline": "off",
		"object-curly-spacing": ["error", "always", { arraysInObjects: true, objectsInObjects: true }],
		"object-property-newline": "off",
		"one-var": ["error", "never"],
		"one-var-declaration-per-line": "off",
		"operator-assignment": ["error", "always"],
		"operator-linebreak": ["error", "after", { overrides: { ":": "before", "?": "before" } }],
		"padded-blocks": "off",
		"quote-props": ["error", "consistent-as-needed"],
		"quotes": ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }],
		"require-jsdoc": "off",
		"semi": ["error", "never"],
		"semi-spacing": ["error", { after: true, before: false }],
		"sort-keys": ["error", "asc", { caseSensitive: false, natural: true }],
		"sort-vars": ["error", { ignoreCase: true }],
		"space-before-blocks": ["error", "always"],
		"space-before-function-paren": ["error", { anonymous: "always", named: "never" }],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-unary-ops": ["error", { nonwords: false, words: true }],
		"spaced-comment": ["error", "always"],
		"unicode-bom": ["error", "never"],
		"wrap-regex": "off",

		// ECMAScript 6
		"arrow-body-style": ["error", "as-needed", { requireReturnForObjectLiteral: false }],  // eslint-disable-line
		"arrow-parens": ["error", "always"],
		"arrow-spacing": ["error", { after: true, before: true }],
		"constructor-super": "error",
		"generator-star-spacing": ["error", "after"],
		"no-class-assign": "error",
		"no-confusing-arrow": ["error", { allowParens: true }],
		"no-const-assign": "error",
		"no-dupe-class-members": "error",
		"no-duplicate-imports": ["error", { includeExports: false }],
		"no-new-symbol": "error",
		"no-restricted-imports": "off",
		"no-this-before-super": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": ["error", { ignoreDestructuring: false, ignoreExport: false, ignoreImport: false }],
		"no-var": "error",
		"object-shorthand": ["error", "always", { avoidQuotes: true, ignoreConstructors: true }],
		"prefer-arrow-callback": [
			"error", { allowNamedFunctions: false, allowUnboundThis: false }
		],
		"prefer-const": ["error", { destructuring: "any", ignoreReadBeforeAssign: false }],
		"prefer-numeric-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"require-yield": "error",
		"rest-spread-spacing": ["error", "never"],
		"sort-imports": [
			"error",
			{
				ignoreCase: true, ignoreMemberSort: false,
				memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
			}
		],
		"symbol-description": "error",
		"template-curly-spacing": ["error", "never"],
		"yield-star-spacing": ["error", "after"]
	}
}
