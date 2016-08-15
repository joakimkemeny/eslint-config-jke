module.exports = {
	plugins: ["import"],

	rules: {

		// Static analysis
		"import/default": "error",
		"import/named": "error",
		"import/namespace": "error",
		"import/no-restricted-paths": "off",
		"import/no-unresolved": "error",

		// Helpful warnings
		"import/export": "error", // eslint-disable-line
		"import/no-deprecated": "off",
		"import/no-extraneous-dependencies": [
			"error", { devDependencies: true, optionalDependencies: false, peerDependencies: false }
		],
		"import/no-mutable-exports": "error",
		"import/no-named-as-default": "error",
		"import/no-named-as-default-member": "error",

		// Module systems
		"import/no-amd": "error", // eslint-disable-line
		"import/no-commonjs": "off",
		"import/no-nodejs-modules": "off",

		// Style guide
		"import/extensions": ["error", { js: "never" }],  // eslint-disable-line
		"import/imports-first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error",
		"import/no-namespace": "off",
		"import/order": "error",
		"import/prefer-default-export": "error",

		// Rule from index.js conflicts with import/order, turn it off
		"sort-imports": "off"
	}
}
