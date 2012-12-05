module.exports = function (grunt) {
  grunt.initConfig({
    lint: {
      files: ["grunt.js", "tasks/*.js", "test/*.js", "examples/**/lib/*.js", "examples/**/grunt*.js"]
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true,
        strict: false
      },
      globals: {
        define: true,
        describe: true,
        it: true
      }
    },
    simplemocha: {
      all: {
        src: ["test/*.test.js"],
        options: {
          growl: true,
          reporter: "spec"
        }
      }
    },
    watch: {
      files: "<config:lint.files>",
      tasks: "default"
    }
  });

  grunt.loadNpmTasks("grunt-simple-mocha");
  grunt.registerTask("mocha", "simplemocha:all");
  grunt.registerTask("default", "lint mocha");
};
