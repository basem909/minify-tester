module.exports = (grunt) => {
  // Load the plug-in
  grunt.loadNpmTasks("grunt-contrib-uglify");
  // Configure the plug-in
  grunt.initConfig({
    uglify: {
      build: {
        files: [
          {
            src: ["js/*.js"],
            dest: "build/app.js",
          },
        ],
      },
    },
  });
};
