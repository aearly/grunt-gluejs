var expect = require("expect.js"),
	fs = require("fs"),
	exec = require("child_process").exec;


describe("Test project 1:", function () {
	it("should build properly", function (done) {
		exec("grunt --config " + __dirname + "/../examples/test/grunt-basic.js", function (err, stdout, stderr) {
			console.log(stderr + stdout);
			expect(err).to.equal(null);
			done();
		});
	});
});
