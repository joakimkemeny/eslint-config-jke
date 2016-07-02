module.exports = {

	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module"
	},

	env: {
		es6: true
	},

	globals: {},

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
		"no-negated-in-lhs": "error",
		"no-obj-calls": "error",
		"no-prototype-builtins": "error",
		"no-regex-spaces": "error",
		"no-sparse-arrays": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"use-isnan": "error",
		"valid-jsdoc": ["error", { prefer: { return: "returns" }, requireReturn: false }],
		"valid-typeof": "error",

		// Best Practices
		"accessor-pairs": "error",
		"array-callback-return": "error",
		"block-scoped-var": "error",
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
		"no-native-reassign": "error",
		"no-new-func": "error",
		"no-new": "error",
		"no-new-wrappers": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": ["error", { props: true }],
		"no-proto": "error",
		"no-redeclare": ["error", { builtinGlobals: true }],
		"no-return-assign": ["error", "always"],
		"no-script-url": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-void": "error",
		"no-warning-comments": "error",
		"no-with": "error",
		"radix": ["error", "always"],
		"vars-on-top": "error",
		"wrap-iife": ["error", "inside"],
		"yoda": "off",

		// Strict Mode
		"strict": ["error", "safe"],

		// Variables
		"init-declarations": "off",
		"no-catch-shadow": "error",
		"no-delete-var": "error",
		"no-label-var": "error",
		"no-restricted-globals": "off",
		"no-shadow": ["error", { builtinGlobals: true, hoist: "all" }],
		"no-shadow-restricted-names": "error",
		"no-undef": ["error", { typeof: true }],
		"no-undef-init": "error",
		"no-undefined": "error",
		"no-unused-vars": ["error", { vars: "all", args: "after-used", caughtErrors: "all" }],
		"no-use-before-define": ["error", "nofunc"],

		// Stylistic Issues
		"array-bracket-spacing": ["error", "never"],
		"block-spacing": ["error", "always"],
		"brace-style": ["error", "1tbs", { allowSingleLine: false }],
		"camelcase": ["error", { properties: "always" }],
		"comma-dangle": ["error", "never"],
		"comma-spacing": ["error", { before: false, after: true }],
		"comma-style": ["error", "last"],
		"computed-property-spacing": ["error", "never"],
		"consistent-this": ["error", "self"],
		"eol-last": ["error", "unix"],
		"func-names": "off",
		"func-style": ["error", "declaration", { allowArrowFunctions: true }],
		"id-blacklist": ["error", "data", "err", "e", "cb", "callback"],
		"id-length": ["error", { min: 3, properties: "always" }],
		"id-match": "off",
		"indent": ["error", "tab", { SwitchCase: 1 }],
		"key-spacing": ["error", { afterColon: true, beforeColon: false, mode: "strict" }],
		"keyword-spacing": ["error", { after: true, before: true }],
		"linebreak-style": ["error", "unix"],
		"lines-around-comment": ["error", { beforeBlockComment: true }],
		"max-depth": ["error", { max: 5 }],
		"max-len": ["error", { code: 120, tabWidth: 3 }],
		"max-lines": ["error", { max: 300, skipBlankLines: false, skipComments: false }],
		"max-nested-callbacks": ["error", { max: 5 }],
		"max-params": ["error", { max: 5 }],
		"max-statements": "off",
		"max-statements-per-line": ["error", { max: 1 }],
		"new-cap": ["error", { newIsCap: true, capIsNew: true, properties: true }],
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
		"no-spaced-func": "error",
		"no-ternary": "off",
		"no-trailing-spaces": ["error", { skipBlankLines: false }],
		"no-underscore-dangle": "error",
		"no-unneeded-ternary": "error",
		"no-whitespace-before-property": "error",
		"object-curly-newline": "off",
		"object-curly-spacing": ["error", "always", { objectsInObjects: true, arraysInObjects: true }],
		"object-property-newline": "off",
		"one-var": ["error", "never"],
		"one-var-declaration-per-line": "off",
		"operator-assignment": ["error", "always"],
		"operator-linebreak": ["error", "after", { overrides: { "?": "before", ":": "before" } }],
		"padded-blocks": "off",
		"quote-props": ["error", "consistent-as-needed"],
		"quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
		"require-jsdoc": "off",
		"semi": ["error", "never"],
		"semi-spacing": ["error", { before: false, after: true }],
		"sort-vars": ["error", { ignoreCase: true }],
		"space-before-blocks": ["error", "always"],
		"space-before-function-paren": ["error", { anonymous: "always", named: "never" }],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-unary-ops": ["error", { words: true, nonwords: false }],
		"spaced-comment": ["error", "always"],
		"unicode-bom": ["error", "never"],
		"wrap-regex": "off"
	}
}
