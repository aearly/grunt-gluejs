var expect = require("expect.js"),
	fs = require("fs"),
	exec = require("child_process").exec;


describe("Test project 1:", function () {
	it("should build properly", function (done) {
		fs.unlinkSync(__dirname + "/../examples/test/dist/basic.js");
		exec("grunt --config " + __dirname + "/../examples/test/grunt-basic.js", function (err, stdout, stderr) {
			console.log(stderr + stdout);
			expect(err).to.equal(null);
			expect(fs.existsSync(__dirname + "/../examples/test/dist/basic.js")).to.equal(true);
			done();
		});
	});

	it("should process NPM modules", function (done) {
		try {
			fs.unlinkSync(__dirname + "/../examples/test/dist/npm.js");
		} catch (e) {}
		exec("grunt --config " + __dirname + "/../examples/test/grunt-npm.js", function (err, stdout, stderr) {
			console.log(stderr + stdout);
			expect(err).to.equal(null);
			expect(fs.existsSync(__dirname + "/../examples/test/dist/npm.js")).to.equal(true);
			done();
		});
	});
});
