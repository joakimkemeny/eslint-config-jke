/* eslint-env mocha */
import conf from "./mocha"
import eslint from "eslint"
import { expect } from "chai"
import isPlainObj from "is-plain-obj"
import tempWrite from "temp-write"

describe("Mocha", () => {

	it("should be a valid config", () => {
		expect(isPlainObj(conf)).to.equal(true)
		expect(isPlainObj(conf.rules)).to.equal(true)
	})

	it("should trigger an error for violation", () => {
		const engine = new eslint.CLIEngine({
			useEslintrc: false,
			configFile: tempWrite.sync(JSON.stringify(conf))
		})
		const input = "it('should work', function () {})"
		const results = engine.executeOnText(input, "input").results[0].messages
		expect(results[0].ruleId).to.equal("mocha/no-global-tests")
	})
})
