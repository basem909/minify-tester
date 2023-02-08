module.exports = (grunt) => {
  // Load the plug-in
  grunt.loadNpmTask("grunt-contrib-uglify");

  // Configure the plug-in
  grunt.initConfig({
    uglify: {
      build: {
        files : {
          src: 'js/*.js',
          dist: 'build/app.js'
        }
      }
    }
  })
}