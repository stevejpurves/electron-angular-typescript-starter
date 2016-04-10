module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/', src: ['**/*.html','**/*.css'], dest: 'app/'}
        ]
      }
    },
    ts: {
      default: {
        tsconfig: true
      }
    },
    watch: {
      files: ['src/**'],
      tasks: ['build']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks("grunt-tslint");
  grunt.loadNpmTasks("grunt-ts");

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('build', ['copy','ts'])

};