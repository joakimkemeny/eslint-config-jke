var path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),

	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},

	plugins: ['react'],

	rules: {}
};
