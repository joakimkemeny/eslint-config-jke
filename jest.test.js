/* eslint-env jest */
const eslint = require("eslint")
const isPlainObj = require("is-plain-obj")
const tempWrite = require("temp-write")
const conf = require("./jest")

describe("Jest", () => {

	test("should be a valid config", () => {
		expect(isPlainObj(conf)).toBeTruthy()
		expect(isPlainObj(conf.rules)).toBeTruthy()
	})

	test("should trigger an error for violation", () => {
		const engine = new eslint.CLIEngine({
			configFile: tempWrite.sync(JSON.stringify(conf)),
			useEslintrc: false
		})
		const input = "it.skip('should work', function () {})"
		const results = engine.executeOnText(input, "input", true).results[0].messages
		expect(results[0].ruleId).toEqual("jest/no-disabled-tests")
	})
})
