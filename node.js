const path = require("path")

module.exports = {
	extends: path.join(__dirname, "index.js"),

	env: {
		node: true
	},

	rules: {

		// Node.js and CommonJS
		"callback-return": "error",
		"global-require": "error",
		"handle-callback-err": ["error", "error"],
		"no-mixed-requires": ["error", { allowCall: true, grouping: true }],
		"no-new-require": "error",
		"no-path-concat": "error",
		"no-process-env": "error",
		"no-process-exit": "error",
		"no-restricted-modules": "off",
		"no-sync": "error"
	}
}
