module.exports = {
	plugins: ["import"],

	rules: {

		// Static analysis
		"import/no-unresolved": "error",
		"import/named": "error",
		"import/default": "error",
		"import/namespace": "error",
		"import/no-restricted-paths": "off",

		// Helpful warnings
		"import/export": "error",
		"import/no-named-as-default": "error",
		"import/no-named-as-default-member": "error",
		"import/no-deprecated": "off",
		"import/no-extraneous-dependencies": [
			"error", { devDependencies: true, optionalDependencies: false, peerDependencies: false }
		],
		"import/no-mutable-exports": "error",

		// Module systems
		"import/no-commonjs": "off",
		"import/no-amd": "error",
		"import/no-nodejs-modules": "off",

		// Style guide
		"import/imports-first": "error",
		"import/no-duplicates": "error",
		"import/no-namespace": "off",
		"import/extensions": ["error", { js: "never" }],
		"import/order": "error",
		"import/newline-after-import": "error",
		"import/prefer-default-export": "error",

		// Rule from index.js conflicts with import/order, turn it off
		"sort-imports": "off"
	}
}
