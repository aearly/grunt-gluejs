grunt-gluejs
============

Grunt wrapper for GlueJS

Example Config:

```javascript

  grunt.initConfig({
    gluejs: {
      "dist/index.js": {
        basepath: "lib",
        includes: ["lib/*.js"],
        excludes: ["lib/C.js"],
        replace: {
          "jQuery": "window.$"
        },
        npm: {
          "lodash": "../../"
        },
        exportName: "A"
      }
    }
  });

  grunt.loadNpmTasks("grunt-gluejs");

```
