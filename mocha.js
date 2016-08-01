module.exports = {
	plugins: ["mocha"],

	rules: {

		// Mocha
		"mocha/handle-done-callback": "error",
		"mocha/no-exclusive-tests": "error",
		"mocha/no-hooks": "off",
		"mocha/no-global-tests": "error",
		"mocha/no-mocha-arrows": "off",
		"mocha/no-pending-tests": "error",
		"mocha/no-sibling-hooks": "error",
		"mocha/no-skipped-tests": "error",
		"mocha/no-synchronous-tests": "error",
		"mocha/valid-test-description": "off",
		"mocha/valid-suite-description": "off"
	}
}
