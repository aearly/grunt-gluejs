module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    gluejs: {
      "dist/npm.js": {
        basepath: "lib",
        includes: ["lib/C.js"],
        excludes: [],
        replace: {
          "jQuery": "window.$"
        },
        npm: {
          "lodash": "../../"
        },
        exportName: "C"
      }
    }
  });

  grunt.loadTasks("../../tasks/");
  grunt.registerTask("default", "gluejs");
};
