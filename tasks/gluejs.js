var Glue = require("gluejs"),
  _ = require("lodash");

module.exports = function (grunt) {
  "use strict";

  grunt.registerMultiTask("gluejs", "Build CommonJS-style modules for the browser", function () {
    var self = this,
      glue = new Glue();

    if (this.data.basepath) {
      glue.basepath(this.data.basepath);
    }

    _.each(grunt.file.expandFiles(this.data.includes || []), function (entry) {
      glue.include(entry);
    });

    _.each(grunt.file.expandFiles(this.data.excludes || []), function (entry) {
      glue.exclude(entry);
    });

    _.each(this.data.replace || {}, function (path, name) {
      glue.replace(name, path);
    });

    _.each(this.data.npm || {}, function (path, name) {
      glue.npm(name, path);
    });

    if (this.data.exportName) {
      glue["export"](this.data.exportName);
    }

    glue.render(function (err, txt) {
      grunt.file.write(self.target, txt);
      self.async();
    });
  });

};
