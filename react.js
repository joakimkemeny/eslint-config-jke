const path = require("path")

module.exports = {
	extends: path.join(__dirname, "browser.js"),

	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},

	plugins: ["react", "jsx-a11y"],

	rules: {

		// Possible Errors
		// Workaround for multi line JSX.
		"no-extra-parens": ["error", "functions"],

		// Stylistic Issues
		"jsx-quotes": ["error", "prefer-double"], // eslint-disable-line

		// React
		"react/display-name": "off",
		"react/forbid-component-props": ["error", { forbid: ["style"] }],
		"react/forbid-elements": "off",
		"react/forbid-foreign-prop-types": "error",
		"react/forbid-prop-types": "off",
		"react/no-array-index-key": "error",
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
		"react/prefer-stateless-function": "off",
		"react/prop-types": "error",
		"react/react-in-jsx-scope": "error",
		"react/require-default-props": "error",
		"react/require-optimization": "off",
		"react/require-render-return": "error",
		"react/self-closing-comp": ["error", { component: true, html: true }],
		"react/sort-comp": "error",
		"react/sort-prop-types": ["error", { callbacksLast: false, ignoreCase: true, requiredFirst: false }],
		"react/style-prop-object": "error",
		"react/void-dom-elements-no-children": "off",

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
			"error", {
				callbacksLast: false,
				ignoreCase: true,
				noSortAlphabetically: false,
				shorthandFirst: false,
				shorthandLast: false
			}
		],
		"react/jsx-space-before-closing": ["error", "always"],
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react/jsx-wrap-multilines": ["error", { assignment: true, declaration: true, return: true }],

		// React
		"jsx-a11y/accessible-emoji": "error", // eslint-disable-line
		"jsx-a11y/anchor-has-content": "error",
		"jsx-a11y/aria-activedescendant-has-tabindex": "error",
		"jsx-a11y/aria-props": "error",
		"jsx-a11y/aria-proptypes": "error",
		"jsx-a11y/aria-role": "error",
		"jsx-a11y/aria-unsupported-elements": "error",
		"jsx-a11y/click-events-have-key-events": "error",
		"jsx-a11y/heading-has-content": "error",
		"jsx-a11y/href-no-hash": "error",
		"jsx-a11y/html-has-lang": "error",
		"jsx-a11y/iframe-has-title": "error",
		"jsx-a11y/img-has-alt": "error",
		"jsx-a11y/img-redundant-alt": "error",
		"jsx-a11y/label-has-for": "error",
		"jsx-a11y/lang": "error",
		"jsx-a11y/mouse-events-have-key-events": "error",
		"jsx-a11y/no-access-key": "error",
		"jsx-a11y/no-autofocus": "off",
		"jsx-a11y/no-distracting-elements": "error",
		"jsx-a11y/no-onchange": "error",
		"jsx-a11y/no-redundant-roles": "error",
		"jsx-a11y/no-static-element-interactions": "error",
		"jsx-a11y/onclick-has-focus": "error",
		"jsx-a11y/onclick-has-role": "error",
		"jsx-a11y/role-has-required-aria-props": "error",
		"jsx-a11y/role-supports-aria-props": "error",
		"jsx-a11y/scope": "error",
		"jsx-a11y/tabindex-no-positive": "error"
	}
}
