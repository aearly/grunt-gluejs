module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    gluejs: {
      "dist/basic.js": {
        basepath: "lib",
        includes: ["lib/*.js"],
        excludes: ["lib/C.js"],
        replace: [],
        exportName: "A"
      }
    }
  });

  grunt.loadTasks("../../tasks/");
  grunt.registerTask("default", "gluejs");
};
