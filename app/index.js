'use strict';
// var util = require('util');
// var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var DojoWidgetGenerator = yeoman.generators.Base.extend({
  askFor: function() {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('Welcome to the dojo-widget generator. It is best ' +
      'to run this widget from the parent folder of your package.'));

    var prompts = [{
      name: 'widgetName',
      message: 'Widget Name:',
      default: 'Widget'
    }, {
      name: 'description',
      message: 'Description:'
    }, {
      name: 'path',
      message: 'Path to widget:',
      default: 'app'
    }, {
      type: 'confirm',
      name: 'widgetsInTemplate',
      message: 'Will the template contain other widgets?',
      default: true
    }];

    this.prompt(prompts, function(props) {
      this.widgetName = props.widgetName;
      this.description = props.description;
      this.path = props.path + '/';
      this.widgetsInTemplate = props.widgetsInTemplate;
      this.consoleLog = this.path + this.widgetName;
      this.consoleLog = this.consoleLog.replace(/\//g, '.');
      var splitPath = this.path.split('/');
      this.packageName = splitPath[0];
      this.testPageBaseUrl = '';
      for (var x = 0; x < splitPath.length; x++) {
        this.testPageBaseUrl += '../';
      }

      done();
    }.bind(this));
  },

  app: function() {
    this.template('_widget.js', this.path + this.widgetName + '.js');
    this.template('_template.html', this.path + 'templates/' + this.widgetName + '.html');
    this.template('_test_page.html', this.path + 'tests/' + this.widgetName + 'Tests.html');
    this.template('_spec.js', this.path + 'tests/spec/Spec' + this.widgetName + '.js');
    this.template('_widget.css', this.path + 'resources/' + this.widgetName + '.css');
  },

  projectfiles: function() {

  }
});

module.exports = DojoWidgetGenerator;