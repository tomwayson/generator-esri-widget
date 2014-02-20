/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('dojo-widget generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('dojo-widget:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function(done) {
    var expected = [
      // add files you expect to exist here.
      'app/temp/test.js',
      'app/temp/templates/test.html',
      'app/tests/testTests.html',
      'app/tests/spec/Spec_test.js'
    ];

    helpers.mockPrompt(this.app, {
      'widgetName': 'test',
      'consoleLog': '',
      'pathName': '',
      'packageName': '',
      'path': 'app/temp/',
      'description': ''
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function() {
      helpers.assertFile(expected);
      done();
    });
  });
});