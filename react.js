const path = require("path")

module.exports = {
	extends: path.join(__dirname, "browser.js"),

	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},

	plugins: ["react"],

	rules: {

		// Possible Errors
		// Workaround for multiline JSX.
		"no-extra-parens": ["error", "functions"],

		// Stylistic Issues
		"jsx-quotes": ["error", "prefer-double"], // eslint-disable-line

		// React
		"react/display-name": "off",
		"react/forbid-component-props": ["error", { forbid: ["style"] }],
		"react/forbid-prop-types": "off",
		"react/no-children-prop": "off",
		"react/no-danger": "error",
		"react/no-danger-with-children": "error",
		"react/no-deprecated": "error",
		"react/no-did-mount-set-state": ["error"],
		"react/no-did-update-set-state": "error",
		"react/no-direct-mutation-state": "error",
		"react/no-find-dom-node": "error",
		"react/no-is-mounted": "error",
		"react/no-multi-comp": "error",
		"react/no-render-return-value": "error",
		"react/no-set-state": "off",
		"react/no-string-refs": "error",
		"react/no-unescaped-entities": "error",
		"react/no-unknown-property": "error",
		"react/no-unused-prop-types": "error",
		"react/prefer-es6-class": ["error", "always"],
		"react/prefer-stateless-function": "error",
		"react/prop-types": "error",
		"react/react-in-jsx-scope": "error",
		"react/require-optimization": "off",
		"react/require-render-return": "error",
		"react/self-closing-comp": ["error", { component: true, html: true }],
		"react/sort-comp": "error",
		"react/sort-prop-types": ["error", { callbacksLast: false, ignoreCase: true, requiredFirst: false }],
		"react/style-prop-object": "error",

		// JSX
		"react/jsx-boolean-value": ["error", "never"], // eslint-disable-line
		"react/jsx-closing-bracket-location": ["error", { nonEmpty: "after-props", selfClosing: "after-props" }],
		"react/jsx-curly-spacing": ["error", "always", { allowMultiline: true, spacing: { objectLiterals: "always" } }],
		"react/jsx-equals-spacing": ["error", "never"],
		"react/jsx-filename-extension": ["error", { extensions: [".js"] }],
		"react/jsx-first-prop-new-line": ["error", "multiline"],
		"react/jsx-handler-names": ["error", { eventHandlerPrefix: "handle", eventHandlerPropPrefix: "on" }],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"react/jsx-key": "error",
		"react/jsx-max-props-per-line": "off",
		"react/jsx-no-bind": ["error", { allowArrowFunctions: false, allowBind: false, ignoreRefs: false }],
		"react/jsx-no-comment-textnodes": "error",
		"react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
		"react/jsx-no-literals": "off",
		"react/jsx-no-target-blank": "error",
		"react/jsx-no-undef": "error",
		"react/jsx-pascal-case": ["error", { allowAllCaps: false }],
		"react/jsx-sort-props": [
			"error", { callbacksLast: false, ignoreCase: true, shorthandFirst: false, shorthandLast: false }
		],
		"react/jsx-space-before-closing": ["error", "always"],
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react/jsx-wrap-multilines": ["error", { assignment: true, declaration: true, return: true }]
	}
}
