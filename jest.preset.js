const nxPreset = require('@nx/jest/preset');

module.exports = {
	...nxPreset,
	escapeString: false,
	printBasicPrototype: false
};
