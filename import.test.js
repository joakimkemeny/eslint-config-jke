/* eslint-env mocha */
import eslint from "eslint"
import { expect } from "chai"
import isPlainObj from "is-plain-obj"
import tempWrite from "temp-write"
import conf from "./import"

describe("Import", () => {

	it("should be a valid config", () => {
		expect(isPlainObj(conf)).to.equal(true)
		expect(isPlainObj(conf.rules)).to.equal(true)
	})

	it("should trigger an error for violation", () => {
		const engine = new eslint.CLIEngine({
			configFile: tempWrite.sync(JSON.stringify(conf)),
			useEslintrc: false
		})
		const input = "require('unknown')"
		const results = engine.executeOnText(input, "input", true).results[0].messages
		expect(results[0].ruleId).to.equal("import/no-unassigned-import")
	})
})
