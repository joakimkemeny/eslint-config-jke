const path = require("path")

module.exports = {
	extends: [
		path.join(__dirname, "node.js"),
		path.join(__dirname, "import.js"),
		path.join(__dirname, "jest.js")
	]
}
