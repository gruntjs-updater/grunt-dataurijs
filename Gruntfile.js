/*
 * grunt-dataurijs
 * https://github.com/jeanpylone/grunt-dataurijs
 *
 * Copyright (c) 2014 Jean-Philippe Schneider
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    dataurijs: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options': ['test/fixtures/testing.txt', 'test/fixtures/image.png', 'test/fixtures/sounds/test.mp3']
        }
      },
        custom_options: {
            options: {
                itemFormat: '"%s" : "%s",',
                fileHeader: 'angular.module("testModule").factory([function(){return {',
                fileFooter: '"_":null};}]);'
            },
            files: {
                'tmp/custom_options': ['test/fixtures/testing.txt', 'test/fixtures/image.png', 'test/fixtures/sounds/test.mp3']
            }
        },
        custom_options_u: {
            options: {
                itemFormat: '"%s" : "%s",',
                fileHeader: 'angular.module("testModule").factory("test", [function(){return {',
                fileFooter: '"_":null};}]);'
            },
            files: [
                {
                    cwd: '.',
                    dest: 'tmp/custom_options_u',
                    src: ['test/fixtures/**/*']
                }]
        },
        destdir: {
            options: {
                itemFormat: '%s = "%s";'
            },
            files: [
                {
                    cwd: '.',
                    dest: 'tmp/',
                    src: ['test/fixtures/**/*']
                }]
        }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'dataurijs', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
