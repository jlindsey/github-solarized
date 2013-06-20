var grunt = require('grunt');

grunt.initConfig({
  sass: {
    styles: {
      files: {
        'styles/githubSolarized.css': 'styles/githubSolarized.scss'
      }
    }
  },

  watch: {
    sass: {
      files: ['styles/*.scss'],
      tasks: ['sass']
    }
  },

  clean: {
    css: {
      src: ['styles/*.css']
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-clean');

grunt.registerTask('default', ['sass']);
grunt.registerTask('dev', ['sass', 'watch']);
