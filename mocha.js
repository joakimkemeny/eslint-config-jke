module.exports = {
	plugins: ["mocha"],

	rules: {

		// Mocha
		"mocha/no-exclusive-tests": "error",
		"mocha/no-mocha-arrows": "off",
		"mocha/no-skipped-tests": "error",
		"mocha/no-pending-tests": "error",
		"mocha/handle-done-callback": "error",
		"mocha/no-synchronous-tests": "error",
		"mocha/no-global-tests": "error",
		"mocha/valid-test-description": "off",
		"mocha/valid-suite-description": "off"
	}
}
