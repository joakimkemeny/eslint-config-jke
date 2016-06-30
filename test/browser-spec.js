/* eslint-env mocha */
import {expect} from 'chai';
import eslint from 'eslint';
import isPlainObj from 'is-plain-obj';
import tempWrite from 'temp-write';

describe('Browser', () => {
	const conf = require('../browser');

	it('should be a valid config', () => {
		expect(isPlainObj(conf)).to.equal(true);
		expect(isPlainObj(conf.rules)).to.equal(true);
	});

	it('should trigger an error for violation', () => {
		const linter = new eslint.CLIEngine({
			useEslintrc: false,
			configFile: tempWrite.sync(JSON.stringify(conf))
		});
		const input = 'console.log("text")';
		const results = linter.executeOnText(input).results[0].messages;
		expect(results[0].ruleId).to.equal('no-console');
	});
});
