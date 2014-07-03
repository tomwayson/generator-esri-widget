/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('esri-widget generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('esri-widget:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function(done) {
    var expected = [
      // add files you expect to exist here.
      'app/test.js',
      'app/templates/test.html',
      'app/tests/testTests.html',
      'app/tests/spec/Spectest.js',
      'app/resources/test.css'
    ];

    helpers.mockPrompt(this.app, {
      'widgetName': 'test',
      'description': 'test description',
      'path': 'app',
      'widgetsInTemplate': true
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function() {
      helpers.assertFile(expected);
      done();
    });
  });
});