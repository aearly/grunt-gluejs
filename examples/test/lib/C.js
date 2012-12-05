var _ = require("lodash");

module.exports = _.map("asdf,asdf,asdf".split(), function (word, i) {
	return i + word;
});
