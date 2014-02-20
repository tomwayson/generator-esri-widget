'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var DojoWidgetGenerator = yeoman.generators.Base.extend({
  init: function() {

  },

  askFor: function() {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('You\'re using the fantastic DojoWidget generator.'));

    var prompts = [{
      name: 'widgetName',
      message: 'What do you want to call your widget?',
      default: 'widget'
    }, {
      name: 'description',
      message: 'What does this widget do?',
      default: 'really cool stuff'
    }, {
      name: 'consoleLog',
      message: 'What do you want to your console statements to look like?',
      default: 'app.widget'
    }, {
      name: 'packageName',
      message: 'What is your widgets require package name?',
      default: 'app'
    }, {
      name: 'pathName',
      message: 'What is your widgets require path?',
      default: 'app/widget'
    }, {
      name: 'path',
      message: 'Where do you want your widget? This is relative to where you are now!',
      default: 'app/'
    }];

    this.prompt(prompts, function(props) {
      this.widgetName = props.widgetName;
      this.consoleLog = props.consoleLog;
      this.pathName = props.pathName;
      this.packageName = props.packageName;
      this.path = props.path;
      this.description = props.description;

      done();
    }.bind(this));
  },

  app: function() {
    this.template('_widget.js', this.path + this.widgetName + '.js');
    this.template('_template.html', this.path + 'templates/' + this.widgetName + '.html');
    this.template('_test_page.html', this.path + '../tests/' + this.widgetName + 'Tests.html');
    this.template('_spec.js', this.path + '../tests/spec/Spec_' + this.widgetName + '.js');
  },

  projectfiles: function() {

  }
});

module.exports = DojoWidgetGenerator;