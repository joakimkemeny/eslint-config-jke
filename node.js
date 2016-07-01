var path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),

	env: {
		node: true
	},

	rules: {
		'callback-return': 'error',
		'global-require': 'error',
		'handle-callback-err': ['error', 'err'],
		'no-mixed-requires': [
			'error', {
				allowCall: true,
				grouping: true
			}
		],
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'no-process-env': 'error',
		'no-process-exit': 'error',
		'no-restricted-modules': 'off',
		'no-sync': 'error'
	}
};
