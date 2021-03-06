module.exports = {
	plugins: ["mocha"],

	rules: {

		// Mocha
		"mocha/handle-done-callback": "error",
		"mocha/max-top-level-suites": "off",
		"mocha/no-exclusive-tests": "error",
		"mocha/no-global-tests": "error",
		"mocha/no-hooks": "off",
		"mocha/no-hooks-for-single-case": "off",
		"mocha/no-identical-title": "off",
		"mocha/no-mocha-arrows": "off",
		"mocha/no-nested-tests": "error",
		"mocha/no-pending-tests": "error",
		"mocha/no-return-and-callback": "error",
		"mocha/no-sibling-hooks": "error",
		"mocha/no-skipped-tests": "error",
		"mocha/no-synchronous-tests": "off",
		"mocha/no-top-level-hooks": "error",
		"mocha/valid-suite-description": "off",
		"mocha/valid-test-description": "off"
	}
}
