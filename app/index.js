'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var DojoWidgetGenerator = yeoman.generators.Base.extend({
  askFor: function() {
    var done = this.async();

    var testPageMapChoices = [ 'No map', 'Empty map - i.e. new Map()', 'Web map - i.e. arcgisUtils.createMap()' ];

    var languageChoices = [ 'JavaScript', 'TypeScript'];

    var testingFrameworks = [ 'Jasmine', 'Mocha'];

    // have Yeoman greet the user
    console.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('Welcome to the esri-widget generator.'));
    console.log(chalk.green('It is best to run this widget from the parent folder of your package.'));
    console.log(chalk.green('So like the', chalk.underline.bgWhite('/src') + ' folder'));

    var prompts = [{
      name: 'widgetName',
      message: 'Widget Name:',
      'default': 'Widget'
    }, {
      name: 'description',
      message: 'Description:'
    }, {
      name: 'path',
      message: 'Path to widget:',
      'default': 'app'
    }, {
      type: 'confirm',
      name: 'widgetsInTemplate',
      message: 'Will the template contain other widgets?',
      'default': true
    }, {
      type: 'list',
      name: 'testPageMap',
      message: 'What kind of map would you like in the test page?',
      choices: testPageMapChoices,
      'default': 0
    },{
      type: 'list',
      name: 'languageChoice',
      message: 'What language would you like to use?',
      choices: languageChoices,
      'default': 0
    },{
      type: 'list',
      name: 'testFramwork',
      message: 'What test framework would you like to use?',
      choices: testingFrameworks,
      'default': 0
    }];

    this.prompt(prompts, function(props) {
      this.widgetName = props.widgetName;
      this.description = props.description;
      this.path = props.path + '/';
      this.widgetsInTemplate = props.widgetsInTemplate;
      this.testPageMap = testPageMapChoices.indexOf(props.testPageMap);
      this.language = languageChoices.indexOf(props.languageChoice);
      this.testFramework = testingFrameworks.indexOf(props.testFramwork);      
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
    this.copy('tests.css', this.path + 'tests/tests.css');
    var ext = (this.language === 0) ? ".js":".ts";
    this.template('_widget' +  ext, this.path + this.widgetName + ext);
    this.template('_template.html', this.path + 'templates/' + this.widgetName + '.html');
    this.template('_test_page.html', this.path + 'tests/' + this.widgetName + 'Test.html');
    if(this.testFramework === 0) {
      //Jasmine
       this.template('_specJasmine.js', this.path + 'tests/spec/' + this.widgetName + 'Spec.js');
    } else{
       this.template('_spec.js', this.path + 'tests/spec/' + this.widgetName + 'Spec.js');
    }
   
    this.template('_widget.css', this.path + 'resources/' + this.widgetName + '.css');
  },

  projectfiles: function() {

  }
});

module.exports = DojoWidgetGenerator;