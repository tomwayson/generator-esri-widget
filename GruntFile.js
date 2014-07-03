/*
 * generator-esri-widget
 * github.com/tomwayson/generator-esri-widget
 *
 * Copyright (c) 2014 steveoh
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        bump: {
            options: {
                pushTo: 'origin',
                commit: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
};
