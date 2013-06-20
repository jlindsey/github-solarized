var grunt = require('grunt');

grunt.initConfig({
  sass: {
    styles: {
      files: {
        'styles/gruntSolarizedDark.css': 'styles/githubSolarizedDark.scss',
        'styles/gruntSolarizedLight.css': 'styles/githubSolarizedLight.scss'
      }
    }
  },

  watch: {
    sass: {
      files: ['styles/*.scss'],
      tasks: ['sass']
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['sass']);
grunt.registerTask('dev', ['sass', 'watch']);
