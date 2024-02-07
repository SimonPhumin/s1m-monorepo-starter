const nxPreset = require('@nrwl/jest/preset');

module.exports = {
	...nxPreset,
	escapeString: false,
	printBasicPrototype: false
};
