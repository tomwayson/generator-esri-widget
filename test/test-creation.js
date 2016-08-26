/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('esri-widget generator', function() {

  var expectedFiles;

  before(function() {
    expectedFiles = [
      // add files you expect to exist here.
      'app/test.js',
      'app/templates/test.html',
      'app/tests/tests.css',
      'app/tests/testTest.html',
      'app/tests/spec/testSpec.js',
      'app/resources/test.css'
    ];
  });

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

  it('creates expected files and defaults to no map', function(done) {

    helpers.mockPrompt(this.app, {
      'widgetName': 'test',
      'description': 'test description',
      'path': 'app',
      'widgetsInTemplate': true,
	  'languageChoice': 'JavaScript'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function() {
      helpers.assertFile(expectedFiles);
      // by default, don't include a map in the test page
      helpers.assertNoFileContent('app/tests/testTest.html', /map\W?=/);
      done();
    });
  });

  it('creates an empty map with new Map()', function(done) {

    helpers.mockPrompt(this.app, {
      'widgetName': 'test',
      'description': 'test description',
      'path': 'app',
      'widgetsInTemplate': true,
      'testPageMap': 'Empty map - i.e. new Map()',
	  'languageChoice': 'JavaScript'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function() {
      helpers.assertFile(expectedFiles);
      // create empty map in the test page
      helpers.assertFileContent('app/tests/testTest.html', /map\W?=\W?new Map\(/);
      done();
    });
  });

  it('creates a map from a web map', function(done) {

    helpers.mockPrompt(this.app, {
      'widgetName': 'test',
      'description': 'test description',
      'path': 'app',
      'widgetsInTemplate': true,
      'testPageMap': 'Web map - i.e. arcgisUtils.createMap()',
	  'languageChoice': 'JavaScript'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function() {
      helpers.assertFile(expectedFiles);
      // create empty map in the test page
      helpers.assertFileContent('app/tests/testTest.html', /map\W?=\W?response\.map;/);
      done();
    });
  });
  
  it('creates a TypeScript Widget when run in TS mode', function(done) {

    helpers.mockPrompt(this.app, {
      'widgetName': 'test',
      'description': 'test description',
      'path': 'app',
      'widgetsInTemplate': true,
      'testPageMap': 'Web map - i.e. arcgisUtils.createMap()',
	  'languageChoice': 'TypeScript'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function() {
	  var expectedFilesTs = [
		  // expected files for TS
		  'app/test.ts',
		  'app/templates/test.html',
		  'app/tests/tests.css',
		  'app/tests/testTest.html',
		  'app/tests/spec/testSpec.js',
		  'app/resources/test.css'
	  ];
      helpers.assertFile(expectedFilesTs);
      done();
    });
  });

});
