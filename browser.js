const path = require("path")

module.exports = {
	extends: path.join(__dirname, "index.js"),

	env: {  // eslint-disable-line
		browser: true
	},

	rules: {}
}
