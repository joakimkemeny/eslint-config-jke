const path = require("path")

module.exports = {
	extends: [
		path.join(__dirname, "node.js"),
		path.join(__dirname, "mocha.js"),
		path.join(__dirname, "import.js")
	],

	rules: {
		"import/default": "off"
	}
}
