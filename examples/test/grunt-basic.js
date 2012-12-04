module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    gluejs: {
      "dist/basic.js": {
        entries: ["lib/A.js"]
      }
    }
  });

  grunt.loadTasks("../../tasks/");
  grunt.registerTask("default", "gluejs");
};
