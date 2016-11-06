module.exports = {
	plugins: ["import"],

	rules: {

		// Static analysis
		"import/default": "error",
		"import/named": "error",
		"import/namespace": "error",
		"import/no-absolute-path": "error",
		"import/no-dynamic-require": "error",
		"import/no-internal-modules": "off",
		"import/no-restricted-paths": "off",
		"import/no-unresolved": "error",
		"import/no-webpack-loader-syntax": "error",

		// Helpful warnings
		"import/export": "error", // eslint-disable-line
		"import/no-deprecated": "off",
		"import/no-extraneous-dependencies": [
			"error", {
				devDependencies: ["**/*.config.js", "**/*.story.js", "**/*.test.js", "**/*.test-e2e.js"],
				optionalDependencies: false,
				peerDependencies: false
			}
		],
		"import/no-mutable-exports": "error",
		"import/no-named-as-default": "error",
		"import/no-named-as-default-member": "error",

		// Module systems
		"import/no-amd": "error", // eslint-disable-line
		"import/no-commonjs": "off",
		"import/no-nodejs-modules": "off",
		"import/unambiguous": "off",

		// Style guide
		"import/extensions": ["error", { js: "never" }],  // eslint-disable-line
		"import/first": "error",
		"import/max-dependencies": "off",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error",
		"import/no-named-default": "off",
		"import/no-namespace": "off",
		"import/no-unassigned-import": "error",
		"import/order": "error",
		"import/prefer-default-export": "off",

		// Rule from index.js conflicts with import/order, turn it off
		"sort-imports": "off"
	},

	settings: {
		"import/ignore": [".(scss|less|css)"]
	}
}
