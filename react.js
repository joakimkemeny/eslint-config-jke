var path = require('path');

module.exports = {
	extends: path.join(__dirname, 'browser.js'),

	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},

	plugins: ['react'],

	rules: {}
};
